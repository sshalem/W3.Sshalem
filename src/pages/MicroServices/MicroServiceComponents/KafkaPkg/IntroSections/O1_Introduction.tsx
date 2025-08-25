import { Anchor, MainChildArea } from "../../../../../components";
import { SpanBlue } from "../../../../../components/Highlight";

const O1_Introduction = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        From course on <SpanBlue>udemy</SpanBlue>{" "}
        <Anchor
          description="Ramesh Fadatare tutorial on apache kafka"
          href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/learn/lecture/35997454#overview"
        ></Anchor>{" "}
        part of course{" "}
        <Anchor
          description="Building Microservices with Spring Boot & Spring Cloud"
          href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/?couponCode=25BBPMXINACTIVE"
        ></Anchor>
      </section>

      <Anchor description="Apache Kafka" href="https://kafka.apache.org/"></Anchor>
    </MainChildArea>
  );
};

export default O1_Introduction;
