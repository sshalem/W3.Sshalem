/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O1_MemoryLeak = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-xl font-semibold">🔥 How To Detect Memory Leaks In Production (Java / Spring Boot)</p>
        <hr />
        <p className="my-8 text-xl font-semibold"> 🧠 1️⃣ First — What Is a Memory Leak in Java?</p>
        In Java, a memory leak is:
        <ULdisc>
          <Li>Objects that are no longer needed but still referenced, so GC cannot remove them.</Li>
        </ULdisc>
        Java has GC, so leaks are usually:
        <ULdisc>
          <Li>Static references</Li>
          <Li>Caches without limits</Li>
          <Li>ThreadLocals</Li>
          <Li>Collections growing forever</Li>
          <Li>ClassLoader leaks</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_MemoryLeak;
