/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O6_RouterWithouExceptions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Router w/o HTTPException</h2>
        <ULdisc>
          <Li>
            Since I already have a Global Exception Handler , thus , I don't need to <SpanYellow>raise HTTPException</SpanYellow> in the Router.
          </Li>
          <Li>
            It's like in <SpanYellow>spring Controller Advice</SpanYellow>
          </Li>
          <PythonHighlight pythonCode={_2_} />
          <Li>Response in Postman</Li>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_RouterWithouExceptions;

const _2_ = `from fastapi import APIRouter
from service.student_service import student_email_check

router = APIRouter()


@router.get("/checkError")
def check_error():
    return student_email_check("shalem")`;

const _3_ = `{
    "timestamp": "2026-02-01T11:20:17.329379",
    "status": 409,
    "error": "Conflict",
    "exception": "UserAlreadyExistError",
    "message": "User with email 'shalem' already exists",
    "path": "/api/checkError"
}`;
