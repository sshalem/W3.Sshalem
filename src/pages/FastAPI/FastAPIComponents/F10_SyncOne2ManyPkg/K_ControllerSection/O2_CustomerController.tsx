/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O2_CustomerController = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Customer Controller</div>
        <div>The Controller is now very thin, just as we generally want a Spring Boot Controller to be.</div>
        <div>
          Create a new file: <SpanEmerald>app/controllers/customer_controller.py</SpanEmerald> with code below
        </div>
        <ULdisc>
          <Li>
            I added new method <SpanEmerald>get_customer_orders()</SpanEmerald>
          </Li>
          <Li>and I implement it here in Customer Controller</Li>
          <Li>
            I inject dependency that is combination of both <SpanEmerald>OrderService = Depends(get_order_service)</SpanEmerald> customerService and
            OrderService
            <Highlight_PYTHON code={_2_}></Highlight_PYTHON>
          </Li>
          <Li>
            A better options is , at the top create all dependencies needed , by using <SpanEmerald>Annotated</SpanEmerald>
            <Highlight_PYTHON code={_3_}></Highlight_PYTHON>
          </Li>
        </ULdisc>
        <div className="mb-8 text-2xl font-semibold">Full Customer Controller code</div>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O2_CustomerController;

const _1_ = `from typing import Literal, Annotated

from fastapi import APIRouter, Depends, Response, status, Query, HTTPException
from pydantic import EmailStr

from app.dependencies import get_customer_service, get_order_service
from app.schemas import CustomerResponse, CustomerCreate, CustomerPageResponse, CustomerUpdate, OrderResponse
from app.services import CustomerService, OrderService

# Dependencies
CustomerServiceDep = Annotated[CustomerService, Depends(get_customer_service)]
OrderServiceDep = Annotated[OrderService, Depends(get_order_service)]

router = APIRouter(prefix="/api/customers", tags=["Customers"])


@router.post("", response_model=CustomerResponse, status_code=status.HTTP_201_CREATED)
def create_customer(customer_service: CustomerServiceDep, customer_data: CustomerCreate):
    return customer_service.create_customer(customer_data)


@router.get("", response_model=list[CustomerResponse], status_code=status.HTTP_200_OK)
def get_all_customers(customer_service: CustomerServiceDep):
    return customer_service.get_all_customers()


@router.get("/paginated", response_model=CustomerPageResponse, status_code=status.HTTP_200_OK)
def get_all_customers_pagination(customer_service: CustomerServiceDep,
                                 page: int = Query(default=1, ge=1),
                                 size: int = Query(default=10, ge=1, le=100)):
    return customer_service.get_all_customers_pagination(page, size)


@router.get("/paginated/sorted", response_model=CustomerPageResponse, status_code=status.HTTP_200_OK)
def get_all_customers_pagination_sorting(customer_service: CustomerServiceDep,
                                         page: int = Query(default=1, ge=1),
                                         size: int = Query(default=10, ge=1, le=100),
                                         sort_by: Literal["id", "first_name", "last_name", "email", "age"] = Query(default="id"),
                                         direction: Literal["asc", "desc"] = Query(default="asc")):
    return customer_service.get_all_customers_pagination_sorting(page, size, sort_by, direction)


@router.get("/dynamicFilter", response_model=CustomerPageResponse, status_code=status.HTTP_200_OK)
def get_all_customers_dynamic_pagination_sorting(customer_service: CustomerServiceDep,
                                                 page: int = Query(default=1, ge=1),
                                                 size: int = Query(default=10, ge=1, le=100),
                                                 sort_by: Literal["id", "first_name", "last_name", "email", "age"] = Query(default="id"),
                                                 direction: Literal["asc", "desc"] = Query(default="asc"),
                                                 first_name: str | None = Query(default=None, min_length=2, max_length=100),
                                                 last_name: str | None = Query(default=None, min_length=2, max_length=100),
                                                 email: EmailStr | None = Query(default=None),
                                                 min_age: int | None = Query(default=None, ge=18, le=120),
                                                 max_age: int | None = Query(default=None, ge=18, le=120)):
    if min_age is not None and max_age is not None and min_age > max_age:
        raise HTTPException(status_code=422, detail="min_age cannot be greater than max_age")

    return customer_service.get_all_customers_dynamic_pagination_sort(page=page,
                                                                      size=size,
                                                                      sort_by=sort_by,
                                                                      direction=direction,
                                                                      first_name=first_name,
                                                                      last_name=last_name,
                                                                      email=str(email) if email is not None else None,
                                                                      min_age=min_age,
                                                                      max_age=max_age)


@router.get("/{customer_id}/orders", response_model=list[OrderResponse], status_code=status.HTTP_200_OK)
def get_customer_orders(order_service: OrderServiceDep, customer_id: int):
    return order_service.get_customer_orders(customer_id)


@router.get("/{customer_id}", response_model=CustomerResponse, status_code=status.HTTP_200_OK)
def get_customer_by_id(customer_service: CustomerServiceDep, customer_id: int):
    return customer_service.get_customer_by_id(customer_id)


@router.put("/{customer_id}", response_model=CustomerResponse, status_code=status.HTTP_200_OK)
def update_customer(customer_service: CustomerServiceDep, customer_id: int, customer_data: CustomerUpdate):
    return customer_service.update_customer(customer_id, customer_data)


# @router.delete("/{customer_id}", status_code=status.HTTP_204_NO_CONTENT)
# def delete_customer(customer_id: int, customer_service: CustomerService = Depends(get_customer_service)):
#     customer_service.delete_customer(customer_id)
#     return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.delete("/{customer_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_customer(customer_service: CustomerServiceDep, customer_id: int):
    customer_service.delete_customer(customer_id)
`;

const _2_ = `@router.get("/{customer_id}/orders", response_model=list[OrderResponse], status_code=status.HTTP_200_OK)
def get_customer_orders(customer_id: int, order_service: OrderService = Depends(get_order_service)):
    return order_service.get_customer_orders(customer_id)`;

const _3_ = `# Dependencies
CustomerServiceDep = Annotated[CustomerService, Depends(get_customer_service)]
OrderServiceDep = Annotated[OrderService, Depends(get_order_service)]`;
