/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, Redtext, SpanEmerald, SpanGrey, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O2_BusinessLogic = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Service — Business logic</div>
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

const _1_ = `from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.models.customer import Customer
from app.repositories.customer_repository import CustomerRepository
from app.schemas.customer import CustomerCreate, CustomerUpdate


class CustomerService:

    @staticmethod
    def create_customer(db: Session, data: CustomerCreate):
        existing_customer = CustomerRepository.find_by_email(db, data.email)
        if existing_customer:
            raise ValueError("Email already exists")

        customer = Customer(**data.model_dump())
        try:
            CustomerRepository.create(db, customer)
            db.commit()
            db.refresh(customer)
            return customer
        except IntegrityError:
            db.rollback()
            raise ValueError("Customer could not be created")

    @staticmethod
    def get_customer(db: Session, customer_id: int):
        customer = CustomerRepository.find_by_id(db, customer_id)
        if not customer:
            raise ValueError("Customer not found")
        return customer

    @staticmethod
    def get_all_customers(db: Session):
        return CustomerRepository.find_all(db)

    @staticmethod
    def update_customer(db: Session, customer_id: int, data: CustomerUpdate):
        customer = CustomerRepository.find_by_id(db, customer_id)
        if not customer:
            raise ValueError("Customer not found")
        existing_customer = CustomerRepository.find_by_email(db, data.email)
        if existing_customer and existing_customer.id != customer_id:
            raise ValueError("Email already belongs to another customer")

        try:
            CustomerRepository.update(db, customer, data.model_dump())
            db.commit()
            db.refresh(customer)
            return customer
        except IntegrityError:
            db.rollback()
            raise ValueError("Customer could not be updated")

    @staticmethod
    def delete_customer(db: Session, customer_id: int):
        customer = CustomerRepository.find_by_id(db, customer_id)
        if not customer:
            raise ValueError("Customer not found")
        CustomerRepository.delete(db, customer)
        db.commit()
        return True`;
