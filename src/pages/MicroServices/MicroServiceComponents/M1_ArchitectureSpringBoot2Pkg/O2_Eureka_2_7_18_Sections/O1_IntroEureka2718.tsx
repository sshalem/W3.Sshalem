import { Link } from "react-router-dom";
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_IntroEureka2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg">1️⃣ What Is Eureka Server (Discovery Server) :</p>
          <ULdisc>
            <Li>Register services</Li>
            <Li>Store service locations</Li>
            <Li>Provide service instances</Li>
          </ULdisc>
          <p className="text-lg">✅ Then , Who Performs the Load Balancing?</p>
          <ULdisc>
            <Li>
              The load balancing is done by <SpanYellow>Spring Cloud LoadBalancer</SpanYellow> , for explanation see{" "}
              <Link className="text-blue-500" to={"/microservices/architecture-springboot-2-7-18/eureka#2.IntroLoadBalancer"}>
                Intro LoadBalancer
              </Link>
            </Li>
          </ULdisc>
        </article>

        <hr />
        <article className="my-8">
          <p className="text-lg">2️⃣ What Eureka Server (Discovery Server) Actually Does is very simple:</p>
          <ULdisc>
            <Li>
              it is standalone Spring Boot application, <SpanYellow>run as a server</SpanYellow>
            </Li>
            <Li>
              it has <SpanYellow>NO business logic</SpanYellow> like other services
            </Li>
            <Li>It is an infrastructure application</Li>
            <Li>maintain a Central registry of microservices</Li>
            <Li>The registry where all services register themselves.</Li>
            <Li>let clients discover service locations dynamically</Li>
          </ULdisc>
        </article>

        <hr />
        <article className="my-8"> </article>
        <p className="my-8 text-xl font-semibold">3️⃣ Eureka Clients</p>
        <ULdisc>
          <Li>Every microservice is a client.</Li>
          <Li>
            When a service starts:
            <ULdisc>
              <Li>It registers itself in Eureka</Li>
              <Li>It sends heartbeats</Li>
              <Li>It asks Eureka for other services</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroEureka2718;
