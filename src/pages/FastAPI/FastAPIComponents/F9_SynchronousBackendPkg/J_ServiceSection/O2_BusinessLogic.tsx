/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, Redtext, SpanEmerald, SpanGrey, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O2_BusinessLogic = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Service — Business logic</div>

        <div>A few important architectural points:</div>
        <ULDecimal>
          <Li>The Service does not know anything about HTTP requests or FastAPI.</Li>
          <Li>
            It receives a <SpanYellow>Repository instance through constructor injection</SpanYellow> .
          </Li>
          <Li>It controls the transaction boundaries.</Li>
          <Li>It raises business exceptions rather than HTTP exceptions.</Li>
        </ULDecimal>

        <div className="my-8">
          <SpanEmerald>IntegrityError</SpanEmerald> handling is important because two concurrent requests could attempt to create the same email.
          Checking first does not eliminate that race condition; the database's unique constraint remains the final protection.
        </div>
        <ULdisc>
          <Li>The Service handles business logic and transaction management.</Li>
          <Li>Now we implement the Service layer.</Li>
          <Li>This is where we put business rules, validations beyond basic schema validation, and transaction management.</Li>
          <Li>
            <SpanRed>Important Java comparison</SpanRed>
            <ULdisc>
              <Li>
                <SpanGrey>db.commit()</SpanGrey> This is equivalent in purpose to committing a database transaction in Spring.
              </Li>
              <Li></Li>
              <Li>
                <SpanGrey>db.rollback()</SpanGrey> Rolls back the current transaction.
              </Li>
              <Li>Notice that we check whether an email already exists before inserting.</Li>
              <Li>However, that check alone is not sufficient for concurrent requests.</Li>
              <Li>The database UNIQUE constraint is still essential.</Li>
              <Li>That's why we also catch IntegrityError.</Li>
            </ULdisc>
          </Li>
          <Li>
            <SpanYellow>Architectural decision:</SpanYellow>
            <ULdisc>
              <Li>The Service owns the transaction boundary.</Li>
              <Li>
                The Repository performs database operations <Redtext>but doesn't commit independently</Redtext>.
              </Li>
              <Li>This is a good separation of responsibilities.</Li>
            </ULdisc>
          </Li>
          <Li>
            Create: <SpanEmerald>app/services/customer_service.py</SpanEmerald>
          </Li>
        </ULdisc>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O2_BusinessLogic;

const _1_ = `from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.repositories.customer_repository import CustomerRepository
from app.schemas.customer import CustomerCreate, CustomerUpdate
from app.models.customer import Customer
from app.exceptions.custom_exceptions import (CustomerNotFoundError, CustomerConflictError)


class CustomerService:

    def __init__(self, repository: CustomerRepository):
        self.repository = repository

    def create_customer(self, data: CustomerCreate) -> Customer:
        try:
            existing_customer = self.repository.find_by_email(data.email)
            if existing_customer:
                raise CustomerConflictError("A customer with this email already exists")
            customer = self.repository.create(data)
            self.repository.db.commit()
            self.repository.db.refresh(customer)
            return customer
        except IntegrityError as exc:
            self.repository.db.rollback()
            raise CustomerConflictError(
                "A customer with this email already exists"
            ) from exc

        except Exception:
            self.repository.db.rollback()
            raise

    def get_customer(self, customer_id: int) -> Customer:
        customer = self.repository.find_by_id(customer_id)
        if customer is None:
            raise CustomerNotFoundError(f"Customer with ID {customer_id} was not found")
        return customer

    def get_all_customers(self) -> list[Customer]:
        return self.repository.find_all()

    def update_customer(self, customer_id: int, data: CustomerUpdate) -> Customer:
        try:
            customer = self.get_customer(customer_id)
            existing_customer = self.repository.find_by_email(data.email)
            if existing_customer and existing_customer.id != customer_id:
                raise CustomerConflictError("Another customer already uses this email")

            updated_customer = self.repository.update(customer, data)
            self.repository.db.commit()
            self.repository.db.refresh(updated_customer)
            return updated_customer
        except IntegrityError as exc:
            self.repository.db.rollback()
            raise CustomerConflictError("Another customer already uses this email") from exc

        except Exception:
            self.repository.db.rollback()
            raise

    def delete_customer(self, customer_id: int) -> None:
        try:
            customer = self.get_customer(customer_id)
            self.repository.delete(customer)
            self.repository.db.commit()
        except Exception:
            self.repository.db.rollback()
            raise
`;
