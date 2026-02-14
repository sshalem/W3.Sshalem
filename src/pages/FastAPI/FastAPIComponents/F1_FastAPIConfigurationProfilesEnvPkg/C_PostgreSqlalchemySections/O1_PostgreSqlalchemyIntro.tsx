/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_PostgreSqlalchemyIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          <SpanYellow>PostgreSql with SQLAlchemy</SpanYellow>
        </article>
        To connect SQLAlchemy with PostgreSQL, you need:
        <ULdisc>
          <Li>PostgreSQL installed and running</Li>
          <Li>A database created</Li>
          <Li>A PostgreSQL driver (psycopg)</Li>
          <Li>A correct SQLAlchemy connection string</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_PostgreSqlalchemyIntro;
