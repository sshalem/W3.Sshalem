/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O4_Controller = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Controller — expose pagination through FastAPI</div>
        <ULdisc>
          <Li>
            Open <SpanEmerald>customer_controller.py</SpanEmerald> and Add this schema to it
          </Li>
          <Li>
            Unlike Spring boot Controller, here, For astAPI project, must establish this order convention of API's:
            <Highlight_PYTHON code={_0_} />
          </Li>
          <Highlight_PYTHON code={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_Controller;

const _0_ = `# Static routes first
@router.get("/paginated")
@router.get("/search")

# General routes
@router.get("/")

# Dynamic routes last
@router.get("/{customer_id}")`;

const _1_ = `@router.get("/paginated", response_model=CustomerPageResponse)
def get_all_customers_pagination(page: int = Query(default=1, ge=1),
                                 size: int = Query(default=10, ge=1, le=100),
                                 service: CustomerService = Depends(get_customer_service)):
    return service.get_all_customers_pagination(page, size)
`;
