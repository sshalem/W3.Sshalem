/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_RaiseExceptionInService = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Raise Exception in Service (Domain)</h2>
        <ULdisc>
          <Li>
            create some logic in and raise <SpanYellow>UserNotFoundError</SpanYellow>
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>In router call the function form srvice layer, Surraound with try/except block </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_RaiseExceptionInService;

const _1_ = `from exceptions.student_exceptions import UserNotFoundError

def student_email_check(email: str):
    if email == "shalem":
        raise UserNotFoundError(f"User with email '{email}' already exists")
    return email`;
