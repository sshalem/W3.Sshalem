import { FaDiamond } from "react-icons/fa6";
import { Answer, InternalArticle, MainChildArea, Question } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const DBInitIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-2">In this section , Let's see how we can :</div>
      <ul className="ml-8 list-disc">
        <li className="my-1 ml-5">
          our own schema , w/o giving spring to create it for us by using a <Span>schema.sql</Span> file
        </li>
        <li className="my-1 ml-5">
          how to initialize the tables with data , using <Span>data.sql</Span> file
        </li>
        <li className="my-1 ml-5">
          how to create multiple <Span>schema-${`platform`}.sql</Span> during development
        </li>
        <li className="my-1 ml-5">
          how to create multiple <Span>data-${`platform`}.sql</Span> during development
        </li>
      </ul>
      <div className="my-5">
        from spring docs
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a href="https://docs.spring.io/spring-boot/how-to/data-initialization.html" target="_blank" className="tracking-wider text-blue-500">
            https://docs.spring.io/spring-boot/how-to/data-initialization.html
          </a>
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a
            href="https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-hibernate"
            target="_blank"
            className="tracking-wider text-blue-500"
          >
            https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-hibernate
          </a>
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a
            href="https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-basic-sql-scripts"
            target="_blank"
            className="tracking-wider text-blue-500"
          >
            https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-basic-sql-scripts
          </a>
        </div>
      </div>
      <InternalArticle articleTitle={"schema.sql"}>
        In Spring Boot, <Span>schema.sql</Span> is a SQL script file used to define and initialize the database schema (i.e., tables, constraints,
        indexes) when the application starts. <Span>schema.sql</Span> contains raw SQL statements (like CREATE TABLE, ALTER, etc.) that Spring Boot
        runs at startup to set up the database structure before inserting any data (via <Span>data.sql</Span>).
        <div>
          If there's{" "}
          <em>
            <strong>NO</strong>
          </em>{" "}
          <Span>data.sql</Span>, no initial data will be inserted.
          <div>
            When using <Span>schema.sql</Span>, pair it with:
            <ApplicationPropertiesHighlight propertiesCode={schemaSqlCode} />
          </div>
        </div>
        <div className="mt-4">
          <em>
            <strong>Note :</strong>
          </em>
        </div>
        <div>
          Most of the time, I don't use <Span>schema.sql</Span> , I prefer &nbsp;
          <em>
            <strong>automatic schema generation</strong>.
          </em>
          <br /> Spring Boot can create tables from your <Span>JPA</Span> <Span>@Entity</Span> classes using:
          <ApplicationPropertiesHighlight propertiesCode={propertiesDefaultCode} />
        </div>
        <Question>
          How Spring Boot Uses <Span>schema.sql</Span>?
        </Question>
        <Answer>
          When you place <Span>schema.sql</Span> in <Span>src/main/resources</Span>, Spring Boot automatically detects it if database initialization
          is enabled. <br />
          Default behavior, Spring Boot looks for:
          <ul className="my-2 ml-16">
            <li className="my1 list-disc">
              <Span>schema.sql</Span> → for schema creation
            </li>
            <li className="my1 list-disc">
              <Span>data.sql</Span> → for initial data
            </li>
            <li className="my1 list-disc">
              They are executed in order: first <Span>schema.sql</Span>, then <Span>data.sql</Span>.
            </li>
          </ul>
        </Answer>
        <div className="my-2 inline-block rounded-md bg-slate-500 p-1 tracking-wider text-white">Example</div>
        <div></div>
      </InternalArticle>
      <InternalArticle articleTitle={"data.sql"}> </InternalArticle>
    </MainChildArea>
  );
};

export default DBInitIntro;

const propertiesDefaultCode = `spring.jpa.hibernate.ddl-auto=create  # or update, validate, etc.
`;

const schemaSqlCode = `spring.jpa.hibernate.ddl-auto=none
spring.jpa.defer-datasource-initialization=true
`;
