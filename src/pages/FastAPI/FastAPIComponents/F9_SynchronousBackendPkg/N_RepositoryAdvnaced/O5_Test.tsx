/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O5_Test = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Controller — expose pagination through FastAPI</div>
        <ULdisc>
          <Li>
            Open <SpanEmerald>customer_controller.py</SpanEmerald> and Add this schema to it
          </Li>
          <Li>
            Add the pagination parameters to your existing GET endpoint:
            <Highlight_PYTHON code={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_Test;

const _1_ = `class CustomerPageResponse(BaseModel):
    items: list[CustomerResponse]
    page: int
    size: int
    total_items: int
    total_pages: int`;
