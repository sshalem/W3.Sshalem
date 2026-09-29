/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, Redtext } from "../../../../../components/Highlight";

const O8_2_SynchronizedBlock = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              <Redtext>Synchronized blocks</Redtext> allow locking only a specific section of code instead of the entire method. This makes the
              program more efficient by reducing the scope of synchronization.
            </Li>
            <Li>
              Locks only the <Redtext>critical section</Redtext> of code, not the entire method.
            </Li>
            <Li>Provides better performance due to fine-grained control.</Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_2_SynchronizedBlock;

const _1_ = `public class RaceConditionCounter implements Runnable {
    private int counter = 0;

    public void incrementCounter() {
        synchronized (this) {
            counter++;
        }
    }

    public int getCounter() {
        return counter;
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
