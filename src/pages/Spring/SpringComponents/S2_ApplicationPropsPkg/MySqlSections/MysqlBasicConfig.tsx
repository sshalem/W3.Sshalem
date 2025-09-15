import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";
import { MainChildArea } from "../../../../../components";

const MysqlBasicConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ApplicationPropertiesHighlight propertiesCode={mysql_basic} />
    </MainChildArea>
  );
};

export default MysqlBasicConfig;

const mysql_basic = `# ===============================
# 		DATA SOURCE
# =============================== 
spring.datasource.url=jdbc:mysql://localhost:3306/{the_name_of_DB_Schema_in_MySql_DB}?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

# ===============================
# 	 	JPA / HIBERNATE
# ===============================
 
# these are the same
# spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialec

# Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
# Regarding this property
# see the project of LAZY Loading, I explain it there
spring.jpa.open-in-view=false

# console color enabled
spring.output.ansi.enabled=always`;
