/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_Pydantic = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          If you know Spring Boot well, think of <SpanYellow>Pydantic</SpanYellow> as
        </article>
        <ULdisc>
          <Li>
            DTO + Validation +
            <strong>
              <SpanYellow>Jackson</SpanYellow>
            </strong>
            + Swagger schema — all in one
          </Li>
          <Li>Pydantic is the data validation and serialization/De-serialization engine that FastAPI is built on top of.</Li>
          <Li>
            Since I you understand <SpanYellow>DTOs / Records</SpanYellow> in Spring Boot, then Pydantic will feel very familiar.
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <strong>FastAPI</strong> uses it <strong>Pydantic</strong> to:
        <ULdisc>
          <Li>
            validate request bodies (<SpanYellow>Request</SpanYellow> = <SpanYellow>deserialize</SpanYellow> + <SpanYellow>validate</SpanYellow> )
          </Li>
          <Li>serialize responses</Li>
          <Li>generate OpenAPI / Swagger docs</Li>
          <Li>provide type safety (Python-style)</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_Pydantic;
