import { Anchor, IMG, MainChildArea } from "../../../../../components";
import security_10 from "../../../../../assets/security_10.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { ApplicationPropertiesHighlight, SpanBlue, SpanGreen } from "../../../../../components/Highlight";

const O2_ApplicationProperties = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Application Properties</p>
        As I usually do, Since I want to run the code in different environments, where I can have different <SpanGrey>DataBases</SpanGrey> <br />
        Hence, I config 3 different properties files for each DB connection
        <article>
          <ULdisc>
            <Li>
              <SpanGreen>application-h2.properties</SpanGreen>
            </Li>
            <Li>
              <SpanGreen>application-mysql.properties</SpanGreen>
            </Li>
            <Li>
              <SpanGreen>application-postgres.properties</SpanGreen>
            </Li>
            <Li>
              🔑 GitHub link ⇨{" "}
              <Anchor
                description="Spring-Security/03_JWT/O2-jwt-with-authorities/src/main/resources"
                href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-with-authorities/src/main/resources"
              ></Anchor>{" "}
            </Li>
          </ULdisc>
        </article>
        <p className="my-8 text-lg font-semibold">🧩 Data sql scripts</p>
        In addition, I created for each DB , a sql script to initialiy update DB after Spring boot app runs
        <article>
          <ULdisc>
            <Li>
              <SpanBlue>data-H2.sql</SpanBlue>
            </Li>
            <Li>
              <SpanBlue>data-MySql.sql</SpanBlue>
            </Li>
            <Li>
              <SpanBlue>data-PostGreSql.sql</SpanBlue>
            </Li>
            <Li>
              🔑 GitHub link ⇨{" "}
              <Anchor
                description="Spring-Security/03_JWT/O2-jwt-with-authorities/src/main/resources"
                href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-with-authorities/src/main/resources"
              ></Anchor>{" "}
            </Li>
          </ULdisc>
        </article>
        <IMG img_name={security_10}></IMG>
        Code of main <SpanGrey>application.properties</SpanGrey> where I define which environment (DB) ichoose to work with
        <ApplicationPropertiesHighlight propertiesCode={properties_main}></ApplicationPropertiesHighlight>
      </section>
      <hr />

      <article>
        {/* <ULdisc>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </ULdisc> */}
      </article>
    </MainChildArea>
  );
};

export default O2_ApplicationProperties;

const properties_main = `server.port=8080
spring.profiles.active=h2
#spring.profiles.active=mysql
#spring.profiles.active=postgres

spring.output.ansi.enabled=always


jwt.signing.key=weferuogp8734thq3ncf3948u9\\
				p3cnj4fx0-3m8uf3t[83ucnygh\\
				fenhadf8ayh9ep9r8fghbsakfo\\
				jinfcoer83ucnyghfenhadf8ay\\
				h9ep9r8fghbsakfojinfcoer48\\
				u9p3cnj4fx0-3m8uf3t[83ucny\\
				ghfenhadf8ayh9ep9r8vfergec

#logging.level.org.springframework.web=trace
#logging.level.org.springframework.core=trace
#logging.level.org.springframework.security.web=trace
#logging.level.org.springframework.security.web.access=trace
 
#logging.level.org.springframework.security=trace
#logging.level.org.springframework.security.authentication=trace
#logging.level.org.springframework.security.authentication.dao=trace

# To Trace filters in Security Chain
#logging.level.org.springframework.security.web.FilterChainProxy=TRACE

#spring.jpa.properties.hibernate.format_sql=true

server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true
`;
