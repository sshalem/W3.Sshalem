import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, SpanRed, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";
import microservice_10 from "../../../../../assets/microservice_10.jpg";

const O4_EurekaServer2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl font-semibold">⭐ 1. Create Eureka Server App</p>
          <ULdisc>
            <Li>
              In Spring Initializer , create new Spring boot app name it <SpanYellow>Eureka-server</SpanYellow>
            </Li>
            <Li>
              Note , It doesn't support Spring boot 2.7.18 , thus create a project , download it, before opeing it , change in POM to{" "}
              <SpanYellow>version 2.7.18</SpanYellow>
            </Li>
            <Li>
              I use <strong>POM</strong> with <SpanYellow>{"<java.version>17</java.version>"}</SpanYellow>
            </Li>
            <Li>
              Add Dependency of <SpanYellow>Eureka Server</SpanYellow>
              <IMG img_name={microservice_10}></IMG>
            </Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <p className="text-2xl font-semibold">⭐ 2. verify POM file</p>
          <p className="my-8">In POM file 3 things added for this dependency</p>
          <ULDecimal>
            <Li>
              the dpendency for the <SpanYellow>Eureka server</SpanYellow>
            </Li>
            <Li>
              <SpanRed>Very Important</SpanRed> ,change the property of Spring cloud version, to be compatible with Spring boot 2.7.18
              <ULdisc>
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
          <p className="my-8 text-2xl font-semibold">
            ⭐ 3. config <SpanYellow>application.properties</SpanYellow>
          </p>
          <ULdisc>
            <Li>copy /paste this code below</Li>
          </ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_5_} />
        </article>

        <hr />

        <article className="my-8">
          <p className="text-2xl font-semibold">⭐ 4. Add annotation @EnableEurekaServer</p>
          <p className="my-8">In order to make the app , as Eureka Server</p>
          <ULdisc>
            <Li>Open the class where the annotation of</Li>
            <Li>
              Add annotation of <SpanYellow>@EnableEurekaServer</SpanYellow>
            </Li>
            <JavaHighlight javaCode={_4_} />
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_EurekaServer2718;

const _1_ = `       <properties>
            <java.version>17</java.version>
            <spring-cloud.version>2021.0.8</spring-cloud.version>
        </properties>`;

const _2_ = `        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
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

const _4_ = `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);
	}
}`;

const _5_ = `server.port=8761

spring.application.name=EUREKA-SERVER

# Prevent self-registration
eureka.client.register-with-eureka=false

# Prevent registry fetching
eureka.client.fetch-registry=false`;
