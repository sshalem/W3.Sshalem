/*


*/
import { GitHub, GitHubLiAnchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanYellow } from "../../../../../components/Highlight";

const O3_OrderService = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">I created OrderService as a plain monolithic Spring boot app, (same Priciple as CustomerService)</article>

        <GitHub>
          <GitHubLiAnchor
            description="From  : _3_microservices_2_7_18_JDK17  ---> see  :   order-service"
            gitLink="https://github.com/sshalem/MicroServices/tree/main/_3_microservices_2_7_18_JDK17/O1-customer-order/order-service"
          ></GitHubLiAnchor>
        </GitHub>

        <article className="my-8">
          <div className="text-xl font-semibold"> Add following dependencies </div>
          <ULdisc>
            <Li>JPA</Li>
            <Li>Web</Li>
            <Li>H2</Li>
            <Li>Postgresql</Li>
            <Li>DevTools</Li>
            <Li>Actuator</Li>
            <Li>ModelMapper</Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8">
          <div className="text-xl font-semibold"> Create following packages </div>
          <ULdisc>
            <Li>entity</Li>
            <Li>repository</Li>
            <Li>service</Li>
            <Li>exception</Li>
            <Li>dto</Li>
            <Li>config</Li>
            <Li>shared</Li>
            <Li>controller</Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8">
          <div className="my-8 text-xl font-semibold">application.properties</div>
          <p>
            since I have <strong>H2</strong>, and <strong>Postgres</strong> , thus I created 3 properties files :{" "}
          </p>
          <ULdisc>
            <Li>
              <strong>application.properties</strong> - main
            </Li>
            <Li>
              <strong>application-postgres.properties</strong> - profile for postgres config
            </Li>
            <Li>
              <strong>application-h2.properties</strong> - profile for h2 config
            </Li>
          </ULdisc>
          <p>
            The <SpanYellow>Important</SpanYellow> things is in the <SpanYellow>application.properties</SpanYellow> are :
            <ULdisc>
              <Li>
                the <SpanYellow>spring.application.name=order-service</SpanYellow>
              </Li>
              <Li>Port number</Li>
            </ULdisc>
          </p>
          <ApplicationPropertiesHighlight propertiesCode={_1_}></ApplicationPropertiesHighlight>
        </article>
        <hr />
        <article className="my-8">
          <DivDoubleBorder> Write code </DivDoubleBorder>
          <ULdisc>
            <Li>I wrote the code as it a regular monolithic app (Regardless CustomerService)</Li>
            <Li>
              In section 3 I will show how communicate between services with <SpanYellow>RestTemplate</SpanYellow>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_OrderService;

const _1_ = `spring.application.name=order-service

server.port=9001

#spring.profiles.active=h2
spring.profiles.active=postgres

# actuator
management.endpoints.web.exposure.include=health,info
management.endpoint.health.show-details=always`;
