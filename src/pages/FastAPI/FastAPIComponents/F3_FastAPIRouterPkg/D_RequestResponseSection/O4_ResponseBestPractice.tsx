/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_ResponseBestPractice = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">✅ Response Convention in FastAPI</article>A convention for retruning a response body is with
        Pydantic.
        <article className="my-8 text-lg font-semibold"> Why this works:</article>
        <ULdisc>
          <Li>By default, FastAPI uses Pydantic for automatic serialization.</Li>
          <Li>
            <SpanYellow>jsonable_encoder</SpanYellow> , Behind the scenes , It converts Python objects (including Pydantic models, datetime, UUID,
            etc.) into JSON-compatible data using
          </Li>
          <Li>
            <SpanYellow>JSONResponse</SpanYellow> Serializes Python objects → JSON string
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_}></PythonHighlight>
      </section>
    </MainChildArea>
  );
};

export default O4_ResponseBestPractice;

const _1_ = `from fastapi import APIRouter
from students.schemas import StudentDtoResponse

# GET with Response Model (produces)
@router.get("/student", response_model=StudentDtoResponse)
def get_student():
    return StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50)`;
