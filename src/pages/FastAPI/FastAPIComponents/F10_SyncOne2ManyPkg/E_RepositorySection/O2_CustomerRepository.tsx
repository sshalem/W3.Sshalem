/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanGrey, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O2_CustomerRepository = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — Database operations</div>

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
          <Li>
            Notice that we use <SpanEmerald>selectinload()</SpanEmerald> here, even though the relationship itself has{" "}
            <SpanEmerald>lazy="select"</SpanEmerald> .
          </Li>
          <Li> That's intentional: we can override the default loading strategy for individual queries.</Li>
        </ULdisc>
        <div className="my-8 text-2xl font-semibold">Understanding the repository</div>

        <article className="my-4 text-lg font-semibold">
          <div>FUll code</div>
          <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_CustomerRepository;

const _1_ = `from sqlalchemy import select, func
from sqlalchemy.orm import Session, selectinload

from app.models.customer import Customer
from app.schemas.customer import CustomerCreate, CustomerUpdate


class CustomerRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_all(self) -> list[Customer]:
        statement = select(Customer)
        return list(self.db.scalars(statement).all())

    def create(self, customer_data: CustomerCreate) -> Customer:
        customer = Customer(**customer_data.model_dump())
        self.db.add(customer)
        self.db.flush()
        self.db.refresh(customer)
        return customer

    # Retrieves the Customer and eagerly loads its Orders using:
    def get_by_id_with_orders(self, customer_id: int) -> Customer | None:
        statement = (select(Customer).options(selectinload(Customer.orders)).where(Customer.id == customer_id))
        return self.db.execute(statement).scalar_one_or_none()

    # Retrieves the Customer without explicitly loading Orders.
    def find_by_id(self, customer_id: int) -> Customer | None:
        statement = select(Customer).where(Customer.id == customer_id)
        return self.db.execute(statement).scalar_one_or_none()

    def get_by_email(self, email: str) -> Customer | None:
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

    def find_all_paginated(self, offset: int, limit: int) -> list[Customer]:
        statement = (select(Customer).order_by(Customer.id).offset(offset).limit(limit))
        return list(self.db.scalars(statement).all())

    def find_all_paginated_sorting(self, offset: int, limit: int, sort_by: str, direction: str) -> list[Customer]:

        # The sorting dictionary, Allowed sorting columns
        sort_columns = {
            "id": Customer.id,
            "first_name": Customer.first_name,
            "last_name": Customer.last_name,
            "email": Customer.email,
            "age": Customer.age
        }

        sort_column = sort_columns.get(sort_by)

        if sort_column is None:
            raise ValueError(f"Invalid sorting column: {sort_by}")
        if direction == "asc":
            order_expression = sort_column.asc()
        elif direction == "desc":
            order_expression = sort_column.desc()
        else:
            raise ValueError(f"Invalid sorting direction: {direction}")

        statement = (select(Customer).order_by(order_expression, Customer.id.asc()).offset(offset).limit(limit))
        return list(self.db.scalars(statement).all())

    def count_all(self) -> int:
        statement = select(func.count()).select_from(Customer)
        return self.db.scalar(statement)

    def find_all_dynamic_paginated_sort(
            self,
            offset: int,
            limit: int,
            sort_by: str,
            direction: str,
            first_name: str | None = None,
            last_name: str | None = None,
            email: str | None = None,
            min_age: int | None = None,
            max_age: int | None = None
    ) -> list[Customer]:

        conditions = self._build_conditions(first_name, last_name, email, min_age, max_age)

        sort_columns = {
            "id": Customer.id,
            "first_name": Customer.first_name,
            "last_name": Customer.last_name,
            "email": Customer.email,
            "age": Customer.age
        }

        sort_column = sort_columns.get(sort_by)

        if sort_column is None:
            raise ValueError(f"Invalid sorting column: {sort_by}")

        if direction == "asc":
            order_expression = sort_column.asc()
        elif direction == "desc":
            order_expression = sort_column.desc()
        else:
            raise ValueError(f"Invalid sorting direction: {direction}")

        statement = (select(Customer).where(*conditions).order_by(order_expression, Customer.id.asc()).offset(offset).limit(limit))
        return list(self.db.scalars(statement).all())

    def count_all_dynamic(self,
                          first_name: str | None = None,
                          last_name: str | None = None,
                          email: str | None = None,
                          min_age: int | None = None,
                          max_age: int | None = None
                          ) -> int:
        conditions = self._build_conditions(first_name, last_name, email, min_age, max_age)
        statement = (select(func.count()).select_from(Customer).where(*conditions))
        return self.db.scalar(statement) or 0

    def _build_conditions(self,
                          first_name: str | None = None,
                          last_name: str | None = None,
                          email: str | None = None,
                          min_age: int | None = None,
                          max_age: int | None = None
                          ) -> list:

        conditions = []

        if first_name is not None:
            conditions.append(Customer.first_name == first_name)
        if last_name is not None:
            conditions.append(Customer.last_name == last_name)
        if email is not None:
            conditions.append(Customer.email == email)
        if min_age is not None:
            conditions.append(Customer.age >= min_age)
        if max_age is not None:
            conditions.append(Customer.age <= max_age)
        return conditions
`;
