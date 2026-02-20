/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O1_BuilderIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <strong className="text-lg">
            The Builder Pattern is a creational design pattern that lets you construct complex objects step by step. <br />
            It’s especially useful when:
          </strong>
          <ULdisc>
            <Li>A class has many parameters (especially optional ones)</Li>
            <Li>You want immutable objects</Li>
            <Li>You want readable and flexible object creation</Li>
            <Li>With builder, No need to have multiple constructions</Li>
          </ULdisc>
          <strong className="text-lg">✔ Benefits:</strong>
          <ULdisc>
            <Li>Readable</Li>
            <Li>Flexible</Li>
            <Li>Immutable object</Li>
            <Li>No constructor overload chaos</Li>
            <Li> Easy to add new optional parameters</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_BuilderIntro;
