/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, PythonHighlight } from "../../../../../components/Highlight";

const OX_LambdaAnonymosFunctions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="textxtext-xl">lambda (anonymous functions)</article>
        <ULdisc>
          <Li>
            A lambda is a small, one-line function without a name.
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            <PythonHighlight pythonCode={_2_} />
          </Li>
          <Li>
            👉 Equivalent normal function:
            <PythonHighlight pythonCode={_3_} />
          </Li>
          <Li>
            Java comparison
            <JavaHighlight javaCode={_3_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default OX_LambdaAnonymosFunctions;

const _1_ = `lambda arguments: expression`;

const _2_ = `add = lambda a, b: a + b
print(add(2, 3))   # 5`;

const _3_ = `def add(a, b):
    return a + b`;

const _4_ = `
(x, y) -> x + y
`;
