import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, Span } from "../../../../../components/Highlight";
import db_init_7 from "../../../../../assets/db_init_7.jpg";

const DBInitMySql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        here is how we config MySql with <Span>data.sql</Span>
        <div>
          <ul className="my-4 ml-16 list-decimal">
            <li className="my-1">
              <div>folder/files layout</div>
              <IMG img_name={db_init_7}></IMG>
            </li>
            <li className="my-1">
              <div>
                create <Span>application-MySql.properties</Span>file
              </div>
              <DivDoubleBorder>application-MySql.properties</DivDoubleBorder>
              <ApplicationPropertiesHighlight propertiesCode={applicationPropsMySqlProfileCode}></ApplicationPropertiesHighlight>
            </li>

            <li className="my-1">
              <div>
                config main <Span>application.properties</Span>
              </div>
              <DivDoubleBorder>main application.properties</DivDoubleBorder>
              <ApplicationPropertiesHighlight propertiesCode={applicationPropsMainCode}></ApplicationPropertiesHighlight>
            </li>
            <li className="my-1">
              <div>
                <Span>data-MySql.sql</Span> code , inside folder <Span>DB_initialization_scripts</Span>
              </div>
              <DivDoubleBorder>data-MySql.sql</DivDoubleBorder>
              <ApplicationPropertiesHighlight propertiesCode={dataMySql}></ApplicationPropertiesHighlight>
            </li>
          </ul>
        </div>
      </div>
    </MainChildArea>
  );
};

export default DBInitMySql;

const applicationPropsMainCode = `# MySql is the name of the profile : application-MySql.properties
spring.profiles.active=MySql

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

const applicationPropsMySqlProfileCode = `# ===============================
# 		DATA SOURCE
# =============================== 
spring.datasource.url=jdbc:mysql://localhost:3306/e-commerce?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

# ===============================
# 	 	JPA / HIBERNATE
# ===============================
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
spring.jpa.open-in-view=false
#spring.jpa.show-sql=true
#spring.jpa.properties.hibernate.generate_statistics=true
#spring.jpa.properties.hibernate.format_sql=true

# When using java version JDK11 use with mysql dialect
#spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# ==========================================
#  we must add this config as well for 
#  schema.sql and data.sql could work
# ==========================================
spring.sql.init.mode=always
spring.jpa.defer-datasource-initialization=true
spring.sql.init.platform=MySql
spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-MySql.sql
`;

const dataMySql = `insert into role(role_id, role) values (1, 'ADMIN');
insert into role(role_id, role) values (2, 'COMPANY');
insert into role(role_id, role) values (3, 'CUSTOMER');`;
