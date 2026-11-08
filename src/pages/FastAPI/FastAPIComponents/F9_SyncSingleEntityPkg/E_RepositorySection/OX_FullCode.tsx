/*


*/

import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const OX_FullCode = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — FUll code</div>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default OX_FullCode;

const _1_ = `from sqlalchemy import select
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
