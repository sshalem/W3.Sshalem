import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../../../components/Highlight";
import db_init_3 from "../../../../../assets/db_init_3.jpg";
import db_init_4 from "../../../../../assets/db_init_4.jpg";

const DBDataSql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Span>data.sql</Span> is an SQL file commonly used in Spring Boot ,that contains SQL statements to{" "}
      <em>
        <strong>initialize or populate</strong>
      </em>{" "}
      a relational database when the application starts. It usually includes:
      <div>
        <ul className="my-2 ml-16">
          <li className="my1 list-disc">
            <Span>INSERT</Span> statements to prepopulate tables with data.
          </li>
          <li className="my1 list-disc">
            Occasionally <Span>DELETE, UPDATE</Span>, or even <Span>SELECT</Span> statements (though this is rare).
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
            automatically loads <Span>data.sql</Span> (along with <Span>schema.sql</Span> if present) from the <Span>classpath</Span> when the
            application starts.
          </li>
          <li className="my1 list-disc">It runs after the schema is created</li>
        </ul>
      </div>
      <section>
        <article className="my-8">
          <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
            <strong>data.sql</strong> located in{" "}
            <em>
              <strong>src/main/resources</strong>
            </em>
          </div>
          <div>
            When you place <Span>data.sql</Span> in <Span>src/main/resources</Span>, Spring Boot automatically detects it. (if database initialization
            <Span>spring.sql.init.mode=always</Span> is enabled) <br />
            When using <Span>data.sql</Span> configure your <Span>application.properties</Span> like this :
            <ApplicationPropertiesHighlight propertiesCode={dataSqlCode} />
            <IMG img_name={db_init_3} />
            <ul className="my-8 ml-16 list-decimal">
              <li className="my-2">
                <Span>spring.sql.init.mode=always</Span> - Enable execution of <Span>schema.sql</Span> and <Span>data.sql</Span>
              </li>
              <li className="my-2">
                <Span>spring.jpa.hibernate.ddl-auto=create</Span> - tell Hibernate (the JPA provider) to automatically generate the database schema at
                runtime by creating tables based on your JPA entity classes.
              </li>
              <li className="my-2">
                <Span>spring.jpa.generate-ddl=true</Span> - When set to true, Spring will ask the JPA provider (usually Hibernate) to automatically
                create or update the database schema based on your entity definitions (@Entity, @Column, etc.).
              </li>
              <li className="my-2">
                <Span>spring.jpa.defer-datasource-initialization=true</Span> - Makes Spring Boot run SQL scripts before Hibernate initializes
                (important!). Ensure <Span>schema.sql</Span> runs BEFORE JPA starts (important!)
              </li>
            </ul>
          </div>
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
        </article>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
            <strong>data.sql</strong> located in{" "}
            <em>
              <strong>src/main/resources/sqlData/data.sql</strong>
            </em>
          </div>
          <div>
            Let's say I want to put <Span>data.sql</Span>{" "}
            <em>
              <strong>in different folder</strong>
            </em>{" "}
            <Span>src/main/resources/sqlData/data.sql</Span>, we need to tell spring boot about this new path , in order for spring to detect it.{" "}
            <br />
            Then, configure your <Span>application.properties</Span> like this. <br /> This tells Spring Boot to load <Span>data.sql</Span> from
            <Span>/sqlData/</Span> instead of the default root of resources.
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
