import { MainChildArea } from "../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../components/Highlight";

const MySqlComprehansivePropertiesConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ApplicationPropertiesHighlight propertiesCode={mysql_comprehansive_config} />
    </MainChildArea>
  );
};

export default MySqlComprehansivePropertiesConfig;

const mysql_comprehansive_config = `spring.datasource.url=jdbc:mysql://localhost:3306/{the_name_of_Schema_in_DB}?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

# JPA / HIBERNATE 
# Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true

# console color enabled
spring.output.ansi.enabled=always

### spring.jpa.show-sql=true & 
### logging.level.org.hibernate.SQL=debug 
### Do the same , but with difference

spring.jpa.show-sql=true
# show the the logging w/o the the time stamp and the package name 
# Hibernate: drop table if exists customer

logging.level.org.hibernate.SQL=debug
# shows the logging as below: with the time satamp and the package name 
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
