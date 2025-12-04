/*
/spring/application-properties/postgresql#PostgresqlDetailedConfig
Postgresql Detailed Config --> (SPRING)(ApplicationProperties)(Postgresql)
*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";

const PostgresqlDetailedConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-4">
        Regarding this property , see the project of LAZY Loading, (I explain it there). <br />I get a warning in spring console since by default its
        set to
        <SpanBlue>true</SpanBlue> . <br /> To disable the warning, I set to <SpanBlue>false</SpanBlue>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={postgresConfig} />
    </MainChildArea>
  );
};

export default PostgresqlDetailedConfig;

const postgresConfig = `# ===============================
# = DATA SOURCE
# ===============================

spring.datasource.url=jdbc:postgresql://localhost/{the name of Schema in DB}
spring.datasource.username=postgres
spring.datasource.password=admin


# ===============================
# = JPA / HIBERNATE
# ===============================

# Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
spring.jpa.properties.hibernate.generate_statistics=true

# console color enabled
spring.output.ansi.enabled=always

# disable OSIV
spring.jpa.open-in-view=false

# ---- JPA logging ----
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# ---- Hibernate logging ----
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

# Allows Hibernate to generate SQL optimized for a particular DBMS
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true`;
