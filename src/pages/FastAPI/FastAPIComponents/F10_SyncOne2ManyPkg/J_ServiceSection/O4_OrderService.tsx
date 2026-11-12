/*


*/
import { MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O4_OrderService = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Order Service</div>
        <ULdisc>
          Create: <SpanEmerald>app/services/order_service.py</SpanEmerald>
        </ULdisc>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O4_OrderService;

const _1_ = `from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.exceptions import ResourceNotFoundException, DuplicateResourceException
from app.models import Order
from app.repositories import OrderRepository, CustomerRepository
from app.schemas import OrderCreate, OrderResponse


class OrderService:

    def __init__(self, order_repository: OrderRepository, customer_repository: CustomerRepository, db: Session):
        self.order_repository = order_repository
        self.customer_repository = customer_repository
        self.db = db

    def create_order(self, order_data: OrderCreate) -> OrderResponse:
        # 1. Validate Customer existence
        # 2. Create Order
        # 3. Persist Order
        # 4. Commit transaction
        # 5. Refresh database-generated values
        try:
            customer = self.customer_repository.find_by_id(order_data.customer_id)
            if customer is None:
                raise ResourceNotFoundException("Customer", order_data.customer_id)
            order = Order(customer_id=customer.id, total_amount=order_data.total_amount)
            self.order_repository.create(order)
            self.db.commit()
            self.db.refresh(order)
            return OrderResponse.model_validate(order)
        except IntegrityError as exc:
            self.db.rollback()
            raise DuplicateResourceException("Could not create Order due to a database constraint.") from exc
        except Exception:
            self.db.rollback()
            raise

    def get_order_by_id(self, order_id: int) -> OrderResponse:
        order = self.order_repository.get_order_by_id(order_id)
        if order is None:
            raise ResourceNotFoundException("Order", order_id)
        return OrderResponse.model_validate(order)

    def get_customer_orders(self, customer_id: int) -> list[OrderResponse]:
        customer = self.customer_repository.find_by_id(customer_id)
        if customer is None:
            raise ResourceNotFoundException("Customer", customer_id)
        orders = self.order_repository.get_all_orders_by_customer_id(customer_id)
        return [
            OrderResponse.model_validate(order)
            for order in orders
        ]

    def delete_order(self, order_id: int) -> None:
        try:
            order = self.order_repository.get_order_by_id(order_id)
            if order is None:
                raise ResourceNotFoundException("Order", order_id)
            self.order_repository.delete(order)
            self.db.commit()
        except Exception:
            self.db.rollback()
            raise
`;
