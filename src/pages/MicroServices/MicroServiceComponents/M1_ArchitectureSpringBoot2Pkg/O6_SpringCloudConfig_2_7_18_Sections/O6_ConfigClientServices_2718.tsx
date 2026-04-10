import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, XmlHighlight } from "../../../../../components/Highlight";

const O6_ConfigClientServices_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-xl font-semibold">Steps to Config Client Microservices with Cloud Config Server</p>
        <article className="my-8">
          Client MicServ must have following dependencies:
          <ULdisc>
            <Li>Spring Cloud config Client for the other microservices to be able to connect to the Config Server</Li>
            <Li>WEB_dependency</Li>
            <Li>WEB Actuator dependency</Li>
            <Li>Devtools dependency (Only during devcelopment , on production remove it)</Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">1️⃣ Add dependency</p>
          <ULdisc>
            <Li>Add the following dependency to EACH microservice.</Li>
          </ULdisc>
          <XmlHighlight xmlCode={_1_} />
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">2️⃣ application.properties</p>
          <ULdisc>
            <Li>add this to application.properties of EACH service</Li>
          </ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
        </article>
      </section>
    </MainChildArea>
  );
};

export default O6_ConfigClientServices_2718;

const _1_ = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>`;

const _2_ = ``;
