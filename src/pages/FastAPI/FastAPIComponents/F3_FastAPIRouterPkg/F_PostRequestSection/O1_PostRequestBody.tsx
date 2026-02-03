/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_PostRequestBody = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>POST with JSON body (Pydantic model)</Li>
          <Li>
            Unlike Spring boot (That uses <SpanYellow>@RequestBody</SpanYellow> ), I just have as argument
          </Li>
          <Li>
            Best Practice to have a <SpanYellow>Pydantic Object</SpanYellow>
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O1_PostRequestBody;

const _1_ = `from fastapi import APIRouter
router = APIRouter()

from pydantic import BaseModel


class UserCreate(BaseModel):
    username: str
    age: int


@router.post("/createUser")
def create_user(user: UserCreate):
    return user
`;
