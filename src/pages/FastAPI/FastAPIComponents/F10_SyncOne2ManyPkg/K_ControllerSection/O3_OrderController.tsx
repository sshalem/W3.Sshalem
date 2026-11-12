/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O3_OrderController = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Order Controller</div>
        <div>The Controller is now very thin, just as we generally want a Spring Boot Controller to be.</div>
        <div>
          Create a new file: <SpanEmerald>app/controllers/order_controller.py</SpanEmerald> with code below
        </div>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O3_OrderController;

const _1_ = `from typing import Annotated

from fastapi import APIRouter, Depends, status

from app.dependencies import get_order_service
from app.schemas import OrderCreate, OrderResponse
from app.services import OrderService

# Dependencies
OrderServiceDep = Annotated[OrderService, Depends(get_order_service)]

router = APIRouter(prefix="/api/orders", tags=["Orders"])


@router.post("", response_model=OrderResponse, status_code=status.HTTP_201_CREATED)
def create_order(order_service: OrderServiceDep, order_data: OrderCreate):
    return order_service.create_order(order_data)


@router.get("/{order_id}", response_model=OrderResponse, status_code=status.HTTP_200_OK)
def get_order(order_service: OrderServiceDep, order_id: int):
    return order_service.get_order_by_id(order_id)


@router.get("/customer/{customer_id}", response_model=list[OrderResponse], status_code=status.HTTP_200_OK)
def get_orders_by_customer(order_service: OrderServiceDep, customer_id: int):
    return order_service.get_customer_orders(customer_id)


@router.delete("/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_order(order_service: OrderServiceDep, order_id: int):
    order_service.delete_order(order_id)
`;
