/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanGrey } from "../../../../../components/Highlight";

const O4_OrderRepository = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">OrderRepository — Database operations</div>

        <div>
          Create: <SpanEmerald>app/repositories/order_repository.py</SpanEmerald>
        </div>

        <ULdisc>
          <Li>The Repository is responsible only for database operations.</Li>
          <Li>
            Create: <SpanGrey>app/repositories/order_repository.py</SpanGrey>
          </Li>
        </ULdisc>

        <article className="my-4 text-lg font-semibold">
          <div>FUll code</div>
          <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_OrderRepository;

const _1_ = `from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models import Order


class OrderRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, order: Order) -> Order:
        self.db.add(order)
        self.db.flush()
        self.db.refresh(order)
        return order

    def get_order_by_id(self, order_id: int) -> Order | None:
        statement = select(Order).where(Order.id == order_id)
        return self.db.scalar(statement)

    def get_all_orders_by_customer_id(self, customer_id: int) -> list[Order]:
        statement = select(Order).where(Order.customer_id == customer_id).order_by(Order.order_date.desc())
        return list(self.db.scalars(statement).all())

    def delete(self, order: Order) -> None:
        self.db.delete(order)
        self.db.flush()        
`;
