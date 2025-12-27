/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey, XmlHighlight } from "../../../../../components/Highlight";

const O4_CustomJarViaTerminal = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="">Let's see How we can give a custom name via terminal (works only if you wire it) </div>
        <ULdisc>
          <Li>
            Open <SpanGrey>POM.xml</SpanGrey>
          </Li>
          <Li>We need to wire a property , So I could use it in the build tag</Li>
          <ULDecimal>
            <Li>
              In the tag of <strong>{"<properties>"}</strong> , add the following tag{" "}
              <SpanGrey>{"<jar.customAppName>my-custom-app</jar.customAppName>"}</SpanGrey>
            </Li>
            <Li>
              In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanGrey>{"<finalName>${jar.customAppName}</finalName>"}</SpanGrey>
              <XmlHighlight xmlCode={wired_custom_name} />
            </Li>
          </ULDecimal>
          <Li>
            For the example, I run it with following command , so jar file will be <SpanGrey>shalem.jar</SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package_custom_name} />
          </Li>
          <Li>
            Optionaly, If we run without modifing in CLI , It will give the default name of <SpanGrey>my-custom-app.jar</SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
        </ULdisc>

        {/* <article className="my-8">
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
export default O4_CustomJarViaTerminal;

const mvn_clean_package = `mvnw.cmd clean package`;

const mvn_clean_package_custom_name = `mvnw.cmd clean package -Djar.customAppName=shalem`;

const wired_custom_name = `<properties>
    <jar.customAppName>my-custom-app</jar.customAppName>
</properties>

<build>
    <finalName>\${jar.customAppName}</finalName>
</build>`;
