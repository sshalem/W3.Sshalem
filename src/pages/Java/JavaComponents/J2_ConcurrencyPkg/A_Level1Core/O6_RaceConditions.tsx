/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder } from "../../../../../components/Highlight";

const O6_RaceConditions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <DivDoubleBorder>What is a Race Condition?</DivDoubleBorder>
          <ULdisc>
            <Li>
              A race condition happens when multiple threads access shared data at the same time, and the final result depends on which thread happens
              to execute first.
            </Li>
            <Li>The word "race" comes from the threads racing to access/change the same data.</Li>
            <Li>You don't know exactly which thread will read/write first.</Li>
          </ULdisc>
        </article>
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O6_RaceConditions;

const _1_ = `Demonstrations
Thread sleeping
Thread waiting for another thread
Interrupting a thread
Checking thread state`;
