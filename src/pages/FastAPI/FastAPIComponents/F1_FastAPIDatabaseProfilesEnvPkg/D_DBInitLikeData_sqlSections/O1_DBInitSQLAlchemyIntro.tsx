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
            Init DB like Spring <SpanYellow>data.sql</SpanYellow> style{" "}
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_DBInitSQLAlchemyIntro;
