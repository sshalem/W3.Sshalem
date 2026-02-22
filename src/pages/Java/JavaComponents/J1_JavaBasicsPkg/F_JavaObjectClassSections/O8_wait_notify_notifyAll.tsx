/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O8_wait_notify_notifyAll = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <SpanYellow>Thread Communication Methods :</SpanYellow>
          </div>
          These are used in synchronization and inter-thread communication.
          <ULdisc>
            <Li>
              <SpanYellow>wait()</SpanYellow>
              <ULdisc>
                <Li>Causes current thread to wait until notified.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
          <ULdisc>
            <Li>
              <SpanYellow>notify()</SpanYellow>
              <ULdisc>
                <Li>Wakes up a single waiting thread.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
          <ULdisc>
            <Li>
              <SpanYellow>notifyAll()</SpanYellow>
              <ULdisc>
                <Li>Wakes up all waiting threads.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_wait_notify_notifyAll;
