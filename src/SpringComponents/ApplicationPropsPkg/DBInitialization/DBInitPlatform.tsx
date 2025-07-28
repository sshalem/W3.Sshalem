import { MainChildArea } from "../../../components";
import { Span } from "../../../Highlight";

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
    </MainChildArea>
  );
};

export default DBInitPlatform;
