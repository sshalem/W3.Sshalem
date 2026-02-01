/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O6_CreateDedicatedFolder = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            create a dedicated folder under <SpanYellow>/opt</SpanYellow> directory
            <ULdisc>
              <Li>
                <SpanYellow>/opt</SpanYellow> is a standard Linux directory for <strong>optional / third-party software</strong>
              </Li>
              <Li>
                <SpanYellow>/opt</SpanYellow> is commonly used for deployed apps
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
