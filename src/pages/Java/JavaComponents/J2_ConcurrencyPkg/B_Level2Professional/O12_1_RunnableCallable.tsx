/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, Redtext, SpanYellow } from "../../../../../components/Highlight";
import Greentext from "../../../../../components/Highlight/Greentext";

const O12_1_RunnableCallable = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <DivDoubleBorder>Runnable vs Callable in Java</DivDoubleBorder>
          <ULdisc>
            <Li>
              <SpanYellow>Runnable</SpanYellow> does some work but <Redtext>returns nothing</Redtext>.
            </Li>
            <Li>
              <SpanYellow>Callable</SpanYellow> does some work and <Greentext>returns a result</Greentext> .
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p>
            <Redtext>Important</Redtext>
          </p>
          <p>
            This distinction becomes extremely important when you reach ExecutorService <SpanYellow>(see LEVEL-2 Executor Framework )</SpanYellow>
          </p>
          <p>
            When you want to execute a task on another thread and get a result back, the common pattern is:
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
            For example:
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
            What is happening?
            <ApplicationPropertiesHighlight propertiesCode={_3_} />
          </p>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O12_1_RunnableCallable;

const _1_ = `Callable
   │
   │ describes the work + result type
   ▼
ExecutorService
   │
   │ executes the task using a worker thread
   ▼
Future
   │
   │ represents the eventual result
   ▼
Result`;

const _2_ = `ExecutorService executor = Executors.newSingleThreadExecutor();

Callable<Integer> task = () -> {
    return 10 + 20;
};

Future<Integer> future = executor.submit(task);
Integer result = future.get();
System.out.println(result);
executor.shutdown();`;

const _3_ = `Main Thread
    │
    │ submit(task)
    ▼
ExecutorService
    │
    │ gives task to worker thread
    ▼
Worker Thread
    │
    │ task.call()
    ▼
   30
    │
    ▼
Future<Integer>
    │
    │ future.get()
    ▼
Main Thread gets 30`;
