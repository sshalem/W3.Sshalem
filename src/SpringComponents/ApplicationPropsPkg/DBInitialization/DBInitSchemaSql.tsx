import { IMG, MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";
import db_init_1 from "../../../assets/db_init_1.jpg";
import db_init_2 from "../../../assets/db_init_2.jpg";

const DBSchemaSql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      In Spring Boot, <Span>schema.sql</Span> is a SQL script file used to define and initialize the database schema (i.e., tables, constraints,
      indexes) when the application starts. <Span>schema.sql</Span> contains raw SQL statements (like CREATE TABLE, ALTER, etc.) that Spring Boot runs
      at startup to set up the database structure before inserting any data (via <Span>data.sql</Span>).
      <br />
      If there's{" "}
      <em>
        <strong>NO</strong>
      </em>{" "}
      <Span>data.sql</Span>, no initial data will be inserted.
      <div>
        Default behavior, Spring Boot looks for:
        <ul className="my-2 ml-16">
          <li className="my1 list-disc">
            <Span>schema.sql</Span> → for schema creation
          </li>
          <li className="my1 list-disc">
            <Span>data.sql</Span> → for initial data. If there's no <Span>data.sql</Span>, no initial data will be inserted.
          </li>
          <li className="my1 list-disc">
            They are executed in order: first <Span>schema.sql</Span>, then <Span>data.sql</Span>.
          </li>
        </ul>
      </div>
      <section>
        <article className="my-8">
          <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
            <strong>schema.sql</strong> located in{" "}
            <em>
              <strong>src/main/resources</strong>
            </em>
          </div>
          <div>
            When you place <Span>schema.sql</Span> in <Span>src/main/resources</Span>, Spring Boot automatically detects it. (if database
            initialization <Span>spring.sql.init.mode=always</Span> is enabled) <br />
            When using <Span>schema.sql</Span> configure your <Span>application.properties</Span> like this :
            <ApplicationPropertiesHighlight propertiesCode={schemaSqlCode} />
            <IMG img_name={db_init_1} />
            <ul className="my-8 ml-16 list-decimal">
              <li className="my-1">
                <Span>spring.sql.init.mode=always</Span> - Enable execution of <Span>schema.sql</Span> and <Span>data.sql</Span>
              </li>
              <li className="my-1">
                <Span>spring.jpa.hibernate.ddl-auto=none</Span> - when using <Span>schema.sql</Span> , Don't let Hibernate auto-create the schema
              </li>
              <li className="my-1">
                <Span>spring.jpa.defer-datasource-initialization=true</Span> - Makes Spring Boot run SQL scripts before Hibernate initializes
                (important!). Ensure <Span>schema.sql</Span> runs BEFORE JPA starts (important!)
              </li>
            </ul>
          </div>
        </article>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
            <strong>schema.sql</strong> located in{" "}
            <em>
              <strong>src/main/resources/sqlSchemas/schema.sql</strong>
            </em>
          </div>
          <div>
            Let's say I want to put <Span>schema.sql</Span>{" "}
            <em>
              <strong>in different folder</strong>
            </em>{" "}
            <Span>src/main/resources/sqlSchemas/schema.sql</Span>, we need to tell spring boot about this new path , in order for spring to detect it.{" "}
            <br />
            Then, configure your <Span>application.properties</Span> like this. <br /> This tells Spring Boot to load <Span>schema.sql</Span> from
            <Span>/sqlSchemas/</Span> instead of the default root of resources.
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
            Most of the time, I don't use <Span>schema.sql</Span> (I use <Span>data.sql</Span>) , I prefer &nbsp;
            <em>
              <strong>automatic schema generation</strong>.
            </em>
            <br /> Spring Boot can create tables from your <Span>JPA</Span> <Span>@Entity</Span> classes using:
            <ApplicationPropertiesHighlight propertiesCode={propertiesDefaultCode} />
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default DBSchemaSql;

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
