/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey, XmlHighlight } from "../../../../../components/Highlight";

const O3_CustomJarName = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        To Build JAR file with a custom App name
        <ULdisc>
          <Li>
            Open <SpanGrey>POM.xml</SpanGrey>
          </Li>
          <Li>
            In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanGrey>{"<finalName>custom-app-name</finalName> "}</SpanGrey>
          </Li>

          <XmlHighlight xmlCode={custom_app_name} />
          <Li>
            Open Terminal , Run command :
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
          <Li>
            this results file name in this format <SpanGrey>custom-app-name.jar</SpanGrey>
          </Li>
        </ULdisc>
        {/* <article className="my-8">
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
        </article> */}
      </section>
    </MainChildArea>
  );
};
export default O3_CustomJarName;

const mvn_clean_package = `mvnw.cmd clean package`;

const custom_app_name = `<build>
    <finalName>custom-app-name</finalName>

    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>`;
