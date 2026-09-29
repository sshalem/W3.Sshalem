/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, Redtext } from "../../../../../components/Highlight";
import Greentext from "../../../../../components/Highlight/Greentext";

const O8_3_StaticSynchronization = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              <Redtext>Static synchronization</Redtext> is used when static data or methods need to be protected in a multithreaded environment. It
              ensures that only one thread can access the class-level resource at a time.
            </Li>
            <Li>
              Locks at the <Greentext>class level</Greentext> instead of the <Redtext>object level</Redtext>.
            </Li>
            <Li>Shared across all instances of the class.</Li>
            <Li>
              Important distiction:
              <ULdisc>
                <Li>
                  For an instance synchronized method: <Redtext>public synchronized void incrementCounter()</Redtext>
                </Li>
                <Li>
                  For a static synchronized method: : <Redtext>public static synchronized void incrementCounter()</Redtext>
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_3_StaticSynchronization;

const _1_ = `public class RaceConditionCounter implements Runnable {
    private static int counter = 0;

    public static synchronized void incrementCounter() {
        counter++;
    }

    public static synchronized int getCounter() {
        return counter;
    }

    @Override
    public void run() {
        incrementCounter();
        System.out.println(
            Thread.currentThread().getName() + " - " + getCounter()
        );
    }
}
    

public class Main {
    public static void main(String[] args) {
        RaceConditionCounter rcc = new RaceConditionCounter();
        for (int i = 0; i < 10; i++) {
            Thread thread = new Thread(rcc, "state-" + i);
            thread.start();
        }
    }
}`;
