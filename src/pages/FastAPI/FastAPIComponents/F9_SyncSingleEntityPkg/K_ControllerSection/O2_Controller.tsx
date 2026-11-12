/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O2_Controller = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Controller</div>
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
            A better options is , at the top create all dependencies needed , by using <SpanEmerald>Annotated</SpanEmerald>
            <Highlight_PYTHON code={_3_}></Highlight_PYTHON>
          </Li>
        </ULdisc>
        <Highlight_JAVA code={_1_}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O2_Controller;

const _3_ = `# Dependencies
CustomerServiceDep = Annotated[CustomerService, Depends(get_customer_service)]`;

const _1_ = `from fastapi import APIRouter, Depends, Response, status

from app.dependencies import get_customer_service
from app.schemas.customer import (CustomerCreate, CustomerUpdate, CustomerResponse)
from app.services.customer_service import CustomerService

router = APIRouter(prefix="/api/customers", tags=["Customers"])


@router.post("", response_model=CustomerResponse, status_code=status.HTTP_201_CREATED)
def create_customer(data: CustomerCreate, service: CustomerService = Depends(get_customer_service)):
    return service.create_customer(data)


@router.get("", response_model=list[CustomerResponse])
def get_all_customers(service: CustomerService = Depends(get_customer_service)):
    return service.get_all_customers()


@router.get("/{customer_id}", response_model=CustomerResponse)
def get_customer(customer_id: int, service: CustomerService = Depends(get_customer_service)):
    return service.get_customer(customer_id)


@router.put("/{customer_id}", response_model=CustomerResponse)
def update_customer(customer_id: int, data: CustomerUpdate, service: CustomerService = Depends(get_customer_service)):
    return service.update_customer(customer_id, data)


@router.delete("/{customer_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_customer(customer_id: int, service: CustomerService = Depends(get_customer_service)):
    service.delete_customer(customer_id)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
`;
