import { MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight } from "../../../Highlight";

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

# Enabling H2 Console
spring.h2.console.enabled=true

# Custom H2 Console URL from /h2-console to /h2
spring.h2.console.path=/h2

# console color enabled
spring.output.ansi.enabled=always`;
