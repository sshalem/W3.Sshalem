import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_IntroEureka2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg">✅ What Eureka Actually Does Eureka's responsibility is very simple:</p>
          <ULdisc>
            <Li>Register services</Li>
            <Li>Store service locations</Li>
            <Li>Provide service instances</Li>
          </ULdisc>
          <p className="text-lg">✅ Who Performs the Load Balancing?</p>
          <ULdisc>
            <Li>
              The load balancing is done by <SpanYellow>Spring Cloud LoadBalancer</SpanYellow> , see Intro LoadBalancer
            </Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <div>
            <p className="text-xl">
              What is Netflix <SpanYellow>Eureka</SpanYellow> in a Spring Boot Microservices System?
            </p>
            In a microservices architecture, services run independently and may have multiple instances that start, stop, or change IP
            addresses.Because of that, services cannot rely on fixed URLs to call each other.
            <ULdisc>
              <Li>This is exactly the problem Eureka solves.</Li>
              <Li>Eureka = Service Discovery System</Li>
              <Li>Instead of calling a service by IP, services ask Eureka where that service currently lives.</Li>
            </ULdisc>
          </div>
          Lets explain 3 things regarding Eureka:
          <ULdisc>
            <Li>1️⃣ Eureka Server (Discovery server)</Li>
            <Li>2️⃣ Eureka Clients</Li>
            <Li>3️⃣ Service-to-Service Discovery</Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8 text-xl font-semibold">1️⃣ Eureka Discovery Server</article>
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
          <Li>
            Example registry:
            <ULdisc>
              <Li>customer-service : Instance 10.0.0.1:8001</Li>
              <Li>customer-service : Instance 10.0.0.1:8002</Li>
              <Li>order-service : Instance 10.0.0.1:9001</Li>
              <Li>order-service : Instance 10.0.0.1:9002</Li>
            </ULdisc>
          </Li>
        </ULdisc>

        <hr />

        <article className="my-8 text-xl font-semibold">2️⃣ Eureka Clients</article>
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

        <hr />

        <article className="my-8 text-xl font-semibold">3️⃣ Service-to-Service Discovery</article>
        <ULdisc>
          <Li>
            Instead of calling <SpanYellow>http://10.0.0.7:8001/pay</SpanYellow>
          </Li>
          <Li>
            You call: <SpanYellow>http://payment-service/pay</SpanYellow>
          </Li>
          <Li>And Eureka resolves it.</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroEureka2718;
