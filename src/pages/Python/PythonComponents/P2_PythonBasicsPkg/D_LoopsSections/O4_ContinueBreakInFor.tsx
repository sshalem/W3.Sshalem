/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O4_ContinueBreakInFor = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Continue or Break in For loop</article>
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O4_ContinueBreakInFor;

const _1_ = `# Example with break
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    break
  print(x)


# Example with Continue
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)`;
