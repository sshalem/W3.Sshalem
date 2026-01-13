/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O0_DataStructures = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">Python built-ins data structures</article>
        <div>Python’s cover 90% of real-world use cases.</div>
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
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Python collections</article>
        <div>
          In Python, <SpanGrey>collections</SpanGrey> is a standard-library module that provides specialized, high-performance container data types as
          alternatives to the built-in <SpanGrey>list</SpanGrey>, <SpanGrey>dict</SpanGrey>, <SpanGrey>tuple</SpanGrey>, and <SpanGrey>set</SpanGrey>.
        </div>
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
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Real-world usage summary (FastAPI / Backend)</article>
        <ULdisc>
          <Li>
            <SpanGrey>list</SpanGrey> - Usage frequency 🔥🔥🔥🔥🔥 Like list of objects
          </Li>
          <Li>
            <SpanGrey>dict</SpanGrey> - Usage frequency 🔥🔥🔥🔥🔥
          </Li>
          <Li>
            <SpanGrey>list[tuple]</SpanGrey> - Usage frequency 🔥🔥🔥🔥
          </Li>
          <Li>
            <SpanGrey>set</SpanGrey> - Usage frequency 🔥🔥🔥
          </Li>
          <Li>
            <SpanGrey>set[tuple]</SpanGrey> - Usage frequency 🔥🔥
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O0_DataStructures;
