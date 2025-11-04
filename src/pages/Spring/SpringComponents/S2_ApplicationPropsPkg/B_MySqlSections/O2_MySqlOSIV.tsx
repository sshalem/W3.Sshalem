/*
/spring/application-properties/mysql#2.Osiv
Osiv --> (SPRING)(ApplicationProperties)(MySql)
*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";

const O2_MySqlOSIV = ({ anchor }: { anchor: string }) => {
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

export default O2_MySqlOSIV;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
