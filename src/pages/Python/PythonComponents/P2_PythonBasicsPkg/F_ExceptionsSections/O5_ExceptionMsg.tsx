/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O5_ExceptionMsg = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In this example we have an atrribute (to show the msg) for the Error to <strong>except ValueError as ex</strong>:
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O5_ExceptionMsg;

const _1_ = `try:
    age = int(input("Age : "))
except ValueError as ex:
    print(ex)
    print("you didnt enter a valid age.",  ex)
else:
    print("No exception were thrown")`;
