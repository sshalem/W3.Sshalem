/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O3_JSONResponse = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            In <SpanGrey>Spring Boot</SpanGrey>, <SpanGrey>ResponseEntity{"<T>"}</SpanGrey> lets you control the <SpanGrey>body</SpanGrey>,{" "}
            <SpanGrey>status code</SpanGrey>, and <SpanGrey>headers</SpanGrey> in one object.
          </Li>
          <Li>
            In <SpanGrey>FastAPI</SpanGrey>, the closest equivalent is returning a Response (or a subclass of it) where you can set the{" "}
            <SpanGrey>body</SpanGrey>, <SpanGrey>status</SpanGrey>, and <SpanGrey>headers</SpanGrey> explicitly.
          </Li>
        </ULdisc>

        <Li>
          <SpanGrey>jsonable_encoder</SpanGrey> knows how to convert many non-serializable types (e.g., datetime, UUID, Decimal, and arbitrary objects
          with <SpanGrey>__dict__</SpanGrey> ) into JSON-friendly structures.
        </Li>
        <PythonHighlight pythonCode={_2_}></PythonHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_JSONResponse;

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
