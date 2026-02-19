/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O5_SingletonBestPerfromance = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">🔹 Double-Checked Locking (Best Performance)</article>
        <ULdisc>
          <Li>✔ Thread-safe</Li>
          <Li>✔ Better performance</Li>
          <Li>✔ Lazy initialization</Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O5_SingletonBestPerfromance;

const _1_ = `public class Singleton {

    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`;
