/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_JSONResponse = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            In <SpanYellow>Spring Boot</SpanYellow>, <SpanYellow>ResponseEntity{"<T>"}</SpanYellow> lets you control the <SpanYellow>body</SpanYellow>
            , <SpanYellow>status code</SpanYellow>, and <SpanYellow>headers</SpanYellow> in one object.
          </Li>
          <Li>
            In <SpanYellow>FastAPI</SpanYellow>, the closest equivalent is returning a Response (or a subclass of it) where you can set the{" "}
            <SpanYellow>body</SpanYellow>, <SpanYellow>status</SpanYellow>, and <SpanYellow>headers</SpanYellow> explicitly.
          </Li>
        </ULdisc>

        <Li>
          <SpanYellow>jsonable_encoder</SpanYellow> knows how to convert Any Python object (Pydantic model, datetime, set…) into JSON-safe Python
          object structures, which are: <SpanYellow>dict, list, str, int…</SpanYellow>
        </Li>
        <Li>
          <SpanYellow>JSONResponse</SpanYellow> Serializes JSON-safe Python object → JSON string (HTTP response body (JSON string/bytes))
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
