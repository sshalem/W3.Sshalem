/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";

const O2_GarbageCollector = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">🔑 Heap Memory</article>
        <p>What it is?</p>
        <ULdisc>
          <Li>Stores objects and class instances</Li>
          <Li>Shared across all threads</Li>
          <Li>Managed by the JVM</Li>
        </ULdisc>
      </section>
      🔟 Interview One-Liners
      <ULDecimal>
        <Li>Stack is thread-local, heap is shared</Li>
        <Li>
          GC works <strong>only on heap</strong>
        </Li>
        <Li>
          Stack memory is <strong>automatically freed</strong>
        </Li>
        <Li>
          Objects live in <strong>Heap</strong>, references in <strong>stack</strong>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};
export default O2_GarbageCollector;
