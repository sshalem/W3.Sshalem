/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, SpanEmerald, SpanGrey } from "../../../../../components/Highlight";

const O2_EntitySqlalchemyModel = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">In Spring Boot, you might write:</div>
        <Highlight_JAVA code={_1_}></Highlight_JAVA>
        <div className="mb-8 text-2xl font-semibold">In FastAPI, we'll use SQLAlchemy.</div>
        <div>
          Create: <SpanEmerald>app/models/customer.py</SpanEmerald>
        </div>
        <div className="my-4 font-semibold">Understanding the syntax: -</div>
        <ULdisc>
          <Li>
            <SpanGrey>Base</SpanGrey>: Our common declarative base.
          </Li>
          <Li>
            <SpanGrey>__tablename__</SpanGrey>: Database table name.
          </Li>
          <Li>
            <SpanGrey>Mapped[int]</SpanGrey>: Indicates the Python type of the mapped attribute.
          </Li>
          <Li>
            <SpanGrey>mapped_column()</SpanGrey>: Defines the database column.
          </Li>
          <Li>
            <SpanGrey>nullable=False</SpanGrey>: SQL NOT NULL.
          </Li>
          <Li>
            <SpanGrey>unique=True</SpanGrey>: SQL UNIQUE constraint.
          </Li>
          <Li>
            <SpanGrey>primary_key=True</SpanGrey>: Primary key.
          </Li>
          <Li>
            Notice something important:
            <ULdisc>
              <Li>
                <SpanGrey>Mapped[int | None]</SpanGrey> This is Python's type union syntax. It means the value can be either an integer or None.
              </Li>
              <Li>
                Conceptually, this corresponds to: <SpanGrey>private Integer age</SpanGrey>
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <Highlight_JAVA code={_2_}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O2_EntitySqlalchemyModel;

const _1_ = `@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private Integer age;
}`;

const _2_ = `from datetime import datetime

from sqlalchemy import String, Integer, DateTime, func
from sqlalchemy.orm import Mapped, mapped_column

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

    def __str__(self):
        return f"Customer({self.first_name}, {self.last_name}, {self.email}, {self.age})"

    def __repr__(self):
        return f"Customer({self.first_name}, {self.last_name}, {self.email}, {self.age})"`;
