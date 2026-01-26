/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_ResponseModelWithHeaders = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            We can return a normal Python object (validated by <SpanGrey>response_model</SpanGrey> ) and set headers via the Response object injected
            by FastAPI.
          </Li>
          <Li>Li Headers and status are controlled via Response (or status_code parameter).</Li>
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_ResponseModelWithHeaders;

const _1_ = `from fastapi import APIRouter, Response
from pydantic import BaseModel

router = APIRouter()


class UserOut(BaseModel):
    id: int
    name: str


@router.get("/typed", response_model=UserOut, status_code=200)
def typed(response: Response):
    response.headers["X-Source"] = "cache"
    return UserOut(id=1, name="Shabtay")
`;
