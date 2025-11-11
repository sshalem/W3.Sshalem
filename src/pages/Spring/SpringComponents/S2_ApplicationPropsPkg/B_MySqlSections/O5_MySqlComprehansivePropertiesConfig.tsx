/*
/spring/application-properties/mysql#5.MysqlComprehansiveProperties
Mysql Comprehansive Properties --> (SPRING)(ApplicationProperties)(MySql)
*/
import { useLocation } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";
import { useEffect } from "react";

const O5_MySqlComprehansivePropertiesConfig = ({ anchor }: { anchor: string }) => {
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
      <ApplicationPropertiesHighlight propertiesCode={mysql_comprehansive_config} />
    </MainChildArea>
  );
};

export default O5_MySqlComprehansivePropertiesConfig;

const mysql_comprehansive_config = `spring.datasource.url=jdbc:mysql://localhost:3306/{the_name_of_Schema_in_DB}?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

# JPA / HIBERNATE 
# Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true

# console color enabled
spring.output.ansi.enabled=always

### spring.jpa.show-sql=true AND logging.level.org.hibernate.SQL=debug , Do the same , 
### but with difference?

# ---- JPA logging ----
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
# show the the logging w/o the the time stamp and the package name 
# Hibernate: drop table if exists customer

# ---- Hibernate logging ----
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
# shows the logging as below: with the time stamp and the package name 
# 2021-04-21 12:02:27.553 DEBUG 496 --- [  restartedMain] org.hibernate.SQL   : drop table if exists customer

# shows the statistics regarding the SQL queries
spring.jpa.properties.hibernate.generate_statistics=true

# Regarding this property
# see the project of LAZY Loading, I explain it there
spring.jpa.open-in-view=false
spring.jpa.properties.hibernate.format_sql=true

# I don't remember what this is for (need to check)
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
