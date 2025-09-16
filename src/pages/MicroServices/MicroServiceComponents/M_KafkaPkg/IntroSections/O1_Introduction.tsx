import { Anchor, IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";
import kafka_1 from "../../../../../assets/kafka_1.jpg";
import kafka_2 from "../../../../../assets/kafka_2.jpg";
import ULDecimal from "../../../../../components/ui/ULDecimal";

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
        <Li>
          See link from geeksforgeeks{" "}
          <Anchor description="what-is-a-kafka-broker" href="https://www.geeksforgeeks.org/cloud-computing/what-is-a-kafka-broker/"></Anchor>
        </Li>
      </ULdisc>
      <DivDoubleBorder>Kafka Ecosystem</DivDoubleBorder>
      <div>
        <SpanBlue>Kafka</SpanBlue> is a <SpanRed>distibuted system</SpanRed>, and it acts as a cluster. <br />
        <SpanBlue>Kafka</SpanBlue> consists of a set of <SpanGreen>brokers</SpanGreen>. A Cluster has minimum of 3<SpanGreen>brokers</SpanGreen>.
      </div>
      <IMG img_name={kafka_1}></IMG>
      <DivDoubleBorder>1. Kafka Broker</DivDoubleBorder>
      <section>
        The Broker is the <SpanBlue>Kafka Server</SpanBlue>. A Kafka broker is like a single worker or machine in the Kafka system. Its main jobs are
        <ULDecimal>
          <Li>to receive new messages coming in safely</Li>
          <Li> store those messages and provide the stored messages to any consumers that need them</Li>
        </ULDecimal>
        The broker acts as the middle person between producers sending messages and consumers receiving messages
        <IMG img_name={kafka_2}></IMG>
      </section>
      <DivDoubleBorder>2. Cluster</DivDoubleBorder>
      <section>
        A Kafka cluster is a <strong>group of multiple Kafka brokers</strong> all working together. A Cluster has
        <SpanGreen>minimum of 3 brokers</SpanGreen>. <br />
        Having a cluster allows Kafka to handle very large amounts of data. If more data needs to be processed new brokers can easily be added to make
        the cluster bigger. If less data needs processing, brokers can be removed to make the cluster smaller.
      </section>
      <DivDoubleBorder>3. Topic</DivDoubleBorder>
      <section>
        A topic is like a labelled box or category that related messages go into in Kafka. <br />
        It is like a table in a DB or folder in a file system
      </section>
      <DivDoubleBorder>4. Partitions</DivDoubleBorder>
      <section>
        each topic is further divided into smaller partitions, which are like sub boxes inside the main topic box. Having these partitions allows
        different parts of the big topic to be processed in parallel by multiple brokers at the same time. Partitions also make it easy to increase
        processing power by simply adding more partitions as the amount of data grows.
      </section>
      <DivDoubleBorder>5. Replicas for reliability</DivDoubleBorder>
      <section>
        To ensure no data is lost if a broker fails, Kafka makes multiple copies or replicas of each partition across different brokers in the
        cluster. So if one broker goes down the replicas on other brokers can still serve the messages, providing reliability and preventing data
        loss.
      </section>
      <DivDoubleBorder>6. Offsets</DivDoubleBorder>
      <section>
        Offsets is a sequence of id's given to messages as they arrive at a partition. Once the offset is assigned it will never be changed. The first
        message gets offset zero. the next gets offset of one, and so on.
      </section>
      <DivDoubleBorder>7. Messages</DivDoubleBorder>
      <section>These messages can contain any type of data like logs, events, records or other information from the producer</section>
      <DivDoubleBorder>8. Producer</DivDoubleBorder>
      <section>
        Is Application that send messages only to <SpanBlue>Kafka server</SpanBlue>
      </section>
      <DivDoubleBorder>9. Consumer</DivDoubleBorder>
      <section>
        Is Application that reads messages from <SpanBlue>Kafka server</SpanBlue>
      </section>
      <DivDoubleBorder>10. Consumer Groups</DivDoubleBorder>
      <section>A Consumer group contains one or more consumers working together to process the messages.</section>
      <DivDoubleBorder>11. Fault Tolerance</DivDoubleBorder>
      <section>
        Kafka provides the <SpanBlue>fault tolerance</SpanBlue> by making the multiple copies ( replicas ) of the data. Each partitions data is copied
        across different brokers. If one broker fails the another broker with the replica can easily take over as the leader ensuring operations keep
        running and the data remains available.
      </section>
    </MainChildArea>
  );
};

export default O1_Introduction;
