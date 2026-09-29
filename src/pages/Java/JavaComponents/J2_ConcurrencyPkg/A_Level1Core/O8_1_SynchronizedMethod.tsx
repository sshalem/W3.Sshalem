/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, Redtext } from "../../../../../components/Highlight";

const O8_1_SynchronizedMethod = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <Redtext>Synchronized methods</Redtext> are used to <Redtext>lock</Redtext> an entire method so that only one thread can execute it at a
          time for a particular object.
          <ULdisc>
            <Li>Locks the whole method, not just a part of it.</Li>
            <Li>Uses the object-level lock (instance lock).</Li>
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_1_SynchronizedMethod;

const _1_ = `public class RaceConditionCounter implements Runnable {

    private int counter = 0;

    public synchronized void incrementCounter() {
        counter++;
    }

    // This is Same : 
    // Put the whole Body of the method inside a synchronized block
    // synchronized (this) {
    // entire method body
    // }

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
