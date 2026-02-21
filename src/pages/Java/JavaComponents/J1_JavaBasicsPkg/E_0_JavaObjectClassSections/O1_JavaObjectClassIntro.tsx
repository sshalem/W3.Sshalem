/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanRed, SpanYellow } from "../../../../../components/Highlight";

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
        <article className="my-8">
          Key Features of the Object Class:
          <ULdisc>
            <Li>
              It is the <strong>ultimate superclass</strong> of all Java classes.
            </Li>
            <Li>
              The <SpanYellow>Object</SpanYellow> class is part of the <SpanYellow>java.lang</SpanYellow> package (so you don't need to import it).
            </Li>
            <Li>
              The <SpanYellow>Object</SpanYellow> class in Java provides basic methods that are available to every Java object.
            </Li>

            <Li>
              These methods can be overridden to provide custom functionality for equality checks, string representation, cloning, and other
              behaviors.
            </Li>
            <Li>
              All Java classes inherit from the <SpanYellow>Object</SpanYellow> class ,either directly or indirectly. Thus, understanding these
              methods is fundamental to working with Java objects.
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          Key Methods in <SpanYellow>Object</SpanYellow>:
          <ULDecimal>
            <Li>
              <SpanYellow>toString()</SpanYellow> : String representation of the object (can be overridden).
            </Li>
            <Li>
              <SpanYellow>equals()</SpanYellow> : Compares objects for equality (can be overridden).
            </Li>
            <Li>
              <SpanYellow>hashCode()</SpanYellow> : Provides a hash code for the object (<SpanRed>must be overridden</SpanRed> when{" "}
              <SpanYellow>equals()</SpanYellow> is overridden).
            </Li>
            <Li>
              <SpanYellow>clone()</SpanYellow> : Creates a shallow copy of the object (requires implementing Cloneable).
            </Li>
            <Li>
              <SpanYellow>finalize()</SpanYellow> : Called before an object is garbage collected (not recommended for cleanup).
            </Li>
            <Li>
              <SpanYellow>getClass()</SpanYellow> : Returns the Class object associated with the instance.
            </Li>
            <Li>
              <SpanYellow>wait(), notify(), notifyAll()</SpanYellow> : Used for inter-thread communication, must be invoked inside synchronized
              blocks.
            </Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_JavaObjectClassIntro;
