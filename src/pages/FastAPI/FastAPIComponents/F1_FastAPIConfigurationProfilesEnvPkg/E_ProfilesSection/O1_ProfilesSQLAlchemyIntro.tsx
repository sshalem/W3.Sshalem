/*


*/

import { MainChildArea } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_ProfilesSQLAlchemyIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          <SpanYellow>Profiles SQLAlchemy Intro</SpanYellow>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_ProfilesSQLAlchemyIntro;
