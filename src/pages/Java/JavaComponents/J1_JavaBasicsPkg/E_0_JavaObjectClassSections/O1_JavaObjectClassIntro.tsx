/*


*/
import { MainChildArea } from "../../../../../components";

const O1_JavaObjectClassIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          In Java, the Object class is the root class of the entire class hierarchy. Every class in Java implicitly inherits from the Object class,
          whether directly or indirectly. <br />
          This means that all Java classes (including <strong>arrays, interfaces, and enums</strong>) have access to the methods defined in the Object
          class, unless they override them.
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_JavaObjectClassIntro;
