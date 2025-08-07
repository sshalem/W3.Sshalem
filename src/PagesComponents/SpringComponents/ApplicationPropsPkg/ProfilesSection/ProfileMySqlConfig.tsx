import { IMG, MainChildArea } from "../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../components/Highlight";
import profile_mysql from "../../../../assets/profile_mysql.jpg";

const ProfileMySqlConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <IMG img_name={profile_mysql}></IMG>
      <div className="my-5">
        <span className="rounded-md bg-blue-500 p-1 font-semibold text-white">application.properties</span>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={defaultProps} />
      <div className="my-5">
        <span className="rounded-md bg-emerald-500 p-1 font-semibold text-white">application-h2.properties</span>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={configMysqlProps} />
    </MainChildArea>
  );
};

export default ProfileMySqlConfig;

const defaultProps = `#spring.profiles.active=h2
spring.profiles.active=mysql
#spring.profiles.active=postgres

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

const configMysqlProps = `# ===============================
# 		DATA SOURCE
# =============================== 
spring.datasource.url=jdbc:mysql://localhost:3306/e-commerce?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

# ===============================
# 	 	JPA / HIBERNATE
# ===============================
 
#Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
#spring.jpa.show-sql=true
#spring.jpa.properties.hibernate.generate_statistics=true
spring.jpa.open-in-view=false
#spring.jpa.properties.hibernate.format_sql=true

# When using java version JDK11 use with mysql dialect
#spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQLDialect

# ==========================================
#  we must add this config as well for 
#  schema.sql and data.sql could work
# ==========================================

# this is in order to use data.sql for mysql connection 
# by setting the platform as "shMysql"
# then modifying "data.sql" to "data-shMysql.sql"
spring.sql.init.platform=Mysql

# to initialize using "data.sql" file set the 2 following parameters
spring.sql.init.mode=always
spring.jpa.defer-datasource-initialization=true

spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-MySql.sql
`;
