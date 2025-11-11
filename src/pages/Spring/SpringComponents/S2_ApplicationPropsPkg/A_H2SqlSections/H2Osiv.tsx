/*
/spring/application-properties/h2#Osiv
OSIV --> (SPRING)(ApplicationProperties)(H2)
*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";

const H2Osiv = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-4">
        Regarding this property , see the project of LAZY Loading, (I explain it there). <br />I get a warning in spring console since by default its
        set to
        <SpanBlue>true</SpanBlue> . <br /> To disable the warning, I set to <SpanBlue>false</SpanBlue>
      </div>

      <ApplicationPropertiesHighlight propertiesCode={osiv} />
    </MainChildArea>
  );
};

export default H2Osiv;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
