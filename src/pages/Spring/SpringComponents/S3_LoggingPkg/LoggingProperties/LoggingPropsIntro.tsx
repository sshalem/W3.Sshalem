import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const LoggingPropsIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      In this section , I will show , how I can log, every class from any package I want on Spring boot app, including packages/classes from different
      packages that I import.
      <ULdisc>
        <Li>
          <SpanGrey>logging.level.root=INFO</SpanGrey> - 💡 Global logging level
        </Li>
        <Li>
          <SpanGrey>logging.level.com.example.myapp.service=DEBUG</SpanGrey> - 💡 Log only a specific package in detail
        </Li>
        <Li>
          <SpanGrey>logging.level.org.springframework.security.web.FilterChainProxy=TRACE</SpanGrey> - 💡 log package in detail
        </Li>
        <Li>
          <SpanGrey>logging.level.org.springframework.orm.jpa=debug</SpanGrey> - 💡log package <SpanGrey>org.springframework.orm.jpa</SpanGrey>
        </Li>
      </ULdisc>
      In the Example Below Spring Boot tells to
      <ULdisc>
        <Li>
          log everything in <SpanGrey>com.example.myapp.service</SpanGrey> at <SpanGrey>DEBUG</SpanGrey> level
        </Li>
        <Li>
          while keeping the rest at <SpanGrey>INFO</SpanGrey>
        </Li>
      </ULdisc>
      <JavaHighlight javaCode={logging}></JavaHighlight>
    </MainChildArea>
  );
};

export default LoggingPropsIntro;

const logging = `# Global logging level
logging.level.root=INFO

# Log only a specific package in detail
logging.level.com.example.myapp.service=DEBUG

# You can also control other packages (e.g., Hibernate)
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql=TRACE`;
