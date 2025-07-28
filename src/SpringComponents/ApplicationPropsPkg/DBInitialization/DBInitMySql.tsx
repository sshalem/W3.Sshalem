import { IMG, MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";
import db_init_6 from "../../../assets/db_init_6.jpg";

const DBInitMySql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        here is how we config MySql with <Span>data.sql</Span>
        <div>
          <ul className="my-4 ml-16 list-decimal">
            <li className="my-1">
              create <Span>application-MySql.properties</Span>file
            </li>
            <li className="my-1">
              config main <Span>application.properties</Span>
            </li>
            <li className="my-1">
              <Span>data-MySql.sql</Span>
            </li>
          </ul>
        </div>
        <IMG img_name={db_init_6}></IMG>
      </div>
      <div className="mt-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
        main application.properties
      </div>
      <ApplicationPropertiesHighlight propertiesCode={applicationPropsMainCode}></ApplicationPropertiesHighlight>
      <div className="mt-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
        application-MySql.properties
      </div>
      <ApplicationPropertiesHighlight propertiesCode={applicationPropsMySqlProfileCode}></ApplicationPropertiesHighlight>
      <div className="mt-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
        data-MySql.sql
      </div>
      <ApplicationPropertiesHighlight propertiesCode={dataMySql}></ApplicationPropertiesHighlight>
    </MainChildArea>
  );
};

export default DBInitMySql;

const applicationPropsMainCode = `# MySql is the name of the profile : application-MySql.properties
spring.profiles.active=MySql

# console color enabled
spring.output.ansi.enabled=always

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
spring.sql.init.platform=MySql
spring.sql.init.mode=always
spring.jpa.defer-datasource-initialization=true
spring.sql.init.data-locations=classpath:DB_initialization_scripts/data-MySql.sql
`;

const dataMySql = `insert into role(role_id, role) values (1, 'ADMIN');
insert into role(role_id, role) values (2, 'COMPANY');
insert into role(role_id, role) values (3, 'CUSTOMER');`;
