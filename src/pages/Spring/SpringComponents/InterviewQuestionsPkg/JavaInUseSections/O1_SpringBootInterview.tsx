import { Anchor, MainChildArea } from "../../../../../components";

const O1_SpringBootInterview = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-4">
        Here is a list of question by <strong>JAVA In Use</strong> web site
      </div>
      <p>
        <Anchor description="Spring Boot Interview Question 2025" href="https://www.javainuse.com/spring/SpringBootInterviewQuestions"></Anchor>
      </p>
      <p>
        <Anchor description="Spring AOP Question" href="https://www.javainuse.com/spring/spring-AOP-interview-quesions"></Anchor>
      </p>
      <p>
        <Anchor description="Spring Batch Question" href="https://www.javainuse.com/spring/sprbatch_interview"></Anchor>
      </p>
      <p>
        <Anchor description="JAVA 8 questions" href="https://www.javainuse.com/java/java8_intvw"></Anchor>
      </p>
      <p>
        <Anchor description="Spring Cloud questions" href="https://www.javainuse.com/spring/spring-cloud-interview-questions"></Anchor>
      </p>
      <p>
        <Anchor description="Microservices Interview Quesions" href="https://www.javainuse.com/spring/microservices-interview-quesions"></Anchor>
      </p>
      <p>
        <Anchor description="JAVA HashMap vs Cuncurrent Map" href="https://www.javainuse.com/java/java_map_intvw"></Anchor>
      </p>
      <p>
        <Anchor description="Maven interview questions" href="https://www.javainuse.com/misc/maven-interview-questions"></Anchor>
      </p>
    </MainChildArea>
  );
};

export default O1_SpringBootInterview;
