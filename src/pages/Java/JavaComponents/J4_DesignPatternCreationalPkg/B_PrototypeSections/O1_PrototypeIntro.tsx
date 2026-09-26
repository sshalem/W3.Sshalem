/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_PrototypeIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        The Prototype Design Pattern is a creational design pattern that allows cloning of objects to create new instances, rather than creating them
        from scratch. <br />
        This is particularly useful when object creation is expensive or complex.
        <article className="my-4">
          <div>Key Concepts:</div>
          <ULdisc>
            <Li>
              <strong>Prototype</strong> : Defines an interface for creating a clone of itself.
            </Li>
            <Li>
              <strong>ConcretePrototype</strong> : Implements the <SpanYellow>clone</SpanYellow> method to create a copy of the current object.
            </Li>
            <Li>
              <strong>Client</strong> : Uses the <SpanYellow>clone</SpanYellow> method to duplicate the prototype.
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_PrototypeIntro;
