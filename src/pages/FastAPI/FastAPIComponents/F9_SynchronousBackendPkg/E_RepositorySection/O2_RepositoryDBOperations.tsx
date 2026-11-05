/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, Highlight_PYTHON, SpanEmerald, SpanGrey, SpanYellow } from "../../../../../components/Highlight";

const O2_RepositoryDBOperations = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — Database operations</div>
        <Highlight_JAVA code={_1_}></Highlight_JAVA>
        <div className="my-4">Now let's implement the Repository layer.</div>
        <div>
          Create: <SpanEmerald>app/repositories/CustomerRepository.py</SpanEmerald>
        </div>

        <ULdisc>
          <Li>In Spring Boot, you have:</Li>
          <Li>
            Spring Data JPA generates many operations automatically.
            <Highlight_JAVA code={_1_}></Highlight_JAVA>
          </Li>
        </ULdisc>

        <ULdisc>
          <Li>SQLAlchemy works differently. </Li>
          <Li>We explicitly implement our repository methods.</Li>
          <Li>
            Create: <SpanGrey>app/repositories/customer_repository.py</SpanGrey>
          </Li>
        </ULdisc>
        <div className="my-8 text-2xl font-semibold">Understanding the repository</div>
        <article className="my-4">
          <div className="text-lg font-semibold">INSERT</div>
          <ULdisc>
            <Li>
              <SpanGrey>add()</SpanGrey> registers the entity with the session.
            </Li>
            <Li>
              <SpanGrey>flush()</SpanGrey> sends pending SQL statements to the database without committing the transaction.
            </Li>
            <Li>This is important because we want the Service layer to control transactions.</Li>
            <Highlight_PYTHON code={_3_}></Highlight_PYTHON>
          </ULdisc>
        </article>

        <article className="my-4">
          <div className="text-lg font-semibold">SELECT</div>
          <ULdisc>
            <Li>This is SQLAlchemy's modern query syntax.</Li>
            <Li>
              Equivalent SQL: <SpanYellow>SELECT * FROM customers WHERE id = ?</SpanYellow>
            </Li>
            <Highlight_PYTHON code={_4_}></Highlight_PYTHON>
          </ULdisc>
        </article>

        <article className="my-4">
          <div className="text-lg font-semibold">UPDATE</div>
          <ULdisc>
            <Li>
              Python's <SpanYellow>setattr()</SpanYellow> dynamically assigns an object's attribute.
            </Li>
            <Li>
              Equivalent Java concept: <SpanYellow>customer.setFirstName(data.getFirstName());</SpanYellow>
            </Li>
            <Highlight_PYTHON code={_5_}></Highlight_PYTHON>
          </ULdisc>
        </article>

        <article className="my-4">
          <div className="text-lg font-semibold">DELETE</div>
          <ULdisc>
            <Li>Marks the entity for deletion. The SQL is executed on flush or commit.</Li>
            <Highlight_PYTHON code={_6_}></Highlight_PYTHON>
          </ULdisc>
        </article>

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


class CustomerRepository:

    # INSERT
    @staticmethod
    def create(db: Session, customer: Customer):
        db.add(customer)
        db.flush()
        return customer

    # SELECT BY ID
    @staticmethod
    def find_by_id(db: Session, customer_id: int):
        statement = select(Customer).where(Customer.id == customer_id)
        return db.scalar(statement)

    # SELECT ALL
    @staticmethod
    def find_all(db: Session):
        statement = select(Customer).order_by(Customer.id)
        return list(db.scalars(statement).all())

    # SELECT BY EMAIL
    @staticmethod
    def find_by_email(db: Session, email: str):
        statement = select(Customer).where(Customer.email == email)
        return db.scalar(statement)

    # UPDATE
    @staticmethod
    def update(db: Session, customer: Customer, data: dict):
        for key, value in data.items():
            setattr(customer, key, value)
        db.flush()
        return customer

    # DELETE
    @staticmethod
    def delete(db: Session, customer: Customer):
        db.delete(customer)
        db.flush()`;

const _3_ = `db.add(customer)
db.flush()`;

const _4_ = `statement = select(Customer).where(Customer.id == customer_id)
return db.scalar(statement)`;

const _5_ = `for key, value in data.items():
    setattr(customer, key, value)`;

const _6_ = `db.delete(customer)`;
