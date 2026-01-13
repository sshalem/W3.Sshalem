/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, PythonHighlight } from "../../../../../components/Highlight";

const O3_PythonComprehension = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>🔹 Java Comparison (Spring Boot mindset 😄)</article>
        <ULdisc>
          <Li>
            Java Stream
            <JavaHighlight javaCode={_1_} />
          </Li>
          <Li>
            Python
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O3_PythonComprehension;

const _1_ = `list.stream()
    .filter(x -> x % 2 == 0)
    .map(x -> x * x)
    .toList();
`;

const _2_ = `[x * x for x in list if x % 2 == 0]`;
