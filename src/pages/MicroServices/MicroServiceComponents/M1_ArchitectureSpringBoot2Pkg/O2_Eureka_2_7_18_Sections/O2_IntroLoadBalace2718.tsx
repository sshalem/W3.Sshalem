import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O2_IntroLoadBalace2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg">1️⃣ Who Performs the Load Balancing?</p>
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
          <p className="text-lg">2️⃣ When Explicitly Need the LoadBalancer Dependency ?</p>
          <ULdisc>
            <Li>You do not use Eureka</Li>
            <Li>You use service discovery alternatives</Li>
            <Li>You use custom load balancing</Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-lg">2️⃣ How They Work Together</p>

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
