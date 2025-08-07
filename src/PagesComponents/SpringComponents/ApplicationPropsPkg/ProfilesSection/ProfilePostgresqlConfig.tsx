import { IMG, MainChildArea } from "../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../Highlight";
import profile_postgres from "../../../../assets/profile_postgres.jpg";

const ProfilePostgresqlConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <IMG img_name={profile_postgres}></IMG>
      <div className="my-5">
        <span className="rounded-md bg-blue-500 p-1 font-semibold text-white">application.properties</span>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={defaultProps} />
      <div className="my-5">
        <span className="rounded-md bg-emerald-500 p-1 font-semibold text-white">application-h2.properties</span>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={configPostgresqlProps} />
    </MainChildArea>
  );
};

export default ProfilePostgresqlConfig;

const defaultProps = `#spring.profiles.active=h2
#spring.profiles.active=mysql
spring.profiles.active=postgres

# console color enabled
spring.output.ansi.enabled=always

#logging.level.org.springframework=DEBUG
logging.level.com.jobify=DEBUG
#logging.level.org.springframework.web=trace
#logging.level.org.springframework.core=trace
#logging.level.org.springframework.security.web=trace
#logging.level.org.springframework.security.web.access=trace
 
#logging.level.org.springframework.security=trace
#logging.level.org.springframework.security.authentication=trace
#logging.level.org.springframework.security.authentication.dao=trace

# To Trace filters in Security Chain
#logging.level.org.springframework.security.web.FilterChainProxy=TRACE

server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true`;

const configPostgresqlProps = `
# ============================================
# 	Start PostgreSql server stand alone
# 	on windows (Work Laptop)
# ============================================
# Since I modified the name of the folder use the following command:
# Open CMD , Go to Directory : cd \Localdata\DB\postgresql\pgsql\bin
# (Not power shell terminal)  and type the command: 
#    pg_ctl -D ^"C^:^\Localdata^\DB^\postgresql^\pgsql^_data^" -l logfile start
#

# ===============================
# 		DATA SOURCE
# =============================== 
spring.datasource.url=jdbc:postgresql://localhost/e-commerce
spring.datasource.username=postgres
spring.datasource.password=postgres


###############################
# Spring will create a schema
###############################
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.generate-ddl=true
#spring.jpa.show-sql=true
#spring.jpa.properties.hibernate.generate_statistics=true
#spring.jpa.properties.hibernate.format_sql=true

spring.jpa.open-in-view=false

# ==========================================
#  we must add this config as well for 
#  schema.sql and data.sql could work
# ==========================================

# this is in order to use data.sql for postgresql connection 
# by setting the platform as "shPostgres"
# then modifying "data.sql" to "data-shPostgres.sql"
spring.sql.init.platform=PostGreSql
spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-PostGreSql.sql
spring.sql.init.mode=always
spring.jpa.defer-datasource-initialization=true

# Allows Hibernate to generate SQL optimized for a particular DBMS
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
`;
