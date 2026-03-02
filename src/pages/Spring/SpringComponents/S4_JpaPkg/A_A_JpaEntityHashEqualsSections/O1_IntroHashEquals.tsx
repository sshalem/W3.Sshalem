/*
/spring/jpa/equals-hashcode
equals() and  hashcode() 
*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_IntroHashEquals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">
          🎯 To create <strong>equals()</strong> and <strong>hashCode()</strong> , we must distinguish between the 2 options:
          <ULdisc>
            <Li>
              <SpanYellow>JAVA POJO</SpanYellow>
            </Li>
            <Li>
              <SpanYellow>JPA Entity</SpanYellow>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroHashEquals;
