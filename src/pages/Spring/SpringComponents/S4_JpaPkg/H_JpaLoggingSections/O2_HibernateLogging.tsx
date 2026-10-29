/*
/spring/jpa/logging-jpa-hibernate#2.Hibernatelogging
Hibernate logging --> (SPRING)(JPA)(logging-jpa-hibernate)
*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O2_HibernateLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 Hibernate logging</p>

        <Highlight_ApplicationProperties code={hibernate_logging}></Highlight_ApplicationProperties>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O2_HibernateLogging;

const hibernate_logging = `# ---- Hibernate logging ----
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE`;
