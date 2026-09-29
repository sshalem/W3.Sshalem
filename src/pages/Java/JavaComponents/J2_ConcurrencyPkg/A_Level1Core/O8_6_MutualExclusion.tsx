/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, JavaHighlight, Redtext, SpanRed, SpanYellow } from "../../../../../components/Highlight";
import Greentext from "../../../../../components/Highlight/Greentext";

const O8_6_MutualExclusion = ({ anchor }: { anchor: string }) => {
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
              synchronized basically says:{" "}
              <Greentext>
                Only one thread at a time can execute this critical section for this <em className="text-lg font-semibold">lock</em>.
              </Greentext>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <DivDoubleBorder>synchronized</DivDoubleBorder>
          Lets look at the code below and I'll explain in detail how <Redtext>synchronized</Redtext> works
          <JavaHighlight javaCode={_1_} />
          <ULdisc>
            <Li>
              <Redtext>Synchronized methods</Redtext> are used to lock an entire method so that only one thread can execute it at a time for a
              particular object.
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
              While Thread A is executing the synchronized instance method, Thread A owns the monitor associated with <Redtext>this</Redtext>{" "}
              (RaceConditionCounter rcc Object). (<Redtext>that is Lock</Redtext>)
            </Li>
            <Li>release_monitor(rcc);</Li>
          </ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_10_} />
        </article>

        <div></div>
        <div></div>
      </section>
      <div>
        <p className="mb-4 text-xl">
          <SpanRed>Note</SpanRed>
          <p>see code below</p>
        </p>
        <Redtext>
          Don't put slow operations like <em className="font-semibold">sleep()</em>, <em className="font-semibold">network calls</em> ,
          <em className="font-semibold">database</em> ,<em className="font-semibold">calls</em> , etc. inside a
          <em className="font-semibold">synchronized block</em>
        </Redtext>
        <p>
          <Greentext>unless you specifically need the lock held during that operation.</Greentext>
        </p>
        <JavaHighlight javaCode={_7_} />
      </div>
    </MainChildArea>
  );
};
export default O8_6_MutualExclusion;

// const _0_ = `synchronized method
// synchronized block
// intrinsic lock
// monitor
// mutual exclusion
// object lock
// static synchronization
// class lock`;

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

const _7_ = `public void incrementCounter() {
    try {
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        throw new RuntimeException(e);
    }

    synchronized (this) {
        counter++;
    }
}
`;
