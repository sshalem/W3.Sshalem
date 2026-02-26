/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_1 from "../../../../../assets/microservice_1.jpg";

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
            <Li>
              ✅ Load-balanced
              <ULdisc>
                <Li>Ribbon was used (now dead)</Li>
                <Li>Use Spring Cloud LoadBalancer</Li>
              </ULdisc>
            </Li>
            <Li>✅ Separate DB per service</Li>
            <Li>✅ Resilience4j</Li>
            <Li>
              ✅ Observability Sleuth + Zipkin (distributed tracing stack) standard tracing solution for Spring Boot 2 microservices
              <ULdisc>
                <Li>
                  More adavanced <strong>is 3 pillars of observability</strong>
                </Li>
                <Li>
                  🔹 Metrics stack(to monitor JVM memory, CPU , Request latency , Error rates ,Circuit breaker states), add:
                  <ULdisc>
                    <Li>Micrometer</Li>
                    <Li>Prometheus</Li>
                    <Li>Grafana</Li>
                  </ULdisc>
                </Li>
              </ULdisc>
            </Li>
            <Li>✅ Communication - OpenFeign , Kafka (Event driven), RabbitMq , RestTemplate (Old)</Li>
            <Li>✅ ELK logging (Elasticsearch + Logstash + Kibana)</Li>
            <Li>✅ Security</Li>
          </ULDecimal>
          For <strong>Spring Boot 2</strong> microservices (2020–2023 era), This is a very correct and{" "}
          <SpanYellow>production-grade architecture</SpanYellow>.
          <article className="my-8">
            🧠 Important Insight :This stack is not about Spring Boot version anymore.
            <br />
            It’s about:
            <ULdisc>
              <Li>Distributed systems principles</Li>
              <Li>Observability</Li>
              <Li>Resilience</Li>
              <Li>Decoupling</Li>
              <Li>Security</Li>
            </ULdisc>
            <SpanYellow>That knowledge transfers 100% to Spring Boot 3</SpanYellow>.
          </article>
          <IMG img_name={microservice_1}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_SpringBoot2Architecture;
