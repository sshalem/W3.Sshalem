import { MainChildArea } from "../../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../../Highlight";

const H2Osiv = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-4">
        Regarding this property , see the project of LAZY Loading, (I explain it there). <br />I get a warning in spring console since by default its
        set to
        <Span>true</Span> . <br /> To disable the warning, I set to <Span>false</Span>
      </div>

      <ApplicationPropertiesHighlight propertiesCode={osiv} />
    </MainChildArea>
  );
};

export default H2Osiv;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
