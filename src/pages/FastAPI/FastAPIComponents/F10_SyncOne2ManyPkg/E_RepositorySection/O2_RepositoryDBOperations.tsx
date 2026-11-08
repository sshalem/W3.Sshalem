/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, Highlight_PYTHON, SpanEmerald, SpanGrey, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O2_RepositoryDBOperations = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — Database operations</div>
        <ULdisc>
          <Li>In Spring Boot, you have:</Li>
          <Li>
            Spring Data JPA generates many operations automatically.
            <Highlight_JAVA code={_1_}></Highlight_JAVA>
          </Li>
        </ULdisc>

        <div className="my-4">Now let's implement the Repository layer.</div>
        <div>
          Create: <SpanEmerald>app/repositories/CustomerRepository.py</SpanEmerald>
        </div>

        <ULdisc>
          <Li>The Repository is responsible only for database operations.</Li>
          <Li>
            Create: <SpanGrey>app/repositories/customer_repository.py</SpanGrey>
          </Li>
          <Li>It is a regular Python class.</Li>
          <Li>
            It receives <SpanEmerald>Session</SpanEmerald> through its <SpanYellow>constructor</SpanYellow> .
          </Li>
          <Li>It has regular instance methods.</Li>
          <Li>It does not commit or roll back transactions.</Li>
          <Li>
            That responsibility belongs to the <SpanEmerald>Service</SpanEmerald> .
          </Li>
          <Li>
            Java comparison:
            <ULdisc>
              <Li>
                Think of this as a Spring Data repository implementation, except we're explicitly writing the SQLAlchemy operations rather than
                relying on Spring Data JPA's generated repository methods.
              </Li>
              <Li>
                One important detail: <SpanRed>flush()</SpanRed> sends pending SQL statements to the database, but it does not{" "}
                <SpanRed>commit</SpanRed> the transaction.
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <div className="my-8 text-2xl font-semibold">Understanding the repository</div>

        <article className="my-4 text-lg font-semibold">
          <div>FUll code</div>
          <Highlight_PYTHON code={_2_}></Highlight_PYTHON>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_RepositoryDBOperations;

const _1_ = `@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);
}`;

const _2_ = `from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.customer import Customer
from app.schemas.customer import CustomerCreate, CustomerUpdate


class CustomerRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, customer_data: CustomerCreate) -> Customer:
        customer = Customer(**customer_data.model_dump())
        self.db.add(customer)
        self.db.flush()
        self.db.refresh(customer)
        return customer

    def find_by_id(self, customer_id: int) -> Customer | None:
        statement = select(Customer).where(Customer.id == customer_id)
        return self.db.execute(statement).scalar_one_or_none()

    def find_by_email(self, email: str) -> Customer | None:
        statement = select(Customer).where(Customer.email == email)
        return self.db.execute(statement).scalar_one_or_none()

    def find_all(self) -> list[Customer]:
        statement = select(Customer).order_by(Customer.id)
        return list(self.db.execute(statement).scalars().all())

    def update(self, customer: Customer, customer_data: CustomerUpdate) -> Customer:
        update_data = customer_data.model_dump()
        for field, value in update_data.items():
            setattr(customer, field, value)

        self.db.flush()
        self.db.refresh(customer)
        return customer

    def delete(self, customer: Customer) -> None:
        self.db.delete(customer)
        self.db.flush()
`;
