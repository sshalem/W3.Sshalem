import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const H2DatabseBasicConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ApplicationPropertiesHighlight propertiesCode={h2} />
    </MainChildArea>
  );
};

export default H2DatabseBasicConfig;

const h2 = `spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
# same as 
# spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect


# ---- JPA logging ----
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# ---- Hibernate logging ----
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE


# Enabling H2 Console
spring.h2.console.enabled=true

# Custom H2 Console URL from /h2-console to /h2
spring.h2.console.path=/h2

# console color enabled
spring.output.ansi.enabled=always`;
