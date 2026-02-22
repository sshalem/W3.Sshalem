/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import Table_3ColCompareStackHeap from "../../../../../components/Tables/Table_3ColCompareStackHeap";

const O1_StackHeapMemory = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">🔑 Stack Memory</article>
        <p>What it is?</p>
        <ULdisc>
          <Li>Stores method calls, local variables, and references</Li>
          <Li>One stack per thread</Li>
          <Li>Memory is allocated & freed automatically (LIFO)</Li>
        </ULdisc>
        Key Takeaways (Interview Ready)
      </section>

      <section className="my-8">
        <article className="my-4 text-xl font-semibold">🔑 Heap Memory</article>
        <p>What it is?</p>
        <ULdisc>
          <Li>Stores objects and class instances</Li>
          <Li>Shared across all threads</Li>
          <Li>Managed by the JVM</Li>
        </ULdisc>
      </section>

      <ULDecimal>
        <Li>
          Local variables → <strong>Stack</strong>
        </Li>
        <Li>
          Method calls → <strong>Stack frames</strong>
        </Li>
        <Li>
          Each thread has its <strong>own stack</strong>
        </Li>
        <Li>
          Stack memory is <strong>automatically freed</strong>
        </Li>
        <Li>Stack → method calls & local variables</Li>
        <Li>Heap → objects</Li>
        <Li>GC → cleans unused heap objects</Li>
        <Li>Heap memory is freed by GC</Li>
        <Li>Static variables live in Heap (Class area / Metaspace)</Li>
      </ULDecimal>

      <Table_3ColCompareStackHeap />
    </MainChildArea>
  );
};
export default O1_StackHeapMemory;
