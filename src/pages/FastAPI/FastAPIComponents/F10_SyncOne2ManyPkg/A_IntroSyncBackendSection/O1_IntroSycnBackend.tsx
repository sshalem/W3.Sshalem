/*


*/

import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O1_IntroSycnBackend = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">One-to-Many relationship</div>
        <ULdisc>
          <Li>
            I implement <SpanEmerald>One-to-Many relationship</SpanEmerald>.
          </Li>
          <Li>
            It will be a <SpanYellow>Synchronous</SpanYellow> programming.
          </Li>
          <Li>
            I'll extend the existing <SpanEmerald>SyncSingleEntity</SpanEmerald> Management API by introducing second entity:
            <SpanEmerald>Order</SpanEmerald>
          </Li>
        </ULdisc>

        <div>Stack I am using:</div>
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
