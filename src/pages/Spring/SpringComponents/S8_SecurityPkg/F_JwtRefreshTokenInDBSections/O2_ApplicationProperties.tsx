/*


*/
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
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot v3.5.6 - resources/application.Properties"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6/src/main/resources"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

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
                description="08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6/src/main/resources"
                href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6/src/main/resources"
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
          </ULdisc>
        </article>
        <IMG img_name={security_10}></IMG>
        Code of main <SpanGrey>application.properties</SpanGrey> where I define which environment (DB) ichoose to work with
        <ApplicationPropertiesHighlight propertiesCode={properties_mains}></ApplicationPropertiesHighlight>
      </section>
    </MainChildArea>
  );
};

export default O2_ApplicationProperties;

const properties_mains = `server.port=8080
#spring.profiles.active=h2
#spring.profiles.active=mysql
spring.profiles.active=postgres

#dev-tools (Need to add dependency)
spring.devtools.restart.enabled=true

spring.output.ansi.enabled=always

jwt.signing.key=weferuogp8734thq3ncf3948u9\\
				p3cnj4fx0-3m8uf3t[83ucnygh\\
				fenhadf8ayh9ep9r8fghbsakfo\\
				jinfcoer83ucnyghfenhadf8ay\\
				h9ep9r8fghbsakfojinfcoer48\\
				u9p3cnj4fx0-3m8uf3t[83ucny\\
				ghfenhadf8ayh9ep9r8vfergec
`;
