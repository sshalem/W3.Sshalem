/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O2_DepenInject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Dependency injection setup</div>

        <div>
          Create a new file: <SpanEmerald>app/dependencies.py</SpanEmerald> with code below
        </div>

        <ULdisc>
          <Li>This file is our composition root.</Li>
          <Li>it tells FastAPI how to construct the objects and connect their dependencies.</Li>
          <Li>FastAPI does not automatically discover and instantiate classes in the same way Spring does.</Li>
          <Li>We explicitly define dependency providers.</Li>
        </ULdisc>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O2_DepenInject;

const _1_ = `from fastapi import Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.repositories import CustomerRepository, OrderRepository
from app.services import CustomerService, OrderService


# ==========================================
# Customer Dependencies
# ==========================================
def get_customer_repository(db: Session = Depends(get_db)) -> CustomerRepository:
    return CustomerRepository(db)


def get_customer_service(db: Session = Depends(get_db), repository: CustomerRepository = Depends(get_customer_repository)) -> CustomerService:
    return CustomerService(repository, db)


# ==========================================
# Order Dependencies
# ==========================================
def get_order_repository(db: Session = Depends(get_db)) -> OrderRepository:
    return OrderRepository(db)


def get_order_service(db: Session = Depends(get_db),
                      order_repository: OrderRepository = Depends(get_order_repository),
                      customer_repository: CustomerRepository = Depends(get_customer_repository)) -> OrderService:
    return OrderService(order_repository, customer_repository, db)
`;
