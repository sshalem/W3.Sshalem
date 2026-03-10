import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O2_IntroLoadBalace2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-xl font-semibold">1️⃣ What is Load Balancing?</p>
          <p>
            Load balancing in Spring Boot microservices is the process of distributing incoming network traffic across multiple instances of a service
            to ensure efficient resource use, high availability, and fault tolerance. It prevents any single service instance from becoming
            overwhelmed and allows the system to scale horizontally to handle increased demand.
          </p>
          <p className="my-8 text-xl font-semibold">
            ⭐ the 3 most important <SpanYellow>load-balancing mechanisms</SpanYellow> to understand are:
          </p>
          <ULdisc>
            <Li>
              1️⃣ <strong>The client makes Load Balancing</strong> . Spring Cloud LoadBalancer , decides which service instance to call.
              <ULdisc>
                <Li>Common in microservices using Eureka service discovery.</Li>
                <Li>
                  technology, <SpanYellow>Spring Cloud LoadBalancer</SpanYellow>
                </Li>
                <Li>
                  Typical stack:
                  <ULdisc>
                    <Li>Spring Boot</Li>
                    <Li>Eureka</Li>
                    <Li>
                      <SpanYellow>RestTemplate</SpanYellow> or <SpanYellow>OpenFeign</SpanYellow>
                    </Li>
                  </ULdisc>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              2️⃣ <strong>the gateway performs the load balancing</strong> API Gateway routing, When using an API gateway.
              <ULdisc>
                <Li>acts as the single entry point for all external requests</Li>
                <Li>integrates with the client-side load balancer</Li>
                <Li>Inside the gateway, Spring Cloud LoadBalancer usually selects the instance.</Li>
              </ULdisc>
            </Li>
            <Li>
              3️⃣ <strong>Kafka partition balancing</strong>
              <ULdisc>
                <Li>In event systems, messages are distributed instead of HTTP requests.</Li>
                <Li>Kafka uses partition-based load distribution.</Li>
                <Li>Each instance processes different partitions.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-lg">2️⃣ Who Performs the Load Balancing?</p>
          <ULdisc>
            <Li>
              The load balancing is done by <SpanYellow>Spring Cloud LoadBalancer</SpanYellow>
            </Li>
            <Li>Older Version is Netflix Ribbon (now deprecated)</Li>
            <Li>
              Since we are using <SpanYellow>spring boot 2.7.18</SpanYellow> , and <SpanYellow>Spring Cloud 2021</SpanYellow> , hence its using{" "}
              <SpanYellow>Spring Cloud LoadBalancer</SpanYellow>
            </Li>
            <Li>
              Load Balancing occurs on the <SpanYellow>client</SpanYellow> services
            </Li>
            <Li>
              When we add the dependency below , .
              <XmlHighlight xmlCode={_2_} />
              Spring Cloud automatically brings in <SpanYellow>: 👉 Spring Cloud LoadBalancer</SpanYellow>
              <XmlHighlight xmlCode={_3_} />
              So in most projects you do not need to add <SpanYellow>spring-cloud-starter-loadbalancer</SpanYellow> manually.
            </Li>
            <Li>
              Maven pulls several dependencies automatically, including:
              <ULdisc>
                <Li>Eureka Client</Li>
                <Li>Spring Cloud Commons</Li>
                <Li>Spring Cloud LoadBalancer</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        <hr />

        <article className="my-8">
          <p className="text-lg">3️⃣ When Explicitly Need the LoadBalancer Dependency ?</p>
          <ULdisc>
            <Li>You do not use Eureka</Li>
            <Li>You use service discovery alternatives</Li>
            <Li>You use custom load balancing</Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-lg">4️⃣ How They Work Together</p>

          <ULDecimal>
            <Li>Architecture:</Li>
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
            <Li>
              <SpanYellow>Order Service</SpanYellow> wants to call <SpanYellow>http://payment-service/pay</SpanYellow>
            </Li>
            <Li>
              Spring Cloud LoadBalancer asks Eureka:
              <ULdisc>
                <Li>
                  <SpanYellow>Give me all instances of PAYMENT-SERVICE</SpanYellow>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              Eureka responds:
              <ULdisc>
                <Li>
                  <strong>10.0.0.1:8001</strong> , <strong>10.0.0.1:8002</strong>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              LoadBalancer chooses one instance: <strong>10.0.0.1:8002</strong>
            </Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_IntroLoadBalace2718;

const _1_ = `Order Service
      |
      v
Spring Cloud LoadBalancer
      |
      v
Eureka Server
      |
      v
List of Payment Service Instances`;

const _2_ = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>`;

const _3_ = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>`;
