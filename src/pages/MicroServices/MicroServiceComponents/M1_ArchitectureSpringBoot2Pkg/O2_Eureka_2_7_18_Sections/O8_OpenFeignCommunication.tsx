/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O8_OpenFeignCommunication = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl font-semibold">
          What is <strong>OpenFeign</strong>
        </article>
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

export default O8_OpenFeignCommunication;

const _1_ = `spring.application.name=order-service

server.port=9001

#spring.profiles.active=h2
spring.profiles.active=postgres`;
