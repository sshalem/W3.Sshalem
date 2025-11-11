/*
/spring/application-properties/mysql#3.MysqlBasic
Mysql Basic --> (SPRING)(ApplicationProperties)(MySql)
*/
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";
import { MainChildArea } from "../../../../../components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const O3_MysqlBasicConfig = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  // Checks if url with hash is present
  // [1] remove '#' from hash
  // [2] find the element with assigned hash ,
  // "id" is found inside MainChildArea
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      <ApplicationPropertiesHighlight propertiesCode={mysql_basic} />
    </MainChildArea>
  );
};

export default O3_MysqlBasicConfig;

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

# ---- JPA logging ----
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# ---- Hibernate logging ----
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

# console color enabled
spring.output.ansi.enabled=always`;
