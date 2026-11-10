/*


*/
import { Link } from "react-router-dom";
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O3_CustomerEntityModel = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">In FastAPI, we'll use SQLAlchemy. (In Spring Boot , JPA/Hibernate)</div>
        <div>
          Create: <SpanEmerald>app/models/customer.py</SpanEmerald> as follows:
        </div>
        <div className="my-4 font-semibold">Understanding the syntax: </div>
        <ULdisc>
          <Li>
            See all syntax I explained in{" "}
            <Link to={"/fastapi/sync-single/entity#2.Entity-SqlalchemyModel"}>
              <span className="rounded-sm px-[0.27rem] tracking-wider text-blue-700 underline">Entity-SqlalchemyModel</span>
            </Link>
          </Li>
          <Li>
            Add this line, for <SpanEmerald>Bidirectional One-to-Many </SpanEmerald> relationship
            <br />
            <br /> <SpanYellow>customer: Mapped["Customer"] = relationship( "Customer", back_populates="orders" )</SpanYellow>
          </Li>
        </ULdisc>
        <Highlight_PYTHON code={_2_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O3_CustomerEntityModel;

const _2_ = `from datetime import datetime

from sqlalchemy import String, Integer, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.database import Base


class Customer(Base):
    __tablename__ = "customers"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    first_name: Mapped[str] = mapped_column(String(100), nullable=False)
    last_name: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(150), unique=True, nullable=False, index=True)
    age: Mapped[int | None] = mapped_column(Integer, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    # Bidirectional One-to-Many relationship
    orders: Mapped[list["Order"]] = relationship("Order", back_populates="customer")

    def __str__(self) -> str:
        return (
            f"Customer(id={self.id}, "
            f"first_name='{self.first_name}', "
            f"last_name='{self.last_name}', "
            f"email='{self.email}', "
            f"age={self.age}, "
            f"created_at={self.created_at}, "
            f"updated_at={self.updated_at})"
        )`;
