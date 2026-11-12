/*


*/
import { MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O3_CustomerService = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Customer Service</div>
        <ULdisc>
          Create: <SpanEmerald>app/services/customer_service.py</SpanEmerald>
        </ULdisc>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O3_CustomerService;

const _1_ = `from math import ceil

from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.exceptions import CustomerConflictException, CustomerNotFoundException
from app.models import Customer
from app.repositories import CustomerRepository
from app.schemas import CustomerCreate, CustomerUpdate, CustomerPageResponse


class CustomerService:

    def __init__(self, repository: CustomerRepository, db: Session):
        self.repository = repository
        self.db = db

    def create_customer(self, data: CustomerCreate) -> Customer:
        try:
            existing_customer = self.repository.find_by_email(data.email)
            if existing_customer:
                raise CustomerConflictException("A customer with this email already exists")
            customer = self.repository.create(data)
            self.db.commit()
            self.db.refresh(customer)
            return customer
        except IntegrityError as exc:
            self.db.rollback()
            raise CustomerConflictException("A customer with this email already exists") from exc

        except Exception:
            self.db.rollback()
            raise

    def get_customer_by_id(self, customer_id: int) -> Customer:
        customer = self.repository.find_by_id(customer_id)
        if customer is None:
            raise CustomerNotFoundException(f"Customer with ID {customer_id} was not found")
        return customer

    def get_all_customers(self) -> list[Customer]:
        customers = self.repository.find_all()
        for customer in customers:
            print(repr(customer))
        return customers

    def update_customer(self, customer_id: int, data: CustomerUpdate) -> Customer:
        try:
            customer = self.get_customer(customer_id)
            existing_customer = self.repository.find_by_email(data.email)
            if existing_customer and existing_customer.id != customer_id:
                raise CustomerConflictException("Another customer already uses this email")
            updated_customer = self.repository.update(customer, data)
            self.db.commit()
            self.db.refresh(updated_customer)
            return updated_customer
        except CustomerConflictException:
            self.db.rollback()
            raise
        except CustomerNotFoundException:
            self.db.rollback()
            raise
        except IntegrityError as exc:
            self.db.rollback()
            raise CustomerConflictException("Another customer already uses this email") from exc
        except Exception:
            self.db.rollback()
            raise

    def delete_customer(self, customer_id: int) -> None:
        try:
            customer = self.get_customer(customer_id)
            self.repository.delete(customer)
            self.db.commit()
        except CustomerNotFoundException:
            self.db.rollback()
            raise
        except Exception:
            self.db.rollback()
            raise

    def get_all_customers_pagination(self, page: int, size: int) -> CustomerPageResponse:
        offset = (page - 1) * size
        customers = self.repository.find_all_paginated(offset, size)
        total_items = self.repository.count_all()
        total_pages = ceil(total_items / size)
        return CustomerPageResponse(items=customers, page=page, size=size, total_items=total_items, total_pages=total_pages)

    def get_all_customers_pagination_sorting(self, page: int, size: int, sort_by: str, direction: str) -> CustomerPageResponse:
        offset = (page - 1) * size
        customers = self.repository.find_all_paginated_sorting(offset=offset, limit=size, sort_by=sort_by, direction=direction)
        total_items = self.repository.count_all()
        total_pages = ceil(total_items / size) if total_items > 0 else 0
        return CustomerPageResponse(items=customers, page=page, size=size, total_items=total_items, total_pages=total_pages)

    def get_all_customers_dynamic_pagination_sort(self,
                                                  page: int,
                                                  size: int,
                                                  sort_by: str,
                                                  direction: str,
                                                  first_name: str | None = None,
                                                  last_name: str | None = None,
                                                  email: str | None = None,
                                                  min_age: int | None = None,
                                                  max_age: int | None = None
                                                  ) -> CustomerPageResponse:

        offset = (page - 1) * size

        customers = self.repository.find_all_dynamic_paginated_sort(offset=offset,
                                                                    limit=size,
                                                                    sort_by=sort_by,
                                                                    direction=direction,
                                                                    first_name=first_name,
                                                                    last_name=last_name,
                                                                    email=email,
                                                                    min_age=min_age,
                                                                    max_age=max_age)

        total_items = self.repository.count_all_dynamic(first_name=first_name, last_name=last_name, email=email, min_age=min_age, max_age=max_age)
        total_pages = ceil(total_items / size) if total_items > 0 else 0
        return CustomerPageResponse(items=customers, page=page, size=size, total_items=total_items, total_pages=total_pages)
`;
