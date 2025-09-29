import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O1_JpaLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 JPA logging</p>

        <ApplicationPropertiesHighlight propertiesCode={jpa_logging}></ApplicationPropertiesHighlight>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O1_JpaLogging;

const jpa_logging = `# ---- JPA logging ----
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`;
