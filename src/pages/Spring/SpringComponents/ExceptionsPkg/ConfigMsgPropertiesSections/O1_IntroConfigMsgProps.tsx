import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";

const O1_IntroConfigMsgProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        In this Project, I am using the same Code from RuntimeException project (Service , Exception, Controller). <br />I only add the following
        configuration in the <SpanBlue>application.properties</SpanBlue> file
      </section>
      <section>
        <ApplicationPropertiesHighlight propertiesCode={application_properties}></ApplicationPropertiesHighlight>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroConfigMsgProps;

const application_properties = `# ==========================================
# format the returned error format 
# when exception is thrown back to client
# ==========================================

# Don't use this , since it makes problems when using servelts :
# the server.error.path=/

server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true`;
