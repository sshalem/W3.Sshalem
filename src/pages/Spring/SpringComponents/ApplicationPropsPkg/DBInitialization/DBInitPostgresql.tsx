import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import db_init_8 from "../../../../../assets/db_init_8.jpg";

const DBInitPostgresql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        here is how we config Postgres with <SpanBlue>data.sql</SpanBlue>
        <div>
          <ul className="my-4 ml-16 list-decimal">
            <li className="my-1">
              <div>folder/files layout</div>
              <IMG img_name={db_init_8}></IMG>
            </li>
            <li className="my-1">
              <div>
                create <SpanBlue>application-Postgres.properties</SpanBlue>file
              </div>
              <DivDoubleBorder>application-Postgres.properties</DivDoubleBorder>
              <ApplicationPropertiesHighlight propertiesCode={applicationPropsPostGresqlProfileCode}></ApplicationPropertiesHighlight>
            </li>
            <li className="my-1">
              <div>
                config main <SpanBlue>application.properties</SpanBlue>
              </div>
              <DivDoubleBorder>main application.properties</DivDoubleBorder>
              <ApplicationPropertiesHighlight propertiesCode={applicationPropsMainCode}></ApplicationPropertiesHighlight>
            </li>
            <li className="my-1">
              <div>
                <SpanBlue>data-PostGreSql.sql</SpanBlue>
              </div>
              <DivDoubleBorder>data-PostGreSql.sql</DivDoubleBorder>
              <ApplicationPropertiesHighlight propertiesCode={dataPostGreSql}></ApplicationPropertiesHighlight>
            </li>
          </ul>
        </div>
      </div>
    </MainChildArea>
  );
};

export default DBInitPostgresql;

const applicationPropsMainCode = `# Postgres is the name of the profile : application-Postgres.properties
spring.profiles.active=Postgres

# console color enabled
spring.output.ansi.enabled=always

spring.jpa.open-in-view=false

server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true
`;

const applicationPropsPostGresqlProfileCode = `# ===============================
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

# ==========================================
#  we must add this config as well for 
#  schema.sql and data.sql could work
# ==========================================
spring.sql.init.mode=always
spring.jpa.defer-datasource-initialization=true
spring.sql.init.platform=PostGreSql
spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-PostGreSql.sql

# Allows Hibernate to generate SQL optimized for a particular DBMS
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
`;

const dataPostGreSql = `insert into role(role_id, role) values (1, 'ADMIN');
insert into role(role_id, role) values (2, 'COMPANY');
insert into role(role_id, role) values (3, 'CUSTOMER');`;
