/*
/spring/rest/rest-api#1.RestIntro
Rest Intro --> (SPRING)(rest)(rest-api)
*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanRed } from "../../../../../components/Highlight";

const O1_RestIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        In this Section I will built a method that throws <SpanRed>RunetimeException</SpanRed>. I will build and show , each project under Exception
        Handling subject , what its purpose. <br />
        On this basic Project, I will add feature , upon next projects, so it will be more clear.
      </section>
      In this project I will Build a
      <ULdisc>
        <Li>
          Contoller ➡️ Service ➡️ method that throws simple <SpanRed>RuntimeException</SpanRed>
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};

export default O1_RestIntro;
