/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O9_CustomException = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        To Create our own custom Exception we will need to use a class to do that.
        <br />
        There are 2 ways to create a custom Exception
        <ULdisc>
          <Li>
            <strong>
              <em>
                <mark>Option 1 (Best practice)</mark>
              </em>
            </strong>
            <ULdisc>
              <Li>
                extend from <SpanGrey>Exception class</SpanGrey>
                <PythonHighlight pythonCode={_1_} />
              </Li>
              <Li>
                The message I pass , Python’s base <SpanGrey>Exception</SpanGrey> is stored internally and returned
              </Li>
              <Li>✔ Clean </Li>
              <Li>✔ Matches Python + FastAPI best practices</Li>

              <Li>
                then raise the exception
                <PythonHighlight pythonCode={_3_} />
              </Li>
            </ULdisc>
          </Li>

          <Li>
            <strong>
              <em>
                <mark>Option 2</mark>
              </em>
            </strong>
            <ULdisc>
              <Li>
                extend from <SpanGrey>Exception class</SpanGrey>
              </Li>
              <Li>
                <Li>create a default constructor with attribute of msg</Li>
              </Li>
              Here is how to use it
              <PythonHighlight pythonCode={_2_} />
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O9_CustomException;

const _1_ = `class CustomAmountException(Exception):
    pass
`;

const _2_ = `class CustomAmountException(Exception):
    def __init__(self, message: str):
        self.message = message
        super().__init__(message)
`;

const _3_ = `def check(amount):
    if amount > 20:
        raise CustomAmountException("the amount is wrong")


check(50)`;
