/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O2_SingletonBasicImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">🔹 Basic Implementation (Eager Initialization)</article>
        <ULdisc>
          <Li>Instance is created when the class is loaded.</Li>
          <Li>✔ Thread-safe</Li>
          <Li>✖ Instance created even if not used</Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O2_SingletonBasicImpl;

const _1_ = `public class Singleton {

    // Create instance at the time of class loading
    private static final Singleton instance = new Singleton();

    // Private constructor prevents instantiation from other classes
    private Singleton() {}

    // Public method to provide access to the instance
    public static Singleton getInstance() {
        return instance;
    }
}
`;
