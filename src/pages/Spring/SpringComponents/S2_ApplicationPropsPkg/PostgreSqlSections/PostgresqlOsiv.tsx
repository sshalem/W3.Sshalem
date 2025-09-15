import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";

const PostgresqlOsiv = ({ anchor }: { anchor: string }) => {
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

export default PostgresqlOsiv;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
