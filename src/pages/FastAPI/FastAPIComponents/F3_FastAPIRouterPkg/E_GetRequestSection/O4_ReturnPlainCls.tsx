/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_ReturnPlainCls = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            If I have a plain class and can’t change it, use <SpanYellow>JSONResponse</SpanYellow> with <SpanYellow>jsonable_encoder</SpanYellow>
          </Li>
          <Li>
            Reminder for what I explained before :
            <ULdisc>
              <Li>By default, FastAPI uses Pydantic for automatic serialization.</Li>
              <Li>
                Behind the scenes using its <SpanYellow>jsonable_encoder</SpanYellow> , It converts Python objects (including Pydantic models,
                datetime, UUID, etc.) into JSON-compatible data using
              </Li>
              <Li>
                and then puts that data into a <SpanYellow>JSONResponse</SpanYellow> .
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O4_ReturnPlainCls;

const _1_ = `from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

router = APIRouter()


class Student:
    def __init__(self, id: int, name: str, grade: float | None = None):
        self.id = id
        self.name = name
        self.grade = grade


@router.get("/regularClass")
def get_student():
    student = Student(1, "Alice", 92.5)
    return JSONResponse(content=jsonable_encoder(student), status_code=200)
`;
