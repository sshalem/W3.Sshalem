/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, Redtext } from "../../../../../components/Highlight";

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
        </article>
        <article className="my-8">
          <DivDoubleBorder>Runnable interface</DivDoubleBorder>
        </article>
        <JavaHighlight javaCode={_1_} />
        Shorter way
        <JavaHighlight javaCode={_2_} />
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
}
    

public class Main extends Thread {
    public static void main(String[] args) {
        // [1] Create Instance of the Class
        MyRunnable myRunnable = new MyRunnable("shabtay");

        // [2] Create Instance of Thread Class
        // [3] pass as Argument the MyRunnable to the Thread instance
        Thread t1 = new Thread(myRunnable);

        // [4] To start  , must call start() method
        // Important :A Thread object can be started only once.
        t1.start();
    }
}`;

const _2_ = `public class Main extends Thread {

    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable("shabtay"));
        // To start , must call start() method
        t1.start();
    }
}`;
