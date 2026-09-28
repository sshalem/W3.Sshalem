/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, JavaHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O6_RaceConditions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <DivDoubleBorder>What is a Race Condition?</DivDoubleBorder>
          <ULdisc>
            <Li>
              A <em className="font-semibold">Race Condition</em> happens when multiple threads access shared data at the same time, and the final
              result depends on which thread happens to execute first.
            </Li>
            <Li>The word "race" comes from the threads racing to access/change the same data.</Li>
            <Li>You don't know exactly which thread will read/write first.</Li>
          </ULdisc>
          Example for a classic example of a race condition :
          <ULDecimal>
            <Li>Here, I create 10 threads that all share that same object:</Li>
            <Li>
              So all 10 threads are modifying the <em className="font-semibold">same counter variable</em> .
            </Li>
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
            <Li>
              The important part <Redtext>counter++</Redtext> , is conceptually closer to:
              <ULdisc>
                <Li>int temp = counter; // READ</Li>
                <Li>temp = temp + 1; // ADD</Li>
                <Li>counter = temp; // WRITE</Li>
              </ULdisc>
            </Li>
            <Li>
              These , are not <SpanYellow>Atomic</SpanYellow> operations. (See Atomic Variable in Synchorized Section)
            </Li>
            <Li>all 10 threads sleep for roughly the same amount of time. </Li>
            <Li>
              After approximately 1 second, they wake up and start doing: <Redtext>counter++;</Redtext> and They can overlap.
            </Li>
          </ULDecimal>
        </article>
        <JavaHighlight javaCode={_1_} />
        <ULdisc>
          <Li>I got result below</Li>
          <Li>I incremented the counter, and now I'm reading the shared counter.</Li>
          <Li>
            <em>Whatever value happens to be there at that moment</em>, <em className="font-semibold">print it</em>.
          </Li>
          <Li>
            And then the threads are <Redtext>competing to read/write/print the same variable</Redtext>, so they can read the same value
          </Li>
          <Li>
            There is <Redtext>no guarantee about the order</Redtext> in which the threads execute.
          </Li>
          <Li>The thread names don't tell the execution order.</Li>
          <Li>
            SInce I dont know how many Core I have , (lets say 4) , Instead, the operating system/JVM scheduler decides which threads get CPU time.
          </Li>
        </ULdisc>
        <ApplicationPropertiesHighlight propertiesCode={_3_} />
      </section>
    </MainChildArea>
  );
};
export default O6_RaceConditions;

const _1_ = `public class RaceConditionCounter implements Runnable {

    public int counter = 0;

    public void incrementCounter() {
        try {
            // Why did you originally add sleep()?
            // It makes the race condition easier to reproduce.
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        counter++;
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

public class Main 
    public static void main(String[] args) {
        RaceConditionCounter rcc = new RaceConditionCounter();
        for (int i = 0; i < 10; i++) {
            Thread thread = new Thread(rcc, "state-" + i);
            thread.start();
        }
    }
}`;

const _2_ = `             RaceConditionCounter
                    |
          counter = 0
        /  /  /  /  |   \\  \\  \\  \\  \\
       T0 T1 T2 T3  T4  T5 T6 T7 T8 T9
`;

const _3_ = `state-6 - 9
state-1 - 7
state-7 - 7
state-2 - 8
state-9 - 7
state-0 - 8
state-3 - 7
state-5 - 7
state-4 - 7
state-8 - 7
`;
