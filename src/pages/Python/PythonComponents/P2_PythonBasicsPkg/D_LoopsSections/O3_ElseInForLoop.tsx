/*


*/
import { MainChildArea } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O3_ElseInForLoop = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Print all numbers from 0 to 4, and print a message when the loop has ended:</article>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O3_ElseInForLoop;

const _1_ = `for i in range(5):
  print(i)
else:
  print("Finally finished!")`;
