import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import db_init_6 from "../../../../../assets/db_init_6.jpg";

const O5_DBInitH2 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      here is how we config H2 with <SpanBlue>data.sql</SpanBlue>
      <div>
        <ul className="my-4 ml-16 list-decimal">
          <li className="my-1">
            <div>folder/files layout</div>
            <IMG img_name={db_init_6}></IMG>
          </li>
          <li className="my-1">
            <div>
              create <SpanBlue>application-H2.properties</SpanBlue>file
            </div>
            <DivDoubleBorder>application-H2.properties</DivDoubleBorder>
            <ApplicationPropertiesHighlight propertiesCode={applicationPropsH2ProfileCode}></ApplicationPropertiesHighlight>
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
              <SpanBlue>data-H2.sql</SpanBlue> code , inside folder <SpanBlue>DB_initialization_scripts</SpanBlue>
            </div>
            <DivDoubleBorder>data-H2.sql</DivDoubleBorder>
            <ApplicationPropertiesHighlight propertiesCode={dataH2}></ApplicationPropertiesHighlight>
          </li>
        </ul>
      </div>
    </MainChildArea>
  );
};

export default O5_DBInitH2;

const applicationPropsMainCode = `# H2 is the name of the profile : application-H2.properties
spring.profiles.active=H2

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

const applicationPropsH2ProfileCode = `spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Enabling H2 Console
spring.h2.console.enabled=true

# Custom H2 Console URL from /h2-console to /h2
spring.h2.console.path=/h2

# ===============================
# 	 	JPA / HIBERNATE
# ===============================
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
#spring.jpa.show-sql=true
#spring.jpa.properties.hibernate.generate_statistics=true
#spring.jpa.properties.hibernate.format_sql=true



###########################################
# to initialize using "data.sql" file    ##
###########################################
spring.sql.init.mode=always
spring.jpa.defer-datasource-initialization=true
spring.sql.init.platform=H2
spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-H2.sql

# spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-H2.sql, classpath:DB_initialization_scripts/data-H2extra.sql
`;

const dataH2 = `insert into role(role_id, role) values (1, 'ADMIN');
insert into role(role_id, role) values (2, 'COMPANY');
insert into role(role_id, role) values (3, 'CUSTOMER');`;
