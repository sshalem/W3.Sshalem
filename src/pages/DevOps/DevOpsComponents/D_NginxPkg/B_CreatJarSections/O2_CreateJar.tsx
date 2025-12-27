/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import maven_1 from "../../../../../assets/maven_1.jpg";
import Table_3ColCompareMaven from "../../../../../components/Tables/Table_3ColCompareMaven";
import { ApplicationPropertiesHighlight, SpanGrey, XmlHighlight } from "../../../../../components/Highlight";

const O2_CreateJar = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <div className="my-8 text-xl font-semibold">✅ Option 1 : Build the JAR</div>
          <ULdisc>
            <Li>Open Terminal with the path where project resides</Li>
            <Li>
              The <SpanGrey>mvnw.cmd</SpanGrey> script reads <SpanGrey>maven-wrapper.properties</SpanGrey>to know which Maven version the project
              expects.
            </Li>
            <Li>
              Since I don't install Maven globally on my computer , I use STS mvn wrapper <SpanGrey>mvnw.cmd</SpanGrey>
            </Li>
            <Li>
              Afetr running the command below , i will create file name in this format <strong>{"<artifactId>-<version>.jar"}</strong>{" "}
            </Li>
            <Li>
              Run command :
              <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
            </Li>
            <Li>
              Example : <SpanGrey>O1-Audit-Spring-JPA-0.0.1-SNAPSHOT.jar</SpanGrey> where:
              <ULdisc>
                <Li>
                  <SpanGrey>O1-Audit-Spring-JPA</SpanGrey> is <strong>{"<artifactId>"}</strong>{" "}
                </Li>
                <Li>
                  <SpanGrey>0.0.1-SNAPSHOT</SpanGrey> is <strong>{"<version>"}</strong>{" "}
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        <hr />

        <article className="my-8">
          <div className="my-8 text-xl font-semibold">✅ Option 2 : Build the JAR with custom app name</div>
          To Build JAR file with a custom App name (So I won't have the version )
          <ULdisc>
            <Li>
              Open <SpanGrey>POM.xml</SpanGrey>
            </Li>
            <Li>
              In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanGrey>{"<finalName>custom-app-name</finalName> "}</SpanGrey>
            </Li>
            <Li>
              this results file name in this format <SpanGrey>custom-app-name.jar</SpanGrey>
            </Li>
            <XmlHighlight xmlCode={custom_app_name} />
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <div className="my-8 text-xl font-semibold">✅ Option 3 : Custom name using terminal (works only if you wire it)</div>
          <ULdisc>
            <Li>
              Open <SpanGrey>POM.xml</SpanGrey>
            </Li>
            <Li>
              In the tag of <strong>{"<properties>"}</strong> , add the following tag{" "}
              <SpanGrey>{"<jar.customAppName>my-custom-app</jar.customAppName>"}</SpanGrey>
            </Li>
            <Li>
              In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanGrey>{"<finalName>${jar.customAppName}</finalName>"}</SpanGrey>
              <XmlHighlight xmlCode={wired_custom_name} />
            </Li>
            <Li>
              We run it with following command jar file will be <SpanGrey>shalem.jar</SpanGrey>
              <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package_custom_name} />
            </Li>
            <Li>
              But, If we run without modifing in CLI , It will give the default name of <SpanGrey>my-custom-app.jar</SpanGrey>
              <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
            </Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <div className="my-8 text-xl font-semibold">✅ Option 4 : STS GUI</div>
          Another way to run , right click on the project and choose :
          <ULdisc>
            <Li>Maven build</Li>
            <Li>
              in the <SpanGrey>Goals</SpanGrey> field , type <SpanGrey>clean package</SpanGrey>
            </Li>
          </ULdisc>
          <IMG img_name={maven_1}></IMG>
          <Table_3ColCompareMaven />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_CreateJar;

const mvn_clean_package = `mvnw.cmd clean package`;

const mvn_clean_package_custom_name = `mvnw.cmd clean package -Djar.customAppName=shalem`;

const custom_app_name = `<build>
    <finalName>custom-app-name</finalName>

    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>`;

const wired_custom_name = `<properties>
    <jar.customAppName>my-custom-app</jar.customAppName>
</properties>

<build>
    <finalName>\${jar.customAppName}</finalName>
</build>`;
