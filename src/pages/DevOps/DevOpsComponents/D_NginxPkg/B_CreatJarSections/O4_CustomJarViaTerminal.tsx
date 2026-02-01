/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O4_CustomJarViaTerminal = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="">Let's see How we can give a custom name via terminal (works only if you wire it) </div>
        <ULdisc>
          <Li>
            Open <SpanYellow>POM.xml</SpanYellow>
          </Li>
          <Li>We need to wire a property , So I could use it in the build tag</Li>
          <ULDecimal>
            <Li>
              In the tag of <strong>{"<properties>"}</strong> , add the following tag{" "}
              <SpanYellow>{"<jar.customAppName>my-custom-app</jar.customAppName>"}</SpanYellow>
            </Li>
            <Li>
              In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanYellow>{"<finalName>${jar.customAppName}</finalName>"}</SpanYellow>
              <XmlHighlight xmlCode={wired_custom_name} />
            </Li>
          </ULDecimal>
          <Li>
            For the example, I run it with following command , so jar file will be <SpanYellow>shalem.jar</SpanYellow>
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package_custom_name} />
          </Li>
          <Li>
            Optionaly, If we run without modifing in CLI , It will give the default name of <SpanYellow>my-custom-app.jar</SpanYellow>
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
        </ULdisc>

        {/* <article className="my-8">
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
export default O4_CustomJarViaTerminal;

const mvn_clean_package = `mvnw.cmd clean package`;

const mvn_clean_package_custom_name = `mvnw.cmd clean package -Djar.customAppName=shalem`;

const wired_custom_name = `<properties>
    <jar.customAppName>my-custom-app</jar.customAppName>
</properties>

<build>
    <finalName>\${jar.customAppName}</finalName>
</build>`;
