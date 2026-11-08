/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O3_Service = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Service — pass filters to the Repository</div>
        <ULdisc>
          <Li>
            I already added to <SpanEmerald>schemas/customer.py</SpanEmerald> the schema below
            <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>
            Open <SpanEmerald>customer_service.py</SpanEmerald> add this method:
            <Highlight_PYTHON code={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_Service;

const _1_ = `class CustomerPageResponse(BaseModel):
    items: list[CustomerResponse]
    page: int
    size: int
    total_items: int
    total_pages: int`;

const _2_ = `    def get_all_customers_dynamic_pagination_sort(self,
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
        return CustomerPageResponse(items=customers, page=page, size=size, total_items=total_items, total_pages=total_pages)`;
