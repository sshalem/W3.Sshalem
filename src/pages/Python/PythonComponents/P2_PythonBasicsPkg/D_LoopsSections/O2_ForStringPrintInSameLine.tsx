/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_JAVA, Highlight_PYTHON } from "../../../../../components/Highlight";

const O2_ForStringPrintInSameLine = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">Print all elements in the same line (and not in new line) :</article>
        <Highlight_PYTHON code={_1_} />
        this is same as in java:
        <Highlight_JAVA code={_2_} />
      </section>

      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">for loop a String</article>
        <Highlight_PYTHON code={_3_} />
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
