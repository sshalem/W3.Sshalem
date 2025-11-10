/*
/spring/application-properties/db-initialization#2.Schemasql
Schema sql --> (SPRING)(ApplicationProperties)(Schema sql)
*/
import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import db_init_1 from "../../../../../assets/db_init_1.jpg";
import db_init_2 from "../../../../../assets/db_init_2.jpg";

const O2_DBInitSchemaSql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      In Spring Boot, <SpanBlue>schema.sql</SpanBlue> is a SQL script file used to define and initialize the database schema (i.e., tables,
      constraints, indexes) when the application starts. <SpanBlue>schema.sql</SpanBlue> contains raw SQL statements (like CREATE TABLE, ALTER, etc.)
      that Spring Boot runs at startup to set up the database structure before inserting any data (via <SpanBlue>data.sql</SpanBlue>).
      <br />
      If there's{" "}
      <em>
        <strong>NO</strong>
      </em>{" "}
      <SpanBlue>data.sql</SpanBlue>, no initial data will be inserted.
      <div>
        Default behavior, Spring Boot looks for:
        <ul className="my-2 ml-16">
          <li className="my1 list-disc">
            <SpanBlue>schema.sql</SpanBlue> → for schema creation
          </li>
          <li className="my1 list-disc">
            <SpanBlue>data.sql</SpanBlue> → for initial data. If there's no <SpanBlue>data.sql</SpanBlue>, no initial data will be inserted.
          </li>
          <li className="my1 list-disc">
            They are executed in order: first <SpanBlue>schema.sql</SpanBlue>, then <SpanBlue>data.sql</SpanBlue>.
          </li>
        </ul>
      </div>
      <section>
        <article className="my-8">
          <DivDoubleBorder>
            <strong>schema.sql</strong> located in &nbsp;
            <em>
              <strong>src/main/resources</strong>
            </em>
          </DivDoubleBorder>
          <div>
            When you place <SpanBlue>schema.sql</SpanBlue> in <SpanBlue>src/main/resources</SpanBlue>, Spring Boot automatically detects it. (if
            database initialization <SpanBlue>spring.sql.init.mode=always</SpanBlue> is enabled) <br />
            When using <SpanBlue>schema.sql</SpanBlue> configure your <SpanBlue>application.properties</SpanBlue> like this :
            <ApplicationPropertiesHighlight propertiesCode={schemaSqlCode} />
            <IMG img_name={db_init_1} />
            <ul className="my-8 ml-16 list-decimal">
              <li className="my-1">
                <SpanBlue>spring.sql.init.mode=always</SpanBlue> - Enable execution of <SpanBlue>schema.sql</SpanBlue> and{" "}
                <SpanBlue>data.sql</SpanBlue>
              </li>
              <li className="my-1">
                <SpanBlue>spring.jpa.hibernate.ddl-auto=none</SpanBlue> - when using <SpanBlue>schema.sql</SpanBlue> , Don't let Hibernate auto-create
                the schema
              </li>
              <li className="my-1">
                <SpanBlue>spring.jpa.defer-datasource-initialization=true</SpanBlue> - Makes Spring Boot run SQL scripts before Hibernate initializes
                (important!). Ensure <SpanBlue>schema.sql</SpanBlue> runs BEFORE JPA starts (important!)
              </li>
            </ul>
          </div>
        </article>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <DivDoubleBorder>
            <strong>schema.sql</strong> located in{" "}
            <em>
              <strong>src/main/resources/sqlSchemas/schema.sql</strong>
            </em>
          </DivDoubleBorder>
          <div>
            Let's say I want to put <SpanBlue>schema.sql</SpanBlue>{" "}
            <em>
              <strong>in different folder</strong>
            </em>{" "}
            <SpanBlue>src/main/resources/sqlSchemas/schema.sql</SpanBlue>, we need to tell spring boot about this new path , in order for spring to
            detect it. <br />
            Then, configure your <SpanBlue>application.properties</SpanBlue> like this. <br /> This tells Spring Boot to load{" "}
            <SpanBlue>schema.sql</SpanBlue> from
            <SpanBlue>/sqlSchemas/</SpanBlue> instead of the default root of resources.
            <ApplicationPropertiesHighlight propertiesCode={schemaSqlDifferentPathCode} />
            <IMG img_name={db_init_2} />
          </div>
          <div className="mt-16">
            <em>
              <strong>Note :</strong>
            </em>
          </div>
        </article>

        <article>
          <div>
            Most of the time, I don't use <SpanBlue>schema.sql</SpanBlue> (I use <SpanBlue>data.sql</SpanBlue>) , I prefer &nbsp;
            <em>
              <strong>automatic schema generation</strong>.
            </em>
            <br /> Spring Boot can create tables from your <SpanBlue>JPA</SpanBlue> <SpanBlue>@Entity</SpanBlue> classes using:
            <ApplicationPropertiesHighlight propertiesCode={propertiesDefaultCode} />
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_DBInitSchemaSql;

const propertiesDefaultCode = `spring.jpa.hibernate.ddl-auto=create  # or update, validate, etc.
`;

const schemaSqlDifferentPathCode = `spring.sql.init.mode=always
spring.sql.init.schema-locations=classpath:sqlSchema/schema.sql
spring.jpa.hibernate.ddl-auto=none
spring.jpa.defer-datasource-initialization=true
`;

const schemaSqlCode = `spring.sql.init.mode=always
spring.jpa.hibernate.ddl-auto=none
spring.jpa.defer-datasource-initialization=true
`;
