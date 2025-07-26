import { Answer, ContentAnchor, Question } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const MySqlDetailedConfig = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />

      <Question>
        What is difference between <Span> spring.jpa.show-sql=true</Span> to <Span>logging.level.org.hibernate.SQL=debug</Span> ?
      </Question>

      <Answer>
        <p className="my-2">
          1. <Span>spring.jpa.show-sql=true</Span> - show the the logging w/o the the time stamp and the package name
        </p>
        <p className="my-2">
          2. <Span> logging.level.org.hibernate.SQL=debug</Span> - shows the logging with the time stamp and the package name
        </p>
      </Answer>

      <div>Better to use the following :</div>
      <ApplicationPropertiesHighlight propertiesCode={propertiesCode} />

      <div className="my-8">
        here below , I give example of <Span>application.properties</Span> with explaination:
      </div>

      <ApplicationPropertiesHighlight propertiesCode={mysql_detailed_config} />
    </article>
  );
};

export default MySqlDetailedConfig;

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

# spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
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
