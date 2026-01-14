/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O0_Pydantic = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">If you know Spring Boot well, think of Pydantic as</article>
        <ULdisc>
          <Li>DTO + Validation + Jackson + Swagger schema — all in one</Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <article className="text-lg font-semibold">If you know Spring Boot well, think of Pydantic as</article>
        <ULdisc>
          <Li>
            <SpanGrey>Pydandic</SpanGrey>DTO + Validation + Jackson + Swagger schema (Its equivalent to Spring DTO)
          </Li>
          <Li>
            
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <ULdisc>
          <Li>Pydantic is the data validation and serialization engine that FastAPI is built on top of.</Li>
          <Li>
            If you understand <SpanGrey>DTOs / Records</SpanGrey> in Spring Boot, then Pydantic will feel very familiar.
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <article className="text-lg font-semibold">🔹 What Pydantic Is (In One Sentence)</article>
        Pydantic defines data models that validate, parse, and serialize data using Python type hints.
        <div className="my-8">FastAPI uses it to:</div>
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
