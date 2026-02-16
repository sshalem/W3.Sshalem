/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_SqliteIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold"></article>
        <ULdisc>
          <Li>
            <SpanYellow>Sqlite3</SpanYellow> come by default with Python, in almost all standard installations.
          </Li>
          <Li>The Python Standard Library includes the sqlite3 module.</Li>
          <Li>This means you can use SQLite without installing anything extra.</Li>
          <Li>
            How to check :
            <ULdisc>
              <Li>You can test it by simply running command below , If this prints a version number (e.g., 3.45.0), you're good to go.</Li>
            </ULdisc>
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_SqliteIntro;

const _1_ = `import sqlite3
print(sqlite3.sqlite_version)`;
