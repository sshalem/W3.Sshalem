/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O1_ReturnResponse = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          In FastAPI, your endpoint should return <SpanGrey>JSON‑serializable data</SpanGrey>{" "}
        </article>
        <ULdisc>
          <Li>dicts</Li>
          <Li>lists</Li>
          <Li>primitives</Li>
          <Li>Pydantic models</Li>
          <Li>
            A plain Python class (DTO) <SpanRed>isn’t automatically serializable.</SpanRed>
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="text-lg font-semibold">✅ Best practice: use a Pydantic model as your response type</article>
        Why this works:
        <ULdisc>
          <Li>FastAPI integrates with Pydantic for serialization and OpenAPI docs.</Li>
          <Li>Returning a Pydantic model (or a dict) is the conventional way.</Li>
          <PythonHighlight pythonCode={_1_}></PythonHighlight>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">
          ✅ <SpanGreen>jsonable_encoder</SpanGreen> : If you have a plain class and can’t change it{" "}
        </article>
        <SpanGrey>jsonable_encoder</SpanGrey> knows
        <ULdisc>
          <Li>
            how to convert many non-serializable types (e.g., datetime, UUID, Decimal, and arbitrary objects with <SpanGrey>__dict__</SpanGrey> ) into
            JSON-friendly structures.
          </Li>
          <Li>If you have a plain Python class (not a Pydantic model), encode it first with jsonable_encoder.</Li>
          <Li>
            If you need to control headers/cookies/status explicitly, use <SpanGrey>jsonable_encoder</SpanGrey> to turn your object into a JSON‑safe
            structure before passing it to JSONResponse.
          </Li>
          <PythonHighlight pythonCode={_2_}></PythonHighlight>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_ReturnResponse;

const _1_ = `from fastapi import APIRouter
from students.schemas import StudentDtoResponse

# GET with Response Model (produces)
@router.get("/student", response_model=StudentDtoResponse)
def get_student():
    logger.debug("test student url")
    # Build and return the Pydantic model (or dict)
    # StudentDtoResponse is a Pydantic model
    return StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50)`;

const _2_ = `from fastapi import APIRouter, Response
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from students.schemas import StudentDtoResponse
import SpanGrey from './../../../../../components/Highlight/SpanGrey';


# Custom JSON + status + headers (ResponseEntity-like)
@router.get("/studentJSONResponse")
def get_student():
    logger.debug("test student url")
    studentResponse = StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50)
    return JSONResponse(status_code=200, content=jsonable_encoder(studentResponse))`;
