/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O1_ReturnResponse = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          In FastAPI, your endpoint should return <SpanGrey>JSON‑serializable data</SpanGrey> like :
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
        <div className="my-8 text-lg font-semibold">
          ✅ Whats the equivalent for Spring boot <SpanGrey>ResponseEntity</SpanGrey> ?
        </div>
        <ULdisc>
          <Li>
            In Spring Boot, <SpanGrey>ResponseEntity{"<T>"}</SpanGrey> lets you control the <SpanGrey>body</SpanGrey>,{" "}
            <SpanGrey>status code</SpanGrey>, and <SpanGrey>headers</SpanGrey> in one object.
          </Li>
          <Li>
            In FastAPI, the closest equivalent is returning a Response (or a subclass of it) where you can set the <SpanGrey>body</SpanGrey>,{" "}
            <SpanGrey>status</SpanGrey>, and <SpanGrey>headers</SpanGrey> explicitly.
            <ULdisc>
              <Li>
                <SpanGrey>JSONResponse</SpanGrey> from <SpanGrey>fastapi.responses.JSONResponse</SpanGrey>
              </Li>
              <Li>
                <SpanGrey>Response (raw)</SpanGrey> from <SpanGrey>fastapi.Response (raw)</SpanGrey>
              </Li>
              <Li>
                Other response subclasses:
                <ULdisc>
                  <Li>
                    <SpanGrey>PlainTextResponse</SpanGrey>
                  </Li>
                  <Li>
                    <SpanGrey>HTMLResponse</SpanGrey>
                  </Li>
                  <Li>
                    <SpanGrey>FileResponse</SpanGrey>
                  </Li>
                  <Li>
                    <SpanGrey>StreamingResponse</SpanGrey>
                  </Li>
                  <Li>
                    <SpanGrey>RedirectResponse</SpanGrey>
                  </Li>
                  <Li>
                    <SpanGrey>ORJSONResponse</SpanGrey>
                  </Li>
                  <Li>etc...</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <article className="my-8 text-lg font-semibold">
          ✅ <SpanGreen>Example Using JSONResponse</SpanGreen>
        </article>
        <ULdisc>
          <Li>
            I must wrap the Response model with <SpanGrey>jsonable_encoder</SpanGrey> knows , because <SpanGrey>JSONResponse</SpanGrey> don't know how
            to serialize it
          </Li>
          <Li>
            <SpanGrey>jsonable_encoder</SpanGrey> knows how to convert many non-serializable types (e.g., datetime, UUID, Decimal, and arbitrary
            objects with <SpanGrey>__dict__</SpanGrey> ) into JSON-friendly structures.
          </Li>
          <PythonHighlight pythonCode={_2_}></PythonHighlight>
        </ULdisc>
      </section>

      <hr />
      <section className="my-8">
        <article className="text-lg font-semibold">✅ Conventional way</article>
        Why this works:
        <ULdisc>
          <Li>FastAPI integrates with Pydantic for serialization and OpenAPI docs.</Li>
          <Li>
            FastAPI automatically uses its internal <SpanGrey>jsonable_encoder</SpanGrey> to convert this return value into JSON-compatible data
          </Li>
          <Li>
            and then creates a <SpanGrey>JSONResponse</SpanGrey> with that data behind the scenes.
          </Li>
          <Li>This is the typical and easiest way to use Pydantic with FastAPI.</Li>
          <Li>Returning a Pydantic model (or a dict) is the conventional way.</Li>
          <Li>Best Practice : use a Pydantic model as your response type</Li>
          <PythonHighlight pythonCode={_1_}></PythonHighlight>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8"></section>
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


# Custom JSON + status + headers (ResponseEntity-like)
@router.get("/users/{user_id}")
def get_user(user_id: int):
    studentResponse = StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50)
    headers = {"X-Request-Id": "abc-123"}
    return JSONResponse(content=jsonable_encoder(studentResponse), status_code=200, headers=headers)`;
