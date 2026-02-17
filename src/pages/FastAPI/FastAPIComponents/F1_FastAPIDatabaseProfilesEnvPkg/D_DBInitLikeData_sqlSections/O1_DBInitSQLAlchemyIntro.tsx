/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_DBInitSQLAlchemyIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          <SpanYellow>DataBase Init with SQLAlchemy</SpanYellow>
        </article>
        <ULdisc>
          <Li>
            In this section I will show hot to initialize DB <SpanYellow>data.sql</SpanYellow> style
          </Li>
          <Li>
            Init DB for <SpanYellow>Postgresql</SpanYellow>
          </Li>
          <Li>
            Init DB for <SpanYellow>MySql</SpanYellow>
          </Li>
          <Li>
            Init DB for <SpanYellow>Sqlite</SpanYellow>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_DBInitSQLAlchemyIntro;
