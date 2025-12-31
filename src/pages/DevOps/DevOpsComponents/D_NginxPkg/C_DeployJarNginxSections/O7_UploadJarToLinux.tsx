/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O7_UploadJarToLinux = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-2xl font-semibold">Upload the JAR to Linode</p>
        <ULdisc>
          <Li>
            with <SpanGrey>FileZilla</SpanGrey>
          </Li>
          <Li>
            with <SpanGrey>scp</SpanGrey> command using terminal
          </Li>
        </ULdisc>
        <ULdisc>
          <Li>
            Open Terminal, under the project go to the <SpanGrey>target</SpanGrey> directory , where the JAR file created in previous step
          </Li>
          <Li>
            Command below is the format what need to be in the , which copies the JAR file to a dedicated folder (on Linode Linux server)
            <ULdisc>
              <Li>
                {"my-app-name"} - <SpanGrey>audit</SpanGrey>
              </Li>
              <Li>
                LINODE_SERVER_IP - <SpanGrey>139.162.148.144</SpanGrey>
              </Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={scp_jar} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O7_UploadJarToLinux;

const scp_jar = `scp target/{my-app-name}.jar root@{LINODE_SERVER_IP}:/opt/springboot/`;
