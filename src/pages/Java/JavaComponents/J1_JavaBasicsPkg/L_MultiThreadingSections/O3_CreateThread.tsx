/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, Redtext, SpanRed, SpanYellow } from "../../../../../components/Highlight";
import Thread_2 from "../../../../../assets/Thread_2.jpg";

const O3_CreateThread = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          Two ways to Create a Thread:
          <ULdisc>
            <Li>
              Implement <Redtext>Runnable Interface</Redtext> , this si the prefered option
            </Li>
            <Li>
              Extend <Redtext>Thread Class</Redtext> , I won't show it (which also Implements Runnable interface)
            </Li>
          </ULdisc>
          <IMG img_name={Thread_2}></IMG>
        </article>
        <article className="my-8">
          <DivDoubleBorder>Runnable interface</DivDoubleBorder>
        </article>
        <ULdisc>
          <Li>Create A Class That Implements the Runnable interface</Li>
          <Li>
            write the code inside the <SpanYellow>run()</SpanYellow> method
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
        <ULdisc>
          <Li>
            Create instance of <SpanYellow>MyRunnable</SpanYellow> class
          </Li>
          <Li>
            Create instacne of <SpanYellow>Thread</SpanYellow> class, and pass as argument , the instance object of{" "}
            <SpanYellow>MyRunnable</SpanYellow>
          </Li>
          <Li>
            call the <SpanYellow>start()</SpanYellow> method in Thread Class Object
          </Li>
          <Li>
            Don't call the <SpanRed>run()</SpanRed> method , it won't work as a Thread
          </Li>
          <Li>
            <Redtext>Important</Redtext> : A Thread object can be started only once.
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={_2_} />
        Shorter way
        <JavaHighlight javaCode={_3_} />
      </section>
    </MainChildArea>
  );
};
export default O3_CreateThread;

const _1_ = `public class MyRunnable implements Runnable {
    private String name;

    public MyRunnable(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println(name);
    }
}`;

const _2_ = `public class Main {
    public static void main(String[] args) {
        MyRunnable myRunnable = new MyRunnable("shabtay");
        Thread t1 = new Thread(myRunnable);
        t1.start();
    }
}`;

const _3_ = `public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable("shabtay"));
        t1.start();
    }
}`;
