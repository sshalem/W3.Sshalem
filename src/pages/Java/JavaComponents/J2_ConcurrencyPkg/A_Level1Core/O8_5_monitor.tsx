/*


*/
import { Answer, Li, MainChildArea, Question, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, Redtext } from "../../../../../components/Highlight";

const O8_5_monitor = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <Question> So what is the monitor?</Question>
          <Answer>
            <ULdisc>
              <Li>
                A monitor is essentially the <Redtext>JVM's synchronization mechanism</Redtext> associated with an object.
              </Li>
              <Li>It manages things such as:</Li>
              <ULdisc>
                <Li>which thread currently owns the lock</Li>
                <Li>which threads are waiting to acquire it</Li>
                <Li>entering/exiting synchronized</Li>
                <Li> wait() / notify() / notifyAll()</Li>
              </ULdisc>
              <Li>
                For example:
                <JavaHighlight javaCode={_1_} />
                conceptually means:
                <ULDecimal>
                  <Li>
                    Find the monitor associated with <Redtext>lock</Redtext>
                  </Li>
                  <Li>
                    Acquire that <Redtext>monitor's lock</Redtext>
                  </Li>
                  <Li>Execute counter++</Li>
                  <Li>Release the lock when leaving the block</Li>
                </ULDecimal>
              </Li>
            </ULdisc>
          </Answer>
          think of the monitor as the synchronization mechanism/state associated with the object.
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
          SO when we do
          <JavaHighlight javaCode={_1_} />
          the JVM essentially does:
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
          Once Thread A owns it:
          <ApplicationPropertiesHighlight propertiesCode={_4_} />
          Then Thread A executes the synchronized code.
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_5_monitor;

const _1_ = `synchronized (lock) {
    counter++;
}
`;

const _2_ = `Object: lock
   │
   └── associated monitor
          │
          ├── ownership: which thread owns it
          ├── synchronization state
          └── waiting threads
`;

const _3_ = `Thread A
   │
   │ synchronized(lock)
   ↓
"Can I acquire lock's monitor?"
   │
   ├── YES → Thread A becomes owner
   │
   └── NO  → Thread A waits
`;

const _4_ = `lock's monitor
      │
      └── owner = Thread A
`;
