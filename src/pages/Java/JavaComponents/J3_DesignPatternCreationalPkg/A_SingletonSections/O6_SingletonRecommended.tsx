/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O6_SingletonRecommended = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">🔹 Bill Pugh Singleton (Recommended)</article>
        <ULdisc>
          <Li>Uses inner static helper class.</Li>
          <Li>✔ Thread-safe</Li>
          <Li>✔ Lazy-loaded</Li>
          <Li>✔ No synchronization overhead</Li>
          <Li>✔ Recommended in most cases</Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O6_SingletonRecommended;

const _1_ = `public class Singleton {

    private Singleton() {}

    private static class Helper {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return Helper.INSTANCE;
    }
}`;
