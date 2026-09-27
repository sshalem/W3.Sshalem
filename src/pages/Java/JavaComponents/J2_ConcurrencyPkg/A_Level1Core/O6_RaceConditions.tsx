/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

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
            <Li>Read the value of counter variable.</Li>
            <Li>Increment the value by 1.</Li>
            <Li>Store the value of counter variable.</Li>
            <Li>SO, multiple threads access and modify the same shared variable counter without synchronization</Li>
          </ULDecimal>
          If there are two threads sharing this variable then the following scenario may happen
          <ApplicationPropertiesHighlight propertiesCode={_0_} />
          Next , I will show:
          <ULdisc>
            <Li>
              <SpanYellow>synchronized</SpanYellow>
            </Li>
            <Li>
              <SpanYellow>Lock</SpanYellow>
            </Li>
            <Li>
              <SpanYellow>AtomicInteger</SpanYellow>
            </Li>
            <Li>
              <SpanYellow>volatile</SpanYellow>
            </Li>
          </ULdisc>
          and and see why they behave differently.
        </article>

        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O6_RaceConditions;

const _0_ = `	int counter = 0;
	counter = counter + 1; // Thread 1
	counter = counter + 1; // Thread 2 started before thread 1 could save the new 
        	              //value of counter, so Thread 2 also got the initial value of counter as 0.
	store counter value // Thread 1
	store counter value // Thread 2`;

const _1_ = `public class RaceConditionCounter implements Runnable {

    public int counter = 0;

    public void incrementCounter() {
        try {
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
