import { Anchor, MainChildArea } from "../../../../../components";

const O1_RabmqIntroduction = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        From course on udemy{" "}
        <Anchor
          description="RabbitMQ - Ramesh Fadatare "
          href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/learn/lecture/35929576#overview"
        ></Anchor>{" "}
        part of course{" "}
        <Anchor
          description="Building Microservices with Spring Boot & Spring Cloud"
          href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/?couponCode=25BBPMXINACTIVE"
        ></Anchor>
      </section>
    </MainChildArea>
  );
};

export default O1_RabmqIntroduction;
