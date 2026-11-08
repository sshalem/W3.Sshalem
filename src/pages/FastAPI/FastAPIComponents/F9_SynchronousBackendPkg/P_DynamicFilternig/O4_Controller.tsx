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
            Unlike Spring boot Controller, here, For FastAPI project, must establish this order convention of API's:
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

const _1_ = `@router.get("/dynamicFilter", response_model=CustomerPageResponse)
def get_all_customers_dynamic_pagination_sorting(page: int = Query(default=1, ge=1),
                                                 size: int = Query(default=10, ge=1, le=100),
                                                 sort_by: Literal["id", "first_name", "last_name", "email", "age"] = Query(default="id"),
                                                 direction: Literal["asc", "desc"] = Query(default="asc"),
                                                 first_name: str | None = Query(default=None, min_length=2, max_length=100),
                                                 last_name: str | None = Query(default=None, min_length=2, max_length=100),
                                                 email: EmailStr | None = Query(default=None),
                                                 min_age: int | None = Query(default=None, ge=18, le=120),
                                                 max_age: int | None = Query(default=None, ge=18, le=120),
                                                 service: CustomerService = Depends(get_customer_service)):
    if min_age is not None and max_age is not None and min_age > max_age:
        raise HTTPException(status_code=422, detail="min_age cannot be greater than max_age")

    return service.get_all_customers_dynamic_pagination_sort(page=page,
                                                             size=size,
                                                             sort_by=sort_by,
                                                             direction=direction,
                                                             first_name=first_name,
                                                             last_name=last_name,
                                                             email=str(email) if email is not None else None,
                                                             min_age=min_age,
                                                             max_age=max_age)
`;
