/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O10_Atomicity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
        <ULdisc>
          <Li>
            <SpanYellow>AtomicInteger</SpanYellow>
            <ULdisc>
              <Li>
                Atomic is a type of variable that performs <Redtext>read, write and update in a single uninterruptible step</Redtext>, ensuring
                thread-safe operations and preventing race conditions
              </Li>
              <Li>It ensures data consistency without using synchronization or locks.</Li>
              <Li>It improves performance through non-blocking, lock-free operations.</Li>
              <Li>Simplify thread-safe programming for common operations like increment and compare-and-set.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O10_Atomicity;

const _1_ = ``;
