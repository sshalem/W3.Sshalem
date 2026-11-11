/*


*/
import { MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O6_SelectWith2Parameters = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — Select with 2 Parameters</div>

        <div>Let's implement this in your existing CustomerRepository, using two parameters in the WHERE clause.</div>
        <div>
          For example, find customers by <SpanYellow>first_name</SpanYellow> AND <SpanYellow>age</SpanYellow> .
        </div>

        <article className="my-8">
          <div>
            <SpanEmerald>SQLAlchemy ORM query</SpanEmerald>
          </div>
          <ULdisc>
            <Highlight_PYTHON code={_1_} />
          </ULdisc>
        </article>

        <article className="my-8">
          <div>
            <SpanEmerald>Native SQL query returning RowMapping</SpanEmerald>
          </div>
          <ULdisc>
            <Highlight_PYTHON code={_2_} />
          </ULdisc>
        </article>

        <article className="my-8">
          <div>
            <SpanEmerald>Native SQL query returning Customer entities</SpanEmerald>
          </div>
          <ULdisc>
            <Highlight_PYTHON code={_3_} />
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O6_SelectWith2Parameters;

const _1_ = `from sqlalchemy import select

def find_by_first_name_and_age(self, first_name: str, age: int) -> list[Customer]:
    statement = select(Customer).where(Customer.first_name == first_name, Customer.age == age)
    return list(self.db.execute(statement).scalars().all())
`;

const _2_ = `from sqlalchemy import text
from sqlalchemy.engine import RowMapping

def find_by_first_name_and_age_native(self, first_name: str, age: int) -> list[RowMapping]:
    sql = text("SELECT * FROM customers WHERE first_name = :first_name AND age = :age")
    result = self.db.execute(sql, {"first_name": first_name, "age": age})
    return list(result.mappings().all())
`;

const _3_ = `from sqlalchemy import text, select

def find_by_first_name_and_age_native(self, first_name: str, age: int) -> list[Customer]:
    sql = text("SELECT * FROM customers WHERE first_name = :first_name AND age = :age")
    statement = select(Customer).from_statement(sql)
    return list(self.db.scalars(statement, {"first_name": first_name, "age": age}).all())
`;
