/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, Highlight_PYTHON } from "../../../../../components/Highlight";

const O3_PythonComprehension = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>🔹 Java Comparison (Spring Boot mindset 😄)</article>
        <ULdisc>
          <Li>
            Java Stream
            <Highlight_JAVA code={_1_} />
          </Li>
          <Li>
            Python
            <Highlight_PYTHON code={_2_} />
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
