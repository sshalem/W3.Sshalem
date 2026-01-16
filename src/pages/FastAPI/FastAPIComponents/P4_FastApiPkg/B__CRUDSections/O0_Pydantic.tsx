/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O0_Pydantic = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          If you know Spring Boot well, think of <SpanGrey>Pydantic</SpanGrey> as
        </article>
        <ULdisc>
          <Li>DTO + Validation + Jackson + Swagger schema — all in one</Li>
          <Li>Pydantic is the data validation and serialization/De-serialization engine that FastAPI is built on top of.</Li>
          <Li>
            Since I you understand <SpanGrey>DTOs / Records</SpanGrey> in Spring Boot, then Pydantic will feel very familiar.
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <strong>FastAPI</strong> uses it <strong>Pydantic</strong> to:
        <ULdisc>
          <Li>
            validate request bodies (<SpanGrey>Request</SpanGrey> = <SpanGrey>deserialize</SpanGrey> + <SpanGrey>validate</SpanGrey> )
          </Li>
          <Li>serialize responses</Li>
          <Li>generate OpenAPI / Swagger docs</Li>
          <Li>provide type safety (Python-style)</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_Pydantic;
