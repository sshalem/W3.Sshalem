import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import db_init_5 from "../../../../../assets/db_init_5.jpg";

const DBInitPlatform = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      The <SpanBlue>spring.sql.init.platform</SpanBlue> property in Spring Boot is used to select a platform-specific SQL script (like
      <SpanBlue>
        schema-{`<platform>`}
        .sql
      </SpanBlue>
      or <br />
      <SpanBlue>
        data-
        {`<platform>`}.sql
      </SpanBlue>
      ) during database initialization.
      <div>
        When you're initializing a database using SQL scripts (like <SpanBlue>schema.sql</SpanBlue> and <SpanBlue>data.sql</SpanBlue>), you can create
        database-specific variations by naming them with a <SpanBlue>-{`<platform>`}</SpanBlue> suffix. The{" "}
        <SpanBlue>spring.sql.init.platform</SpanBlue> property tells Spring Boot which variant to pick.
      </div>
      <DivDoubleBorder>Example</DivDoubleBorder>
      <div className="ml-5">
        config <SpanBlue>application.properties</SpanBlue> like this (Note : the name is case sensitive)
        <ApplicationPropertiesHighlight propertiesCode="spring.sql.init.platform=MySql" />
      </div>
      <div>
        With this setting, Spring Boot will look for:
        <ul className="my-4 ml-16 list-disc">
          <li className="my-1">
            <SpanBlue>schema-MySql.sql</SpanBlue>
          </li>
          <li className="my-1">
            <SpanBlue>data-MySql.sql</SpanBlue>
          </li>
        </ul>
        Instead of the default:
        <ul className="my-4 ml-16 list-disc">
          <li className="my-1">
            <SpanBlue>schema.sql</SpanBlue>
          </li>
          <li className="my-1">
            <SpanBlue>data.sql</SpanBlue>
          </li>
        </ul>
      </div>
      <IMG img_name={db_init_5}></IMG>
    </MainChildArea>
  );
};

export default DBInitPlatform;
