import { ApplicationPropertiesHighlight } from "../../../Highlight";
import { CopyCode, MainChildArea } from "../../../components";

const MysqlBasicConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <CopyCode code={mysql_basic}>
        <ApplicationPropertiesHighlight propertiesCode={mysql_basic} />
      </CopyCode>
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
 
# Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
# Regarding this property
# see the project of LAZY Loading, I explain it there
spring.jpa.open-in-view=false

# console color enabled
spring.output.ansi.enabled=always`;
