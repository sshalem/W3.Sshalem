/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O3_Service = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Service — calculate pagination</div>
        <ULdisc>
          <Li>
            Open <SpanEmerald>schemas/customer.py</SpanEmerald> and Add this schema to it
            <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>
            Open <SpanEmerald>customer_service.py</SpanEmerald> and Add code :
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

const _2_ = `    def get_all_customers_pagination(self, page: int, size: int) -> CustomerPageResponse:
        offset = (page - 1) * size
        customers = self.repository.find_all_paginated(offset, size)
        total_items = self.repository.count_all()
        total_pages = ceil(total_items / size)
        return CustomerPageResponse(items=customers, page=page, size=size, total_items=total_items,
                                    total_pages=total_pages)`;
