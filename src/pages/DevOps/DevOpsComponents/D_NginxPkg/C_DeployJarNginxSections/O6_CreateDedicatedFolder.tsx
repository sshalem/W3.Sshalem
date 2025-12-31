/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O6_CreateDedicatedFolder = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            create a dedicated folder under <SpanGrey>/opt</SpanGrey> directory
            <ULdisc>
              <Li>
                <SpanGrey>/opt</SpanGrey> is a standard Linux directory for <strong>optional / third-party software</strong>
              </Li>
              <Li>
                <SpanGrey>/opt</SpanGrey> is commonly used for deployed apps
              </Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={mkdir_folder} />
            <Li>Example of keeping Spring Boot JARs organized:</Li>
            <ApplicationPropertiesHighlight propertiesCode={jar_organized} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O6_CreateDedicatedFolder;

const mkdir_folder = `mkdir -p /opt/springboot`;

const jar_organized = `/opt/springboot/audit.jar
/opt/springboot/logs/
/opt/springboot/config/`;
