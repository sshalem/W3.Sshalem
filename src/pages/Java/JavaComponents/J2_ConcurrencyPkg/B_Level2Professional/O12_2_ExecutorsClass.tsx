/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, Redtext } from "../../../../../components/Highlight";

const O12_2_ExecutorsClass = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <DivDoubleBorder>Executors class</DivDoubleBorder>
          <ULdisc>
            <Li>
              Based on factory pattern, this class has <Redtext>static methods for creating instances of ExecutorService</Redtext> .
            </Li>
            <Li>We will rarely want to create the service instance by using new operator.</Li>
            <Li>
              It's very uncommon that we have to deal with various implementation of ExecutorService directly as this class abstracts away all
              implementation details, <br /> we just have to work with high level returned interface instances (the main advantage of using factory
              pattern!).
            </Li>
          </ULdisc>
          <p className="text-xl font-semibold">Example :</p>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O12_2_ExecutorsClass;

const _1_ = `import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class SingleThreadExecutorExample {

    public static void main (String[] args) {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        Future<?> future = executorService.submit(new Runnable() {
            @Override
            public void run () {
                System.out.println("task running");
            }
        });

        executorService.shutdown();
    }
}`;
