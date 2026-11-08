/*


*/

import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O1_IntroSycnBackend = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Learning project</div>
        <div>
          We'll start with <SpanYellow>Synchronous</SpanYellow> programming, then migrate to <SpanEmerald>Asynchronous</SpanEmerald> programming.
        </div>
        <div className="">We'll build a backend application with:</div>
        <ULDecimal>
          <Li>FastAPI</Li>
          <Li>Python</Li>
          <Li>SQLAlchemy ORM</Li>
          <Li>PostgreSQL</Li>
          <Li>Pydantic</Li>
          <Li>Alembic (database migrations)</Li>
          <Li>Pytest (testing)</Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroSycnBackend;
