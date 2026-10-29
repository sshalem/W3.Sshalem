/*


*/
import { Answer, Li, MainChildArea, Question, ULdisc } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA } from "../../../../../components/Highlight";

const O7_CriticalSections = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <DivDoubleBorder>Critical Sections in Threads</DivDoubleBorder>
          <div>
            A critical section , is a part of a program where a thread accesses shared mutable data <br />
            and therefore must be protected from concurrent access by other threads.
          </div>
          <div>
            In example in Race Condition, this is the critical section:
            <Highlight_JAVA code={_1_} />
            because counter is shared by all 10 threads:
            <Highlight_JAVA code={_2_} />
            All threads operate on the same rcc object, so they operate on the same counter.
          </div>
          <Question>Why is counter++ a critical section?</Question>
          <Answer>
            Although it looks like one statement:
            <Highlight_JAVA code={_1_} />
            it involves multiple operations:
            <ULdisc>
              <Li> Read counter</Li>
              <Li>Add 1 </Li>
              <Li>Write counter</Li>
            </ULdisc>
            Thus, Protecting the Critical Section is a must (See next section)
          </Answer>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O7_CriticalSections;

const _1_ = `counter++`;

const _2_ = `RaceConditionCounter rcc = new RaceConditionCounter();
for (int i = 0; i < 10; i++) {
    Thread thread = new Thread(rcc, "state-" + i);
    thread.start();
}`;
