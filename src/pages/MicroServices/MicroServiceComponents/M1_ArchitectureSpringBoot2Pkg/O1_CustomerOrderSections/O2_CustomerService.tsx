/*


*/
import { GitHub, GitHubLiAnchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanYellow } from "../../../../../components/Highlight";

const O2_CustomerService = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">I Create CustomerService as a plain monolithic Spring boot app</article>

        <article className="my-8">
          <DivDoubleBorder> Add following dependencies </DivDoubleBorder>
          <ULdisc>
            <div className="flex w-1/3 justify-between">
              {" "}
              <Li>
                <strong>JPA</strong>
              </Li>
              <Li>
                <strong>Web</strong>
              </Li>
              <Li>
                <strong>H2</strong>
              </Li>
              <Li>
                <strong>Postgresql</strong>
              </Li>
              <Li>
                <strong>DevTools</strong>
              </Li>
              <Li>
                <strong>ModelMapper</strong>
              </Li>
            </div>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8">
          <DivDoubleBorder> Create following packages </DivDoubleBorder>
          <ULdisc>
            <div className="flex w-2/4 justify-between">
              <Li>
                <strong>entity</strong>
              </Li>
              <Li>
                <strong>repository</strong>
              </Li>
              <Li>
                <strong>service</strong>
              </Li>
              <Li>
                <strong>exception</strong>
              </Li>
              <Li>
                <strong>dto</strong>
              </Li>
              <Li>
                <strong>config</strong>
              </Li>
              <Li>
                <strong>shared</strong>
              </Li>
              <Li>
                <strong>controller</strong>
              </Li>
            </div>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8">
          <DivDoubleBorder>application.properties</DivDoubleBorder>
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
                the <SpanYellow>spring.application.name=customer-service</SpanYellow>
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
            <Li>I wrote the code as it a regular monolithic app (Regardless OrderService)</Li>
            <Li>
              In section 3 I will show how communicate between services with <SpanYellow>RestTemplate</SpanYellow>
            </Li>
            <Li>
              <GitHub>
                <GitHubLiAnchor
                  description="From  : _3_microservices_2_7_18_JDK17  ---> see  :   customer-service"
                  gitLink="https://github.com/sshalem/MicroServices/tree/main/_3_microservices_2_7_18_JDK17/O1-customer-order/customer-service"
                ></GitHubLiAnchor>
              </GitHub>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_CustomerService;

const _1_ = `spring.application.name=customer-service

server.port=8001

#spring.profiles.active=h2
spring.profiles.active=postgres`;
