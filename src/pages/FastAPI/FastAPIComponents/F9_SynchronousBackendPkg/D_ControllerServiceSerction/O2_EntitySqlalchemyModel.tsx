/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, SpanEmerald } from "../../../../../components/Highlight";

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
            <SpanEmerald>Base</SpanEmerald>: Our common declarative base.
          </Li>
          <Li>
            <SpanEmerald>__tablename__</SpanEmerald>: Database table name.
          </Li>
          <Li>
            <SpanEmerald>Mapped[int]</SpanEmerald>: Indicates the Python type of the mapped attribute.
          </Li>
          <Li>
            <SpanEmerald>mapped_column()</SpanEmerald>: Defines the database column.
          </Li>
          <Li>
            <SpanEmerald>nullable=False</SpanEmerald>: SQL NOT NULL.
          </Li>
          <Li>
            <SpanEmerald>unique=True</SpanEmerald>: SQL UNIQUE constraint.
          </Li>
          <Li>
            <SpanEmerald>primary_key=True</SpanEmerald>: Primary key.
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

const _2_ = `from sqlalchemy import String, Integer
from sqlalchemy.orm import Mapped, mapped_column

from app.database.database import Base


class Customer(Base):

    __tablename__ = "customers"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )

    first_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    last_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    email: Mapped[str] = mapped_column(
        String(150),
        unique=True,
        nullable=False,
        index=True
    )

    age: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True
    )
`;
