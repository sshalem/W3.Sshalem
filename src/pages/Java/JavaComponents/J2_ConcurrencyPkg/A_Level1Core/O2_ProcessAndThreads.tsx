/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder } from "../../../../../components/Highlight";

const O2_ProcessAndThreads = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <DivDoubleBorder>What is Process memory?</DivDoubleBorder>
          <p>A process gets its own virtual memory space from the operating system.</p>
          <p>For a Java process, the JVM manages important parts of this memory.</p>
        </article>
        <article>
          <DivDoubleBorder>What is Thread-Local Stack?</DivDoubleBorder>
          <p>Every thread has its own stack.</p>
          <p>The stack contains things associated with the execution of methods, such as:</p>
          <ULdisc>
            <Li>Local variables</Li>
            <Li>Method parameters</Li>
            <Li>References to objects</Li>
            <Li>Method call information</Li>
            <Li>Stack frames</Li>
          </ULdisc>
        </article>
        <article>
          <DivDoubleBorder>Shared Heap vs Thread-Local Stack</DivDoubleBorder>
          Simple rule:
          <ULdisc>
            <Li>Heap → shared</Li>
            <Li>Stack → private to each thread</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_ProcessAndThreads;
