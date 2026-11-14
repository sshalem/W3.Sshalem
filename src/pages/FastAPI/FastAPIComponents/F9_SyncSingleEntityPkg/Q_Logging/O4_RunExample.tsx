/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O4_RunExample = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Run Example in controller</div>
        <ULdisc>
          <Li>Lets add logging in controller for example</Li>
          <Li>
            Add <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>
            Inside existing controller methods, add appropriate logging
            <Highlight_PYTHON code={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_RunExample;

const _1_ = `import logging

logger = logging.getLogger(__name__)
`;

const _2_ = `@router.get("/{customer_id}", response_model=CustomerResponse)
def get_customer(customer_id: int, service: CustomerService = Depends(get_customer_service)):
    logger.info("Customer created successfully. customer_id=%s", customer_id)
    return service.get_customer(customer_id)`;
