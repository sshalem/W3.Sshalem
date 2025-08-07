import { IMG, MainChildArea } from "../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../Highlight";
import profile_h2 from "../../../../assets/profile_h2.jpg";

const ProfileH2Config = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <IMG img_name={profile_h2}></IMG>
      <div className="my-5">
        <span className="rounded-md bg-blue-500 p-1 font-semibold text-white">application.properties</span>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={defaultProps} />
      <div className="my-5">
        <span className="rounded-md bg-emerald-500 p-1 font-semibold text-white">application-h2.properties</span>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={configH2Props} />
    </MainChildArea>
  );
};

export default ProfileH2Config;

const defaultProps = `spring.profiles.active=h2
#spring.profiles.active=mysql
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

const configH2Props = `spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Enabling H2 Console
spring.h2.console.enabled=true

# Custom H2 Console URL from /h2-console to /h2
spring.h2.console.path=/h2

#Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
#spring.jpa.show-sql=true
#spring.jpa.properties.hibernate.generate_statistics=true
#spring.jpa.properties.hibernate.format_sql=true

spring.jpa.open-in-view=false

###########################################
# to initialize using data.sql file    ##
###########################################
spring.sql.init.mode=always
#spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-H2.sql, classpath:DB_initialization_scripts/data-H2extra.sql
spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-H2.sql
spring.sql.init.platform=H2

spring.jpa.defer-datasource-initialization=true
`;
