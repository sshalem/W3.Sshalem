import { ContentAnchor, CopyCode } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const PostgresqlOsiv = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <div className="my-4">
        Regarding this property , see the project of LAZY Loading, (I explain it there). <br />I get a warning in spring console since by default its
        set to
        <Span>true</Span> . <br /> To disable the warning, I set to <Span>false</Span>
      </div>
      <CopyCode code={osiv}>
        <ApplicationPropertiesHighlight propertiesCode={osiv} />
      </CopyCode>
    </article>
  );
};

export default PostgresqlOsiv;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
