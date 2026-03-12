import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanRed, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";
import microservice_11 from "../../../../../assets/microservice_11.jpg";

const O5_EurekaClient2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl font-semibold">⭐ 1. Config the Services (Customer & Order) as Eureka Clients</p>
          <p className="my-8">at this point , I have 2 services</p>
          <ULdisc>
            <Li>customer-service</Li>
            <Li>order-service</Li>
          </ULdisc>
          Let's config them, as <SpanYellow>Eureka Clients</SpanYellow>
          <ULdisc>
            <Li>
              In spring initializer , This is the dependency I need to add to any of the client services:
              <IMG img_name={microservice_11}></IMG>
            </Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-2xl font-semibold">⭐ 2. verify POM file</p>
          <p className="my-8">In POM file 3 things added for this dependency</p>
          <ULDecimal>
            <Li>
              the dpendency for the <SpanYellow>Eureka Client</SpanYellow>
            </Li>
            <Li>
              <SpanRed>Very Important</SpanRed> ,change the property of Spring cloud version, to be compatible with Spring boot 2.7.18
              <ULdisc>
                <Li>
                  This property must be same in all services, including <SpanYellow>Eureka Server</SpanYellow>
                </Li>
                <Li>This property , will be use in all microservices other services I create as clients</Li>
                <Li>
                  <SpanYellow>{"<spring-cloud.version>2021.0.8</spring-cloud.version>"}</SpanYellow>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              In <SpanYellow>dependencyManagement</SpanYellow> assign the spring cloud version property (See XML below)
            </Li>
          </ULDecimal>
          <ULdisc>
            <Li>
              Copy and paste this to the <SpanYellow>{"<properties>"}</SpanYellow> tag
              <XmlHighlight xmlCode={_1_} />
            </Li>
            <Li>
              Copy and paste the Dependeny , Inside the <SpanYellow>{"<dependencies>"}</SpanYellow> tag
              <XmlHighlight xmlCode={_2_} />
            </Li>
            <Li>
              Copy and paste the <SpanYellow>{"<dependencyManagement>"}</SpanYellow> , after <SpanYellow>{"<dependencies>"}</SpanYellow> tag is closed
              <XmlHighlight xmlCode={_3_} />
            </Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-2xl font-semibold">
            ⭐ 3. Does annotate client with <SpanYellow>@EnableEurekaClient</SpanYellow>is required?
          </p>

          <ULdisc>
            <Li>
              ❌ We do NOT need to add <SpanYellow>@EnableEurekaClient</SpanYellow>
            </Li>
            <Li>Just having the dependency is enough.</Li>
            <Li>Since newer versions of Spring Cloud, the annotation is optional because of auto-configuration.</Li>
            <Li>Because of the POM dependency , Spring Boot automatically registers the service with Eureka.</Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="my-8 text-2xl font-semibold">
            ⭐ 4. config <SpanYellow>application.properties</SpanYellow> on all services
          </p>
          Recommended configuration (clean and standard)
          <ULdisc>
            <Li>example from customer-service</Li>
            <Li>
              Must, give <SpanYellow>spring.application.name</SpanYellow>
            </Li>
            <Li>
              Notice, even if I write the sercive name in Upper case letters , thats the common way
              <SpanYellow>CUSTOMER-SERVICE</SpanYellow>
            </Li>
            <Li>because Eureka automatically converts it to uppercase.</Li>
          </ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_4_} />
          <ULdisc>
            What actually happens when the service starts{" "}
            <ULDecimal>
              <Li>
                It reads
                <ApplicationPropertiesHighlight propertiesCode={_5_} />
              </Li>
              <Li>
                It sends a registration request to Eureka ,example:
                <ApplicationPropertiesHighlight propertiesCode={_6_} />
              </Li>
              <Li>
                Eureka stores it in the service registry.
                <ApplicationPropertiesHighlight propertiesCode={_7_} />
              </Li>
            </ULDecimal>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_EurekaClient2718;

const _1_ = `       <properties>
            <java.version>17</java.version>
            <spring-cloud.version>2021.0.8</spring-cloud.version>
        </properties>`;

const _2_ = `        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>`;

const _3_ = `     <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>\${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>`;

const _4_ = `spring.application.name=CUSTOMER-SERVICE
eureka.client.service-url.defaultZone=http://localhost:8761/eureka`;

const _5_ = `eureka.client.service-url.defaultZone=http://localhost:8761/eureka`;

const _6_ = `CUSTOMER-SERVICE -> http://localhost:8761/eureka`;

const _7_ = `CUSTOMER-SERVICE  http://localhost:8081`;
