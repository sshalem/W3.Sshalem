import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JsxHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";
import microservice_25 from "../../../../../assets/microservice_25.jpg";
import microservice_26 from "../../../../../assets/microservice_26.jpg";

const O6_ConfigClientServices_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-xl font-semibold">Steps to Config Client Microservices with Cloud Config Server</p>
        <article className="my-8">
          Make sure MicServ have following dependencies before adding the <SpanYellow>Spring Cloud config Client</SpanYellow>:
          <ULdisc>
            <Li>WEB dependency (Already added)</Li>
            <Li>Actuator dependency (Already added)</Li>
            <Li>Devtools dependency (Already added, Only during devcelopment , on production remove it)</Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-xl font-semibold">
            1️⃣ Add <SpanYellow>Spring Cloud config Client</SpanYellow> dependency
          </p>
          <ULdisc>
            <Li>Add the following dependency to EACH microservice</Li>
          </ULdisc>
          <XmlHighlight xmlCode={_1_} />
        </article>
        <article className="my-8">
          <p className="text-xl font-semibold">2️⃣ Create CUSTOMER-SERVICE properties on Config Storage on Git</p>
          <ULdisc>
            <Li>
              Lets see what properties files we have in <SpanYellow>CUSTOMER-SERVICE</SpanYellow>
              <ULdisc>
                <Li>
                  <SpanYellow>application.properties</SpanYellow> - the main properties file that loads when app runs, holds common properties of the
                  profiles
                </Li>
                <Li>
                  <SpanYellow>application-h2.properties</SpanYellow> - holds only properties of H2 DB
                </Li>
                <Li>
                  <SpanYellow>application-postgres.properties</SpanYellow> - holds only properties of Postgresql DB
                </Li>
              </ULdisc>
            </Li>
            <Li>
              <p className="text-xl font-semibold">How to move them to Git Repo?</p>
              <ULdisc>
                <Li>
                  the format of the file in git repo should be as below , thus <JsxHighlight jsxCode={_3_} />
                </Li>
                <Li>
                  So the file names for each properties file will be
                  <ApplicationPropertiesHighlight propertiesCode={_4_} />
                </Li>
                <Li>
                  Here are the files I made in Git repo (Only for Customer , will do it for Order and Item as well later on)
                  <IMG img_name={microservice_25}></IMG>
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-xl font-semibold"> 3️⃣ Move CUSTOMER's properties to GIT</p>
          <ULdisc>
            <Li>
              Copy/paste the <strong>application-h2.properties</strong> to <SpanYellow>CUSTOMER-SERVCE-h2.properties</SpanYellow>
            </Li>
            <Li>
              Copy/paste the <strong>application-postgres.properties</strong> to <SpanYellow>CUSTOMER-SERVCE-postgres.properties</SpanYellow>
            </Li>
            <Li>
              Regarding <strong>application.properties</strong> :
              <ULdisc>
                <Li>Must Leave these 3 properties in the file</Li>
                <Li>Why? So Spring boot will know the application name , the Config server , active profile</Li>
                <Li>
                  This is how <SpanYellow>application.properties</SpanYellow> of Customer should be:
                  <ApplicationPropertiesHighlight propertiesCode={_2_} />
                </Li>
                <Li>
                  Othe properties , just Cut/paste to config server to <SpanYellow>CUSTOMER-SERVCE.properties</SpanYellow>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              This is what is looks now
              <IMG img_name={microservice_26}></IMG>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-xl font-semibold"> 4️⃣ How it works internally</p>
          When <SpanYellow>customer-service</SpanYellow> runs with dev <SpanYellow>h2</SpanYellow>, then <SpanYellow>Config Server</SpanYellow> loads:
          <ULdisc>
            <Li>1️⃣ CUSTOMER-SERVICE.properties</Li>
            <Li>2️⃣ CUSTOMER-SERVICE-h2.properties</Li>
          </ULdisc>
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

const _2_ = `spring.application.name=CUSTOMER-SERVICE
# Cloud-Config-Server
spring.config.import=optional:configserver:http://localhost:8888
spring.profiles.active=h2`;

const _3_ = `{spring.application.name}-{profile}.properties`;

const _4_ = `CUSTOMER-SERVICE.properties // application.properties
CUSTOMER-SERVICE-h2.properties // application-h2.properties
CUSTOMER-SERVICE-postgres.properties // application-postgres.properties`;
