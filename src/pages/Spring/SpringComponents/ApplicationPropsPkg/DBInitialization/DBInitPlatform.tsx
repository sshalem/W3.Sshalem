import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../../../components/Highlight";
import db_init_5 from "../../../../../assets/db_init_5.jpg";

const DBInitPlatform = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      The <Span>spring.sql.init.platform</Span> property in Spring Boot is used to select a platform-specific SQL script (like
      <Span>
        schema-{`<platform>`}
        .sql
      </Span>
      or <br />
      <Span>
        data-
        {`<platform>`}.sql
      </Span>
      ) during database initialization.
      <div>
        When you're initializing a database using SQL scripts (like <Span>schema.sql</Span> and <Span>data.sql</Span>), you can create
        database-specific variations by naming them with a <Span>-{`<platform>`}</Span> suffix. The <Span>spring.sql.init.platform</Span> property
        tells Spring Boot which variant to pick.
      </div>
      <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
        Example
      </div>
      <div className="ml-5">
        config <Span>application.properties</Span> like this (Note : the name is case sensitive)
        <ApplicationPropertiesHighlight propertiesCode="spring.sql.init.platform=MySql" />
      </div>
      <div>
        With this setting, Spring Boot will look for:
        <ul className="my-4 ml-16 list-disc">
          <li className="my-1">
            <Span>schema-MySql.sql</Span>
          </li>
          <li className="my-1">
            <Span>data-MySql.sql</Span>
          </li>
        </ul>
        Instead of the default:
        <ul className="my-4 ml-16 list-disc">
          <li className="my-1">
            <Span>schema.sql</Span>
          </li>
          <li className="my-1">
            <Span>data.sql</Span>
          </li>
        </ul>
      </div>
      <IMG img_name={db_init_5}></IMG>
    </MainChildArea>
  );
};

export default DBInitPlatform;
