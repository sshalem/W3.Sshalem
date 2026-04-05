import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O2_SZ_dependency_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          To add distributed tracing with <strong>Spring Boot 2.7.18</strong>, we should use <SpanYellow>Spring Cloud Sleuth</SpanYellow> +{" "}
          <SpanYellow>Zipkin</SpanYellow>.
          <ULdisc>
            <Li>
              1️⃣ Add dependencies (to EACH microservice , including API-Gateway)
              <XmlHighlight xmlCode={_1_} />
            </Li>
            <Li>2️⃣ Verify Spring Cloud BOM (already doen when Added Eureka , Spring cloud version matches in all services)</Li>
            <Li>
              3️⃣ application.properties (each service)
              <ULdisc>
                <Li>
                  Important: <SpanYellow>probability=1.0</SpanYellow> → trace ALL requests (for testing)
                </Li>
              </ULdisc>
              <ApplicationPropertiesHighlight propertiesCode={_2_} />
            </Li>
            <Li>
              4️⃣ Optional but recommended
              <ApplicationPropertiesHighlight propertiesCode={_3_} />
            </Li>
            <Li>
              5️⃣ Run Zipkin server
              <ApplicationPropertiesHighlight propertiesCode={_4_} />
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_SZ_dependency_2718;

const _1_ = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-sleuth-zipkin</artifactId>
</dependency>`;

const _2_ = `spring.zipkin.base-url=http://localhost:9411
spring.sleuth.sampler.probability=1.0`;

const _3_ = `logging.pattern.level=%5p [\${spring.application.name:},%X{traceId:-},%X{spanId:-}]`;

const _4_ = `java -jar zipkin-server-2.23.16-exec.jar`;
