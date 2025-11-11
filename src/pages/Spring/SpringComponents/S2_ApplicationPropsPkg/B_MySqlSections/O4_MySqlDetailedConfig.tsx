/*
/spring/application-properties/mysql#4.MysqlDetailed
Mysql Detailed --> (SPRING)(ApplicationProperties)(MySql)
*/
import { useLocation } from "react-router-dom";
import { Answer, MainChildArea, Question } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";
import { useEffect } from "react";

const O4_MySqlDetailedConfig = ({ anchor }: { anchor: string }) => {
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
      <Question>
        What is difference between <SpanBlue> spring.jpa.show-sql=true</SpanBlue> to <SpanBlue>logging.level.org.hibernate.SQL=debug</SpanBlue> ?
      </Question>

      <Answer>
        <p className="my-2">
          1. <SpanBlue>spring.jpa.show-sql=true</SpanBlue> - show the the logging w/o the the time stamp and the package name
        </p>
        <p className="my-2">
          2. <SpanBlue> logging.level.org.hibernate.SQL=debug</SpanBlue> - shows the logging with the time stamp and the package name
        </p>
      </Answer>

      <div>Better to use the following :</div>
      <ApplicationPropertiesHighlight propertiesCode={propertiesCode} />
      <div className="my-8">
        here below , I give example of <SpanBlue>application.properties</SpanBlue> with explaination:
      </div>
      <ApplicationPropertiesHighlight propertiesCode={mysql_detailed_config} />
    </MainChildArea>
  );
};

export default O4_MySqlDetailedConfig;

const propertiesCode = `logging.level.org.hibernate.SQL=DEBUG
# Once I insert Data to DB , it will show the meta data inserted
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
spring.jpa.properties.hibernate.format_sql=true`;

const mysql_detailed_config = `# ===============================
# 		DATA SOURCE
# =============================== 
spring.datasource.url=jdbc:mysql://localhost:3306/{the_name_of_Schema_in_DB}?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root
 
# ===============================
# 	 	JPA / HIBERNATE
# ===============================
 
#Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true

# console color enabled
spring.output.ansi.enabled=always

# ---- JPA logging ----
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# ---- Hibernate logging ----
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

spring.jpa.properties.hibernate.generate_statistics=true

# Disable OSIV
spring.jpa.open-in-view=false

# MySql Dialect to use with MySql 8 on JDK8 is MySQL5Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect

# MySql Dialect to use with MySql 8 on JDK11 is MySQL8Dialect
# spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect

spring.jpa.hibernate.naming-strategy = org.hibernate.cfg.ImprovedNamingStrategy

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true

# =================================================================================
# to Initialize DB by using a file of "data.sql" 
# need to set the following features
# =================================================================================
spring.datasource.platform=mysql
spring.datasource.initialization-mode=always


# ==========================================
# format the returned error format 
# when exception is thrown back to client
# ==========================================

# Better not to use this , since it gave issue's
# server.error.path=true
server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true`;
