import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import db_init_3 from "../../../../../assets/db_init_3.jpg";
import db_init_4 from "../../../../../assets/db_init_4.jpg";

const DBDataSql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <SpanBlue>data.sql</SpanBlue> is an SQL file commonly used in Spring Boot ,that contains SQL statements to{" "}
      <em>
        <strong>initialize or populate</strong>
      </em>{" "}
      a relational database when the application starts. It usually includes:
      <div>
        <ul className="my-2 ml-16">
          <li className="my1 list-disc">
            <SpanBlue>INSERT</SpanBlue> statements to prepopulate tables with data.
          </li>
          <li className="my1 list-disc">
            Occasionally <SpanBlue>DELETE, UPDATE</SpanBlue>, or even <SpanBlue>SELECT</SpanBlue> statements (though this is rare).
          </li>
          <li className="my1 list-disc">
            It's purely optional—meant for seeding the database with initial data, often for development or testing purposes.
          </li>
        </ul>
      </div>
      <div>
        Spring Boot :
        <ul className="my-2 ml-16">
          <li className="my1 list-disc">
            automatically loads <SpanBlue>data.sql</SpanBlue> (along with <SpanBlue>schema.sql</SpanBlue> if present) from the{" "}
            <SpanBlue>classpath</SpanBlue> when the application starts.
          </li>
          <li className="my1 list-disc">It runs after the schema is created</li>
        </ul>
      </div>
      <section>
        <article className="my-8">
          <DivDoubleBorder>
            <strong>data.sql</strong> located in{" "}
            <em>
              <strong>src/main/resources</strong>
            </em>
          </DivDoubleBorder>
          <div>
            When you place <SpanBlue>data.sql</SpanBlue> in <SpanBlue>src/main/resources</SpanBlue>, Spring Boot automatically detects it. (if
            database initialization
            <SpanBlue>spring.sql.init.mode=always</SpanBlue> is enabled) <br />
            When using <SpanBlue>data.sql</SpanBlue> configure your <SpanBlue>application.properties</SpanBlue> like this :
            <ApplicationPropertiesHighlight propertiesCode={dataSqlCode} />
            <IMG img_name={db_init_3} />
            <ul className="my-8 ml-16 list-decimal">
              <li className="my-2">
                <SpanBlue>spring.sql.init.mode=always</SpanBlue> - Enable execution of <SpanBlue>schema.sql</SpanBlue> and{" "}
                <SpanBlue>data.sql</SpanBlue>
              </li>
              <li className="my-2">
                <SpanBlue>spring.jpa.hibernate.ddl-auto=create</SpanBlue> - tell Hibernate (the JPA provider) to automatically generate the database
                schema at runtime by creating tables based on your JPA entity classes.
              </li>
              <li className="my-2">
                <SpanBlue>spring.jpa.generate-ddl=true</SpanBlue> - When set to true, Spring will ask the JPA provider (usually Hibernate) to
                automatically create or update the database schema based on your entity definitions (@Entity, @Column, etc.).
              </li>
              <li className="my-2">
                <SpanBlue>spring.jpa.defer-datasource-initialization=true</SpanBlue> - Makes Spring Boot run SQL scripts before Hibernate initializes
                (important!). Ensure <SpanBlue>schema.sql</SpanBlue> runs BEFORE JPA starts (important!)
              </li>
            </ul>
          </div>
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
        </article>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <DivDoubleBorder>
            <strong>data.sql</strong> located in{" "}
            <em>
              <strong>src/main/resources/sqlData/data.sql</strong>
            </em>
          </DivDoubleBorder>
          <div>
            Let's say I want to put <SpanBlue>data.sql</SpanBlue>{" "}
            <em>
              <strong>in different folder</strong>
            </em>{" "}
            <SpanBlue>src/main/resources/sqlData/data.sql</SpanBlue>, we need to tell spring boot about this new path , in order for spring to detect
            it. <br />
            Then, configure your <SpanBlue>application.properties</SpanBlue> like this. <br /> This tells Spring Boot to load{" "}
            <SpanBlue>data.sql</SpanBlue> from
            <SpanBlue>/sqlData/</SpanBlue> instead of the default root of resources.
            <ApplicationPropertiesHighlight propertiesCode={dataSqlDifferentPathCode} />
            <IMG img_name={db_init_4} />
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default DBDataSql;

const dataSqlCode = `spring.sql.init.mode=always
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
spring.jpa.defer-datasource-initialization=true
`;

const dataSqlDifferentPathCode = `spring.sql.init.mode=always
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
spring.sql.init.schema-locations=classpath:sqlData/data.sql
spring.jpa.defer-datasource-initialization=true
`;
