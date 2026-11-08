/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, Redtext, SpanEmerald, SpanGrey, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O3_CreateCustomer = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — Create Customer</div>
        <ULdisc>
          <Li>
            a function for Create Customer
            <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
          </Li>
        </ULdisc>

        <article className="my-8">
          <div>
            <SpanEmerald>customer = Customer(**customer_data.model_dump())</SpanEmerald>
          </div>
          <ULdisc>
            <Li>Convert Pydantic schema into SQLAlchemy entity</Li>
            <Li>
              <SpanGrey>model_dump()</SpanGrey> It converts the Pydantic object into a Python dictionary
            </Li>
            <Li>
              <SpanGrey>**</SpanGrey> - In Python, <SpanGrey>**</SpanGrey> unpacks a dictionary into keyword arguments.
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <div>
            <SpanEmerald>self.db.add(customer)</SpanEmerald>
          </div>
          <ULdisc>
            <Li>This tells SQLAlchemy that the new entity should be tracked by the current Session.</Li>
            <Li>
              At this point:
              <ULdisc>
                <Li>The Python Customer object exists in memory.</Li>
                <Li>SQLAlchemy tracks it as a new, pending object.</Li>
                <Li>An INSERT has not necessarily been sent to PostgreSQL.</Li>
                <Li>The transaction has not been committed.</Li>
                <Li>
                  There is an important distinction: SQLAlchemy <SpanGrey>add()</SpanGrey> does not necessarily execute the INSERT immediately.
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <div>
            <SpanEmerald>self.db.flush()</SpanEmerald>
          </div>
          <ULdisc>
            <Li>
              <SpanGrey>flush()</SpanGrey> synchronizes pending changes in the Session with the database by issuing the necessary SQL statements.
            </Li>
            <Li>Now PostgreSQL executes the INSERT.</Li>
            <Li>
              <Redtext>
                The Repository <SpanRed>should not commit</SpanRed> here because we've deliberately placed transaction management in the{" "}
                <SpanRed>service</SpanRed>.
              </Redtext>
            </Li>
            <Li>
              <SpanGrey>commit()</SpanGrey> - Permanently save all database changes made during the current transaction , (I use commit at service
              layer.)
            </Li>
            <Li>
              The most important distinction:
              <ULdisc>
                <Li>
                  <SpanYellow>flush()</SpanYellow> = Execute pending SQL statements. (sending the changes to PostgreSQL)
                </Li>
                <Li>
                  <SpanYellow>commit()</SpanYellow> = Finalize the transaction (confirming that the transaction is complete.)
                </Li>
                <Li>
                  <SpanYellow>rollback()</SpanYellow> = Cancel uncommitted changes.
                </Li>
              </ULdisc>
            </Li>
            <Li>
              If an Insert (FLush) was executed , but the transaction remains <SpanRed>uncommitted</SpanRed>
              <ULdisc>
                <Li>
                  the Session eventually closes, SQLAlchemy <SpanRed>rolls back</SpanRed> any remaining uncommitted transaction.
                </Li>
                <Li>The customer will not be saved.</Li>
                <Li>
                  The <SpanRed>rollback</SpanRed> cancels the uncommitted database changes in this transaction.
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <div>
            <SpanEmerald>self.db.refresh(customer)</SpanEmerald>
          </div>
          <ULdisc>
            <Li>This reloads the entity's database-backed state from PostgreSQL.</Li>
            <Li>
              SQLAlchemy issues a SELECT similar to: <SpanGrey>SELECT * FROM customers WHERE id = 1;</SpanGrey>
            </Li>
            <Li>Why would we need this?</Li>
            <Li>refresh() ensures that the Python object reflects the current database values.</Li>
            <Li>SQLAlchemy can automatically retrieve many generated values during INSERT, so an explicit refresh is not always necessary.</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_CreateCustomer;

const _1_ = `def create(self, customer_data: CustomerCreate) -> Customer:
        customer = Customer(**customer_data.model_dump())
        self.db.add(customer)
        self.db.flush()
        self.db.refresh(customer)
        return customer`;
