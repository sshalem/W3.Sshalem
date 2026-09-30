/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Redtext, JavaHighlight } from "../../../../../components/Highlight";

const O9_VolatileVisibility = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              A write to a <Redtext>volatile</Redtext> variable becomes visible to other threads that subsequently read that variable.
            </Li>
            <Li>
              <Redtext>volatile</Redtext> is mainly about <Redtext>visibility</Redtext>
            </Li>
            <Li>
              <Redtext>volatile</Redtext> = "When one thread changes this value, other threads must be able to see the change."
            </Li>
            <Li>
              <Redtext>synchronized</Redtext> provides both
              <Redtext> visibility </Redtext> and <Redtext> mutual exclusion</Redtext>
            </Li>
            <Li>
              <Redtext>synchronized</Redtext> = "Only one thread at a time can enter this protected section, and changes made inside become visible to
              other threads appropriately."
            </Li>
          </ULdisc>
        </article>

        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O9_VolatileVisibility;

const _1_ = `class Task implements Runnable {

    private volatile boolean running = true;

    @Override
    public void run() {
        while (running) {
            // work
        }
    }

    public void stop() {
        running = false;
    }
}`;
