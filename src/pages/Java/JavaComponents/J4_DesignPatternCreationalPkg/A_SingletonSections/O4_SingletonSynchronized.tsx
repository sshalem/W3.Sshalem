/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA } from "../../../../../components/Highlight";

const O4_SingletonSynchronized = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">🔹 Thread-Safe Singleton (Synchronized Method)</article>
        <ULdisc>
          <Li>✔ Thread-safe</Li>
          <Li>✖ Slower due to synchronization</Li>
        </ULdisc>
        <Highlight_JAVA code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O4_SingletonSynchronized;

const _1_ = `public class Singleton {

    private static Singleton instance;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`;
