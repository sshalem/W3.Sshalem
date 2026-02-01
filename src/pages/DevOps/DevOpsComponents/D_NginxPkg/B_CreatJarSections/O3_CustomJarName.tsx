/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O3_CustomJarName = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        To Build JAR file with a custom App name
        <ULdisc>
          <Li>
            Open <SpanYellow>POM.xml</SpanYellow>
          </Li>
          <Li>
            In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanYellow>{"<finalName>custom-app-name</finalName> "}</SpanYellow>
          </Li>

          <XmlHighlight xmlCode={custom_app_name} />
          <Li>
            Open Terminal , Run command :
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
          <Li>
            this results file name in this format <SpanYellow>custom-app-name.jar</SpanYellow>
          </Li>
        </ULdisc>
        {/* <article className="my-8">
          <div className="my-8 text-xl font-semibold">✅ Option 3 : Custom name using terminal (works only if you wire it)</div>
          <ULdisc>
            <Li>
              Open <SpanYellow>POM.xml</SpanYellow>
            </Li>
            <Li>
              In the tag of <strong>{"<properties>"}</strong> , add the following tag{" "}
              <SpanYellow>{"<jar.customAppName>my-custom-app</jar.customAppName>"}</SpanYellow>
            </Li>
            <Li>
              In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanYellow>{"<finalName>${jar.customAppName}</finalName>"}</SpanYellow>
              <XmlHighlight xmlCode={wired_custom_name} />
            </Li>
            <Li>
              We run it with following command jar file will be <SpanYellow>shalem.jar</SpanYellow>
              <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package_custom_name} />
            </Li>
            <Li>
              But, If we run without modifing in CLI , It will give the default name of <SpanYellow>my-custom-app.jar</SpanYellow>
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
              in the <SpanYellow>Goals</SpanYellow> field , type <SpanYellow>clean package</SpanYellow>
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
