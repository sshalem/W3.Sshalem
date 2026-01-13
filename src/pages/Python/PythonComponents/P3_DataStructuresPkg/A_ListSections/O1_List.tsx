/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_List = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>
          <SpanGrey>list</SpanGrey> ? What it is ?
        </div>
        <ULDecimal>
          <Li>
            <SpanGrey>list</SpanGrey> — ordered, mutable (Like JAVA <SpanGrey>{"List<String> users = new ArrayList<>()"}</SpanGrey>)
          </Li>
          <Li>Dynamic array</Li>
          <Li>Can store mixed types</Li>
          <Li>Most commonly used structure</Li>
          <Li>
            Java Equivalent
            <JavaHighlight javaCode={_1_} />
          </Li>
        </ULDecimal>
        <div className="my-4 text-lg font-semibold">Key features</div>
        <ULdisc>
          <Li>Keeps order</Li>
          <Li>Allows duplicates</Li>
          <Li>Index-based access</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_List;

const _1_ = `List<String> users = new ArrayList<>()`;
