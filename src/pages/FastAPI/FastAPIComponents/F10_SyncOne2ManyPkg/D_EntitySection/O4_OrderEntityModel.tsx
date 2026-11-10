/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, Redtext, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";
import Greentext from "../../../../../components/Highlight/Greentext";

const O4_OrderEntityModel = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">In FastAPI, we'll use SQLAlchemy.</div>
        <div>
          Create: <SpanEmerald>app/models/order.py</SpanEmerald>
        </div>
        <div>
          What We'll use:
          <ULdisc>
            <Li>
              The important database rule:
              <ULdisc>
                <Li>
                  The <SpanEmerald>foreign key</SpanEmerald> is placed on the <SpanEmerald>Many side</SpanEmerald>, meaning{" "}
                  <Redtext>orders.customer_id </Redtext> references <Greentext>customers.id</Greentext> .
                </Li>
              </ULdisc>
            </Li>
            <Li>
              <SpanYellow>Integer</SpanYellow> for the primary key and foreign key.
            </Li>
            <Li>
              <SpanYellow>Numeric(10, 2)</SpanYellow> for money, avoiding floating-point precision issues.
            </Li>
            <Li>
              <SpanYellow>DateTime(timezone=True)</SpanYellow> for the order timestamp.
            </Li>
            <Li>
              <SpanYellow>ForeignKey</SpanYellow> to connect an order to its customer.
            </Li>
          </ULdisc>
        </div>

        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O4_OrderEntityModel;

const _1_ = `from datetime import datetime
from decimal import Decimal

from sqlalchemy import (Integer, ForeignKey, Numeric, DateTime, func)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.database import Base


class Order(Base):
    __tablename__ = "orders"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    # This is the actual database foreign key:
    customer_id: Mapped[int] = mapped_column(ForeignKey("customers.id", ondelete="CASCADE"), nullable=False, index=True)
    order_date: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    total_amount: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    # Many Orders -> One Customer
    customer: Mapped["Customer"] = relationship(back_populates="orders", lazy="select")

    def __str__(self) -> str:
        return (
            f"Order(id={self.id}, "
            f"customer_id={self.customer_id}, "
            f"order_date={self.order_date}, "
            f"total_amount={self.total_amount}, "
            f"created_at={self.created_at}, "
            f"updated_at={self.updated_at})"
        )
`;
