/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_GetApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">✅ @router.get()</article>
        <ULdisc>
          <Li>router code </Li>
          <Li>Pay attention for the imports </Li>
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
      </section>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">✅ main.py</article>
        <ULdisc>
          <Li>mount the Controller to app</Li>
          <Li>
            <SpanGrey>include_router</SpanGrey> - route registration
          </Li>
          <Li>
            <SpanGrey>prefix="/students"</SpanGrey> - like <SpanGrey>@RequestMapping("/students")</SpanGrey>
          </Li>
          <Li>
            <SpanGrey>tags=["Students"]</SpanGrey> - for Swagger/ OpenAPI only
          </Li>
          <PythonHighlight pythonCode={_2_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_GetApi;

const _1_ = `from typing import List
from fastapi import APIRouter
from students.schemas import StudentDtoResponse
from core.logging_config import setup_logging
import logging

# Initialize logging
setup_logging(level=logging.DEBUG, log_to_file=False)
logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/")
def test():
    return "test"


@router.get("/student", response_model=StudentDtoResponse)
def get_student():
    logger.debug("test student url")
    # return instance of StudentDtoResponse
    return StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50)


@router.get("/allStudents", response_model=List[StudentDtoResponse])
def get_all_students():
    # List of StudentDtoResponse
    students = [
        StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50),
        StudentDtoResponse(id=2, first_name="karin", last_name="shalem", age=50),
    ]
    logger.debug("test allStudents url")
    return students`;

const _2_ = `from fastapi import FastAPI
from students.router import router as students_router

app = FastAPI()

# mount the Controller to app
app.include_router(router=students_router, prefix="/api",tags=["Students"])`;
