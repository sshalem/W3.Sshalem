/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

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
                Atomic is a type of variable that performs :
                <ULdisc>
                  <Li>
                    <Redtext>read</Redtext>
                  </Li>
                  <Li>
                    <Redtext>write</Redtext>
                  </Li>
                  <Li>
                    <Redtext>update </Redtext>
                  </Li>
                </ULdisc>
                in a single uninterruptible step , ensuring thread-safe operations and preventing race conditions
              </Li>
              <Li>
                It ensures data consistency without using <Redtext>synchronization</Redtext> or <Redtext>locks</Redtext>.
              </Li>
              <Li>It improves performance through non-blocking, lock-free operations.</Li>
              <Li>Simplify thread-safe programming for common operations like increment and compare-and-set.</Li>
              <Li>Atomicity protects an operation. synchronized can protect a sequence of operations.</Li>
              <Li>
                <SpanYellow>AtomicInteger</SpanYellow> → protects an individual operation For example: <br /> <br />
                <Redtext>counter.incrementAndGet();</Redtext> <br /> <br />
                But this: <br /> <br />
                <Redtext>counter.incrementAndGet();</Redtext> <br />
                <Redtext>System.out.println(counter.get());</Redtext>
                <br /> <br />
                is two separate operations. Another thread can run between them.
              </Li>
              <Li>
                <SpanYellow>synchronized</SpanYellow> → can protect a sequence of operations , for example:
                <JavaHighlight javaCode={_1_} />
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        Example of using AtomicInteger , see that I use it <Redtext>Thread.currentThread().getName() + " - " + incrementCounter()</Redtext>:
        <JavaHighlight javaCode={_2_} />
      </section>
    </MainChildArea>
  );
};
export default O10_Atomicity;

const _1_ = `public synchronized void incrementAndPrint() {
    int value = counter.incrementAndGet();
    System.out.println(value);
}
`;

const _2_ = `import java.util.concurrent.atomic.AtomicInteger;

public class RaceConditionCounter implements Runnable {

    private final AtomicInteger counter = new AtomicInteger(0);

    public synchronized int incrementCounter() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return counter.incrementAndGet();
    }

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " - " + incrementCounter());
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
}
`;
