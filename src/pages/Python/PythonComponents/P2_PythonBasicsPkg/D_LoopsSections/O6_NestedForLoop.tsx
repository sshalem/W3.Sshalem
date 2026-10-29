/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O6_NestedForLoop = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Nested For Loop</article>
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O6_NestedForLoop;

const _1_ = `for i in range(2):
    for j in range(3):
        print(f"i={i}, j={j}")

result:

i=0, j=0
i=0, j=1
i=0, j=2
i=1, j=0
i=1, j=1
i=1, j=2`;
