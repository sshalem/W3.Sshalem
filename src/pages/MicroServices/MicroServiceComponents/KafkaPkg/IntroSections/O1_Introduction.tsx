import { Anchor, IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";
import kafka_1 from "../../../../../assets/kafka_1.jpg";

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
      See <SpanBlue>Kafka</SpanBlue> relevent data and docs from link of:
      <ULdisc>
        <Li>
          <Anchor description="Apache Kafka" href="https://kafka.apache.org/"></Anchor>
        </Li>
        <Li>
          <Anchor description="Use cases" href="https://kafka.apache.org/uses"></Anchor>
        </Li>
        <Li>
          <Anchor description="What is event streaming?" href="https://kafka.apache.org/intro#intro_streaming"></Anchor>
        </Li>
        <Li>
          <Anchor description="How does Kafka work in a nutshell?" href="https://kafka.apache.org/intro#intro_nutshell"></Anchor>
        </Li>
        <Li>
          <Anchor description="Main concepts and terminology" href="https://kafka.apache.org/intro#intro_concepts_and_terms"></Anchor>
        </Li>
        <Li>
          <Anchor description="Kafka APIs" href="https://kafka.apache.org/intro#intro_apis"></Anchor>
        </Li>
        <Li>
          See link from Baeldung <Anchor description="https://www.baeldung.com/apache-kafka" href="https://www.baeldung.com/apache-kafka"></Anchor>
        </Li>
      </ULdisc>
      <DivDoubleBorder>Kafka Ecosystem</DivDoubleBorder>
      <div>
        <SpanBlue>Kafka</SpanBlue> is a <SpanRed>distibuted system</SpanRed>, and it acts as a cluster. <br />
        <SpanBlue>Kafka</SpanBlue> consists of a set of <SpanGreen>brokers</SpanGreen>. A Cluster has minimum of 3<SpanGreen>brokers</SpanGreen>.
      </div>
      <IMG img_name={kafka_1}></IMG>
      <DivDoubleBorder>Kafka Broker</DivDoubleBorder>
    </MainChildArea>
  );
};

export default O1_Introduction;
