/*


*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight, PythonHighlight } from "../../../../../components/Highlight";

const O2_ForStringPrintInSameLine = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">Print all elements in the same line (and not in new line) :</article>
        <PythonHighlight pythonCode={_1_} />
        this is same as in java:
        <JavaHighlight javaCode={_2_} />
      </section>

      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">for loop a String</article>
        <PythonHighlight pythonCode={_3_} />
      </section>
    </MainChildArea>
  );
};
export default O2_ForStringPrintInSameLine;

const _1_ = `for i in range(5):
    print(i, end=" ")

result:
0 1 2 3 4`;

const _2_ = `for (int i = 0; i < 5; i++) {
	System.out.print(i); // and not println
}`;

const _3_ = `for x in "banana":
  print(x)`;
