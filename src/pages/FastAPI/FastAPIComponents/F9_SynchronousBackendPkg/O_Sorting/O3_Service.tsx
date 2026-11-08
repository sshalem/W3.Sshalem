/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O3_Service = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Service — pass sorting information to Repository</div>
        <ULdisc>
          <Li>
            I already added to <SpanEmerald>schemas/customer.py</SpanEmerald> the schema below
            <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>
            Open <SpanEmerald>customer_service.py</SpanEmerald> Update existing pagination method:
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

const _2_ = `    def get_all_customers_pagination_sorting(self, page: int, size: int, sort_by: str, direction: str) -> CustomerPageResponse:
        offset = (page - 1) * size
        customers = self.repository.find_all_paginated_sorting(offset=offset, limit=size, sort_by=sort_by, direction=direction)
        total_items = self.repository.count_all()
        total_pages = ceil(total_items / size) if total_items > 0 else 0
        return CustomerPageResponse(items=customers,
                                    page=page,
                                    size=size,
                                    total_items=total_items,
                                    total_pages=total_pages)`;
