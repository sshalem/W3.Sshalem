/*


*/
import { Link } from "react-router-dom";
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O6_OpenFeignCommunication = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">
          What is <strong>OpenFeign</strong>
        </article>
        See Implementaion in section <br />
        <Link className="tracking-wider text-blue-500" to={"/microservices/architecture-springboot-2-7-18/eureka#9.OpenFeignImplement"}>
          Eureka OpenFeignImplement
        </Link>
        <ULdisc>
          <Li>
            <SpanYellow>OpenFeign</SpanYellow> is a Java library that simplifies calling REST APIs between services, especially in microservice
            architectures.
          </Li>
          <Li>
            Instead of writing HTTP client code manually (like with RestTemplate or Spring WebClient):
            <ULdisc>
              <Li>you just define a Java interface</Li>
              <Li>Then, Feign automatically creates the HTTP client implementation.</Li>
              <Li>It is commonly used with Spring Boot and Spring Cloud.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        Why OpenFeign Is Powerful
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-xl font-semibold">
          Why <strong>OpenFeign</strong> Is Powerful
        </article>
        <ULdisc>
          <Li>
            <SpanYellow>OpenFeign</SpanYellow> is a Java library that simplifies calling REST APIs between services, especially in microservice
            architectures.
          </Li>
          <Li>
            ✅ Simple way to remember: <SpanYellow>OpenFeign</SpanYellow> = "REST calls between microservices using interfaces instead of HTTP code."
          </Li>
          <Li>
            Instead of writing HTTP client code manually (like with RestTemplate or Spring WebClient):
            <ULdisc>
              <Li>you just define a Java interface</Li>
              <Li>Then, Feign automatically creates the HTTP client implementation.</Li>
              <Li>It is commonly used with Spring Boot and Spring Cloud.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_OpenFeignCommunication;
