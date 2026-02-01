/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

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
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_CreateCustomExceptions;

const _1_ = `class UserAlreadyExistError(Exception):
    def __init__(self, message: str):
        self.message = message


class UserNotFoundError(Exception):
    def __init__(self, message: str):
        self.message = message
`;
