/*


*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight, PythonHighlight } from "../../../../../components/Highlight";

const O2_LoopPrintInSameLine = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Print all elements in the same line (and not in new line) :</article>
        <PythonHighlight pythonCode={_1_} />
        this is same as in java:
        <JavaHighlight javaCode={_2_} />
      </section>
    </MainChildArea>
  );
};
export default O2_LoopPrintInSameLine;

const _1_ = `for i in range(5):
    print(i, end=" ")

result:
0 1 2 3 4`;

const _2_ = `for (int i = 0; i < 5; i++) {
	System.out.print(i); // and not println
}`;
