/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, Redtext } from "../../../../../components/Highlight";

const O8_7_ObjectLock = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              Here , I create a dedicated object <Redtext>private Object lock = new Object()</Redtext> whose monitor is used for synchronization.
            </Li>
            <Li>
              A <Redtext>monitor</Redtext> is essentially the JVM's synchronization mechanism associated with an object.
            </Li>
            <Li>
              using a private lock is often preferable, "Before entering this block, acquire the monitor associated with lock." :
              <JavaHighlight javaCode={_2_} />
            </Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_7_ObjectLock;

const _1_ = `public class RaceConditionCounter implements Runnable {

    private int counter = 0;
    private final Object lock = new Object();

    public void incrementCounter() {
        synchronized (lock) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            counter++;
        }
    }

    public int getCounter() {
        synchronized (lock) {
            return counter;
        }
    }

    @Override
    public void run() {
        incrementCounter();
        System.out.println(Thread.currentThread().getName() + " - " + getCounter());
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

const _2_ = `synchronized (lock) {
    counter++;
}`;
