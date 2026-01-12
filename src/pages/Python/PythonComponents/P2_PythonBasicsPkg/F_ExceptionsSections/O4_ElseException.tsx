/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_ElseException = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In this example , the <SpanGrey>else</SpanGrey> will be executed <strong>ONLY IF NO Exception is thrown</strong> (Kind of Finaly, but we will
        see later the difference).
        <br />
        The code continues to execute.
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O4_ElseException;

const _1_ = `try:
    age = int(input("Age : "))
except ValueError:
    print("you didnt enter a valid age.")
else:
    print("No excecution were thrown")
print("Continue with code")`;
