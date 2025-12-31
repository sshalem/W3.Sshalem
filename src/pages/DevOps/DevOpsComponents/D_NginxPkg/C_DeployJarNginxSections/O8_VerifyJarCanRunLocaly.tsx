/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O8_VerifyJarCanRunLocaly = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-2xl font-semibold">Verify JAR can run localy w/o NGINX (To Test it's running w/n issue) </p>
        <ULdisc>
          <Li>Test that it works without NGINX</Li>
          <Li>In Linux terminal write the command below</Li>
          <Li>
            To stop it <SpanGrey>CTRL + c</SpanGrey>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_7_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O8_VerifyJarCanRunLocaly;

const _7_ = `java -jar audit.jar`;
