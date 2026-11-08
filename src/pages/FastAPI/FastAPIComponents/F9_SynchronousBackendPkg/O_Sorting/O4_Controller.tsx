/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O4_Controller = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Controller — expose sorting parameters</div>
        <ULdisc>
          <Li>
            Open <SpanEmerald>customer_controller.py</SpanEmerald> and Add this schema to it
          </Li>
          <Li>
            We'll use Python's <SpanYellow>Literal</SpanYellow> type to restrict the accepted values.
          </Li>
          <Li>
            What does <SpanYellow>Literal</SpanYellow> do?
          </Li>
          <Li>It restricts, so I we can have only the accepted values.</Li>
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

const _1_ = `@router.get("/paginated/sorted", response_model=CustomerPageResponse)
def get_all_customers_pagination_sorting(page: int = Query(default=1, ge=1),
                                         size: int = Query(default=10, ge=1, le=100),
                                         sort_by: Literal["id", "first_name", "last_name", "email", "age"] = Query(default="id"),
                                         direction: Literal["asc", "desc"] = Query(default="asc"),
                                         service: CustomerService = Depends(get_customer_service)):
    return service.get_all_customers_pagination_sorting(page, size, sort_by, direction)
`;
