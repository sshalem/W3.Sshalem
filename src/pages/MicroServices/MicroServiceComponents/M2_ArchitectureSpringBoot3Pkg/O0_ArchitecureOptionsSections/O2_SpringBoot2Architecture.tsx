/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O2_SpringBoot2Architecture = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p>
            🎯 This Is a Learning Project for <SpanYellow>Spring boot 2.7 version </SpanYellow>— Here’s the Right Approach
          </p>
          <ULDecimal>
            <Li>✅ Eureka</Li>
            <Li>✅ API Gateway</Li>
            <Li>✅ Config Server</Li>
            <Li>✅ Load-balanced instances</Li>
            <Li>✅ Separate DB per service</Li>
            <Li>✅ Resilience4j</Li>
            <Li>✅ Sleuth + Zipkin (distributed tracing stack) standard tracing solution for Spring Boot 2 microservices</Li>
            <Li>✅ Communication - OpenFeign , Kafka (Event driven), RabbitMq , RestTemplate (Old)</Li>
          </ULDecimal>
          Why? This architecture is excellent to understand:
          <ULdisc>
            <Li>It teaches you the foundations.</Li>
            <Li>Distributed systems</Li>
            <Li>Observability</Li>
            <Li>Resilience patterns</Li>
            <Li>Service discovery</Li>
            <Li>Cloud config management</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_SpringBoot2Architecture;
