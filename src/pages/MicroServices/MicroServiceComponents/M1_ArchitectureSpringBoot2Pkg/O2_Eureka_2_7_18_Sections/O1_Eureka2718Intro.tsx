import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_Eureka2718Intro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          Lets explain 2 things regarding Eureka:
          <ULdisc>
            <Li>Eureka Discovery Server</Li>
            <Li>Eureka Client.</Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8 text-xl font-semibold">
          ✅ What is the <SpanYellow>Eureka Discovery Server</SpanYellow>?
        </article>
        <ULdisc>
          <Li>
            it is standalone Spring Boot application, <SpanYellow>run as a server</SpanYellow>
          </Li>
          <Li>it has no "business logic" like other services</Li>
          <Li>It is an infrastructure application</Li>
          <Li>maintain a Central registry of microservices</Li>
          <Li>let other services register themselves</Li>
          <Li>let clients discover service locations dynamically</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_Eureka2718Intro;
