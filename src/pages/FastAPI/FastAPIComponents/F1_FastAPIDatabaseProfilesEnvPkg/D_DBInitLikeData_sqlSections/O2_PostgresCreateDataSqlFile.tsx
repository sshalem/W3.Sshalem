/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_PostgresCreateDataSqlFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          create <SpanYellow>data.sql</SpanYellow> file
        </article>
        <ULdisc>
          <Li>
            create <SpanYellow>data.sql</SpanYellow> file in the directory where <SpanYellow>main.py</SpanYellow> resides
          </Li>
          <Li>
            <strong>Note</strong>
            :I can place the file in any directory I want
          </Li>
          <Li>
            Copy/Paste the SQL code
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_PostgresCreateDataSqlFile;

const _1_ = `INSERT INTO users(name, email) VALUES('shabtay shalem','shabtay@gmail.com');
INSERT INTO users(name, email) VALUES('karin shalem','karin@gmail.com');`;
