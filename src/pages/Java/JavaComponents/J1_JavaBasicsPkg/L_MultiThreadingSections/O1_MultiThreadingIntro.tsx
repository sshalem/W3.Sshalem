/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";
import Table_2ColCompareMultihtreadingConcepts from "../../../../../components/Tables/Table_2ColCompareMultihtreadingConcepts";

const O1_MultiThreadingIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg">🧵 What Are Threads in Java?</p>
          <ULdisc>
            <Li>
              In Java, a thread is a lightweight unit of execution that allows a program to perform multiple tasks <Redtext>Sequentially</Redtext>
            </Li>
            <Li>
              Every Java program has at least one thread — the <SpanYellow>main</SpanYellow> thread.
            </Li>
            <Li>
              A Java application starts execution on the <Redtext>main thread</Redtext> .
            </Li>
            <Li>
              A Thread can Have multiple Tasks that run <Redtext>Sequentially</Redtext>
            </Li>
            <Li>Threads help improve performance and responsiveness, especially in applications like servers, games, and GUI programs.</Li>
          </ULdisc>
        </article>
      </section>
      <section className="my-8">
        <article className="my-8">
          <SpanYellow>MultiThreading</SpanYellow> can run in a process (See Image Below):
          <ULdisc>
            <Li>
              <SpanYellow>Concurrency</SpanYellow> : Multithreading With Single CPU core, the
              <Redtext>CPU switches between tasks very quickly</Redtext>
            </Li>
            <Li>
              <SpanYellow>Parallelism</SpanYellow> : Multithreading With multiple cores , execute Runnable Threads <Redtext>simultaneously</Redtext>,
              on different cores
            </Li>
          </ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
          <Table_2ColCompareMultihtreadingConcepts />
        </article>
        <article className="my-8"></article>
      </section>
    </MainChildArea>
  );
};
export default O1_MultiThreadingIntro;

const _1_ = `Java Application
        │
        Process
        │
        ├── Main Thread
        │    ├── Task A
        │    ├── Task B
        └──  └── Task C
                  ↑
             sequentially        
         
  

Concurrency : Multithreading With Single CPU core, the CPU switches between tasks very quickly:
      Time ─────────────────────────────→
      Same Core Task A: ████       ████       ████
      Same Core Task B:      ████       ████       ████


Parallelism : Multithreading With multiple cores , execute Runnable Threads simultaneously,  on different cores:
      Time ─────────────────────────────→
           Core 1:  Task A ████████████
           Core 2:  Task B ████████████

  `;
