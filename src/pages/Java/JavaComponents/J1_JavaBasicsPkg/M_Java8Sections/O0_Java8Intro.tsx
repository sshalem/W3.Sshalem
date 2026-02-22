/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O0_Java8Intro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">✅ JAVA 8 </article>
        Java 8 introduced:
        <ULdisc>
          <Li>Streams</Li>
          <Li>Lambda expressions</Li>
          <Li>Functional interfaces</Li>
          <Li>Default methods</Li>
          <Li>Method references</Li>
          <Li>Optional</Li>
        </ULdisc>
        Streams work hand-in-hand with lambdas.
      </section>
    </MainChildArea>
  );
};
export default O0_Java8Intro;
