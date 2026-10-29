/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanYellow } from "../../../../../components/Highlight";

const O3_CreateCustomExceptions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Create Custom Exceptions</h2>
        <ULdisc>
          <Li>create custom exceptions, knonw as Domain exception (service-level)</Li>
          <Li>
            In <SpanYellow>student_exceptions.py</SpanYellow> create for the example 2 exceptions
          </Li>
          <Li>
            In Service layer <SpanYellow>student_service.py</SpanYellow> In write some logic and raise exception (raises domain exception)
          </Li>
          <Highlight_PYTHON code={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_CreateCustomExceptions;

const _1_ = `class UserAlreadyExistError(Exception):
    pass


class UserNotFoundError(Exception):
    pass`;
