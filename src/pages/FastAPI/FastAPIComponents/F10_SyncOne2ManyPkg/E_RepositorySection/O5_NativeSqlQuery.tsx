/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const results = [
  {
    dbResult: "Exactly one customer",
    action: "Returns",
    code: "Customer",
  },
  {
    dbResult: "No customer",
    action: "Returns",
    code: "None",
  },
  {
    dbResult: "More than one customer",
    action: "Raises",
    code: "MultipleResultsFound",
  },
];

const O5_NativeSqlQuery = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — Find By Id</div>
        <ULdisc>
          <Li>
            a function find By Id SQLAlchemy ORM query
            <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
          </Li>
        </ULdisc>

        <ULdisc>
          <Li>
            Native SQL Query , retruns RawMapping
            <Highlight_PYTHON code={_2_}></Highlight_PYTHON>
          </Li>
        </ULdisc>

        <ULdisc>
          <Li>
            Native SQL Query , retruns Customer Entity
            <Highlight_PYTHON code={_3_}></Highlight_PYTHON>
          </Li>
        </ULdisc>

        <article className="my-8">
          <div>
            <SpanEmerald>self.db.execute(statement)</SpanEmerald>
          </div>
          <ULdisc>
            <Li>This executes the SQL statement through the current SQLAlchemy Session.</Li>
            <Li>The result is a SQLAlchemy Result object.</Li>
            <Li>
              Important: <SpanYellow>execute()</SpanYellow> does not directly return a Customer object.
            </Li>
            <Li>It returns a result object containing the query results.</Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <div>
            <SpanEmerald>scalar_one_or_none()</SpanEmerald>
          </div>
          <ULdisc>
            <Li>This extracts the result as a single scalar value.</Li>
            <Li>In our case, because we selected Customer, that scalar is a Customer entity.</Li>
            <Li>
              It has three possible outcomes:
              <div className="mx-48 my-8 w-full max-w-2xl bg-[#f9f9f9] p-6 font-sans text-neutral-900">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="w-3/5 pb-3.5 text-sm font-semibold text-neutral-900">Database result</th>
                        <th className="w-2/5 pb-3.5 text-sm font-semibold text-neutral-900">Python result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {results.map((row) => (
                        <tr key={row.dbResult}>
                          <td className="py-3.5 pr-4 align-middle text-sm text-neutral-800">{row.dbResult}</td>
                          <td className="py-3.5 align-middle text-sm text-neutral-800">
                            {row.action}{" "}
                            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 font-mono text-xs text-neutral-800">{row.code}</code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Li>
            <Li>Why does it raise an exception if multiple customers are found?</Li>
            <Li>
              Because <SpanEmerald>scalar_one_or_none()</SpanEmerald> explicitly expects zero or one result.
            </Li>
            <Li>Since we're searching by a primary key (id), multiple results should be impossible under normal database constraints.</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_NativeSqlQuery;

const _1_ = `def find_by_id(self, customer_id: int) -> Customer | None:
        statement = select(Customer).where(Customer.id == customer_id)
        return self.db.execute(statement).scalar_one_or_none()`;

const _2_ = `from sqlalchemy import text
from sqlalchemy.engine import RowMapping

def find_by_id_sql_native(self, customer_id: int) -> RowMapping | None:
    sql = text("SELECT * FROM customers WHERE id = :customer_id")
    result = self.db.execute(sql, {"customer_id": customer_id})
    return result.mappings().one_or_none()`;

const _3_ = `from sqlalchemy import text

    def find_by_id_sql_native(self, customer_id: int) -> Customer | None:
        statement = text("SELECT * FROM customers WHERE id =:customer_id")
        return self.db.scalars(select(Customer).from_statement(statement), {"customer_id": customer_id}).one_or_none()`;
