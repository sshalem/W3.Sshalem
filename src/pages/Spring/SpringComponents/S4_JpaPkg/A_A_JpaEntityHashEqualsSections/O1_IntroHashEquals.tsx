/*
/spring/jpa/equals-hashcode
equals() and  hashcode() 
*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_IntroHashEquals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">
          🎯 To create <SpanYellow>equals()</SpanYellow> and <SpanYellow>hashCode()</SpanYellow> , we must distinguish between:
          <ULDecimal>
            <Li>plain JAVA POJO</Li>
            <Li>for JPA Entity</Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroHashEquals;
