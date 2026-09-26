/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O3_SingletonLazyImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">🔹 Lazy Initialization (Not Thread Safe)</article>
        <ULdisc>
          <Li>Instance is created only when needed.</Li>
          <Li>✔ Created only when needed</Li>
          <Li>✖ Not thread-safe</Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O3_SingletonLazyImpl;

const _1_ = `public class Singleton {

    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}`;
