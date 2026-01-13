/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O2_Tuple = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>Python’s built-ins cover 90% of real-world use cases.</div>
        <ULDecimal>
          <Li>
            <SpanGrey>list</SpanGrey> — ordered, mutable (Like JAVA <SpanGrey>{"List<String> users = new ArrayList<>()"}</SpanGrey>)
          </Li>
          <Li>
            <SpanGrey>tuple</SpanGrey> — ordered, immutable , Like a python list, but read-only. Often used for fixed data
          </Li>
          <Li>
            <SpanGrey>dict</SpanGrey> — key/value map ⭐⭐⭐ ,Hash map (very fast) Like JAVA{" "}
            <SpanGrey>{"Map<String, Object> user = new HashMap<>()"}</SpanGrey>
          </Li>
          <Li>
            <SpanGrey>set</SpanGrey> — unique, unordered (Like JAVA <SpanGrey>{"Set<String> roles = new HashSet<>()"}</SpanGrey>)
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};
export default O2_Tuple;
