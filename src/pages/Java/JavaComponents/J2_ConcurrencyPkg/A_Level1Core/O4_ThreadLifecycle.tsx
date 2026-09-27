/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";
import Thread_1 from "../../../../../assets/Thread_1.jpg";

const O4_ThreadLifecycle = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-lg font-semibold">🧵 Life Cycle of a Thread in Java</p>
        <article className="my-8">
          In Java, a thread goes through different states during its execution. These states are defined in the <SpanYellow>Thread.State</SpanYellow>{" "}
          enum.
        </article>
        <article className="my-8">
          <p className="text-lg font-semibold"> 🔄 Thread Life Cycle Flow</p>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
          <IMG img_name={Thread_1}></IMG>
        </article>

        <article className="my-8">
          <p className="text-lg font-semibold">1️⃣ NEW</p>
          <ULdisc>
            <Li>Thread is created but not started yet.</Li>
            <Li>
              <SpanYellow>start()</SpanYellow> has not been called.
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-lg font-semibold">2️⃣ RUNNABLE</p>
          <ULdisc>
            <Li>
              After calling <SpanYellow>start()</SpanYellow>, the thread becomes runnable.
            </Li>
            <Li>It is ready to run and waiting for CPU scheduling.</Li>
            <Li>
              In Java, running is part of <SpanYellow>RUNNABLE</SpanYellow> (Java does not separate them).
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-lg font-semibold">3️⃣ BLOCKED</p>
          <ULdisc>
            <Li>Thread is waiting to acquire a lock.</Li>
            <Li>
              Happens when another thread holds the synchronized <SpanYellow>lock</SpanYellow>.
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-lg font-semibold">4️⃣ WAITING</p>
          <ULdisc>
            <Li>Thread waits indefinitely until another thread performs a specific action.</Li>
            <Li>No time limit.</Li>
            <Li>
              Methods causing WAITING:
              <ULdisc>
                <Li>wait()</Li>
                <Li>join()</Li>
                <Li>LockSupport.park()</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-lg font-semibold">5️⃣ TIMED_WAITING</p>
          <ULdisc>
            <Li>Thread waits for a specified time.</Li>
            <Li>
              Methods causing TIMED_WAITING:
              <ULdisc>
                <Li>wait(time)</Li>
                <Li>join(time)</Li>
                <Li>sleep(time)</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-lg font-semibold">6️⃣ TERMINATED (Dead)</p>
          <ULdisc>
            <Li>Thread has finished execution.</Li>
            <Li>
              <SpanYellow>run()</SpanYellow> method completes.
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O4_ThreadLifecycle;

const _1_ = `NEW
  ↓ start()
RUNNABLE
  ↓ (CPU assigned)
RUNNING
  ↓
BLOCKED / WAITING / TIMED_WAITING
  ↓
RUNNABLE
  ↓
TERMINATED`;
