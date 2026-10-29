/*
/spring/jpa/logging-jpa-hibernate#3.P6Spylogging
P6Spy logging --> (SPRING)(JPA)(logging-jpa-hibernate)
*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties, Highlight_XML } from "../../../../../components/Highlight";
import SpanYellow from "../../../../../components/Highlight/SpanYellow";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_P6SpyLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 P6Spy logging</p>
        Why P6Spy is better than Hibernate logging:
        <ULdisc>
          <Li>✅ Shows SQL</Li>
          <Li>✅ Shows Parameters</Li>
          <Li>✅ Pretty Formatting</Li>
          <Li>✅ Execution Time</Li>
          <Li>✅ Works with Any JPA Provider</Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔹 1. Add P6Spy dependency</p>
        <Highlight_XML xmlCode={xml_pom}></Highlight_XML>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔹 2. Configure application.properties</p>
        Replace your datasource driver with P6Spy’s proxy driver. <br />
        👉 Notice <SpanYellow>jdbc:p6spy:mysql://...</SpanYellow> instead of <SpanYellow>jdbc:mysql://....</SpanYellow>
        <Highlight_ApplicationProperties code={properties}></Highlight_ApplicationProperties>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔹 3. Create spy.properties (in src/main/resources)</p>
        This file controls how queries are logged. <br />
        <Highlight_ApplicationProperties code={spy_properties}></Highlight_ApplicationProperties>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O3_P6SpyLogging;

const xml_pom = `
<dependency>
    <groupId>p6spy</groupId>
    <artifactId>p6spy</artifactId>
    <version>3.9.1</version>
</dependency>
`;

const properties = `# <--- MySql --->
spring.datasource.driver-class-name=com.p6spy.engine.spy.P6SpyDriver
spring.datasource.url=jdbc:p6spy:mysql://localhost:3306/mydb

# <--- H2 --->
spring.datasource.driver-class-name=com.p6spy.engine.spy.P6SpyDriver
spring.datasource.url=jdbc:p6spy:h2:mem:testdb
`;

const spy_properties = `# Log file location (optional – defaults to system out)
appender=com.p6spy.engine.spy.appender.Slf4JLogger

# Log category
appender.slf4j.loggingCategory=SQL

# Pretty formatting
logMessageFormat=com.p6spy.engine.spy.appender.MultiLineFormat`;
