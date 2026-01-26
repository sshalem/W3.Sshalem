/*


*/

import { MainChildArea } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_ReturnPLainClass = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        If you have a plain class and can’t change it, use <SpanGrey>JSONResponse</SpanGrey> with <SpanGrey>jsonable_encoder</SpanGrey>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O4_ReturnPLainClass;

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
