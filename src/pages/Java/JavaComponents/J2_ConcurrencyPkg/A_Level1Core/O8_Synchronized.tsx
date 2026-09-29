/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";
import Greentext from "../../../../../components/Highlight/Greentext";
import Table_2ColSynchronizedConcepts from "../../../../../components/Tables/Table_2ColSynchronizedConcepts";

const O8_Synchronized = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              In section 6 we saw a <SpanYellow>Race Condition</SpanYellow>, for several multiple threads access shared data at the same time.
            </Li>
            <Li>
              But, it caused the Race Condition problem, where threads are <Redtext>competing to read/write/print the same variable</Redtext>, and it
              can be same value
            </Li>
            <Li>
              <Redtext>synchronized</Redtext> basically says:
              <ULdisc>
                <Li>
                  <Greentext>
                    Only one thread at a time can execute this critical section for this <em className="text-lg font-semibold">lock</em>.
                  </Greentext>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              under the hood the JVM effectively does something like: <Redtext>acquire_monitor(rcc);</Redtext>{" "}
            </Li>
            <Li>
              when a thread owns that <Redtext>monitor</Redtext>, we commonly say that the thread <Redtext>"holds the lock."</Redtext>
            </Li>
            <Li>
              It means : <Redtext>"Someone else currently owns this. Wait."</Redtext>
            </Li>
            <Li>
              While Thread A is executing the synchronized instance method, Thread A owns the monitor associated with <Redtext>this</Redtext>
              (RaceConditionCounter rcc Object). (<Redtext>that is Lock</Redtext>)
            </Li>
          </ULdisc>
          <Table_2ColSynchronizedConcepts />
          <ApplicationPropertiesHighlight propertiesCode={_10_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_Synchronized;

const _10_ = `Thread A                         Thread B
   |                                |
   | rcc.incrementCounter()         |
   ↓                                |
ACQUIRE rcc's monitor               |
   |                                |
   | counter++                      | rcc.incrementCounter()
   |                                ↓
   |                            TRY TO ACQUIRE
   |                            rcc's monitor
   |                                |
   |                            BLOCK/WAIT
   |                                |
   ↓                                |
RELEASE rcc's monitor               |
                                    ↓
                                ACQUIRE monitor
                                    |
                                    | counter++
                                    ↓
                                RELEASE monitor
`;
