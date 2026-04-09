import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O4_Create_CSSpringApp_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-xl font-semibold">1️⃣ Create new Spring application</p>
        <article className="my-8">
          Create new Spring application name it <SpanYellow>ConfigServer</SpanYellow>
          <ULdisc>
            <Li>the log file of each service goes is read by Logstash</Li>
            <Li>See How its been done in Logstash Section</Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">2️⃣ Add dependency</p>
          Add following dependency only
          <XmlHighlight xmlCode={_1_} />
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">3️⃣ Add Annotate</p>
          In the main class add annotation of
          <JavaHighlight javaCode={_2_} />
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">4️⃣ application.properties</p>
          In the main class add annotation of
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_Create_CSSpringApp_2718;

const _1_ = `    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-config-server</artifactId>
    </dependency>`;

const _2_ = `@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}`;

const _3_ = `server.port=8888
spring.application.name=config-server

spring.cloud.config.server.git.uri=https://github.com/sshalem/config-server-2-7-18
spring.cloud.config.server.git.default-label=main
spring.cloud.config.server.git.clone-on-start=true


spring.cloud.config.server.git.username=sshalem
spring.cloud.config.server.git.password=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`;
