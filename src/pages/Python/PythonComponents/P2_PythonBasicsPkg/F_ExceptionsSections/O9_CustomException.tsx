/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O9_CustomException = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        To Create our own custom Exception we will need to use a class to do that.
        <ULdisc>
          <Li>create a class</Li>
          <Li>
            extend from <SpanGrey>Exception class</SpanGrey>
          </Li>
          <Li>create a default constructor with attribute of msg</Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O9_CustomException;

const _1_ = `class CustomAmountException(Exception):
    def __init__(self, msg):
        self.msg = msg


def check(amount):
    if amount > 20:
        raise CustomAmountException("the amount is wrong")


check(50)`;
