/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O2_CustomExceptions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Exceptions</div>
        <ULdisc>
          <Li>
            Create: <SpanEmerald>app/exceptions/custom_exceptions.py</SpanEmerald>
          </Li>
          <Li>These exceptions represent application-level errors.</Li>
          <Li>We will translate them into HTTP responses at the application boundary.</Li>
        </ULdisc>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O2_CustomExceptions;

const _1_ = `class CustomerNotFoundError(Exception):
    pass


class CustomerConflictError(Exception):
    pass
`;
