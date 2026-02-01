/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_DefaultConvention = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">✅ Default convention: return Python objects (models) and let FastAPI serialize</article>
        <ULdisc>
          <Li>
            <strong>Return</strong>: dicts / Pydantic models
          </Li>
          <Li>
            <strong>Declare</strong>: <SpanYellow>response_model=...</SpanYellow> on the route
          </Li>
          <Li>
            <strong>Set</strong>: status code with <SpanYellow>status_code=...</SpanYellow> on the decorator
          </Li>
          <Li>
            <strong>Raise</strong>: errors with <SpanYellow>HTTPException(...)</SpanYellow>
          </Li>
          <Li>
            <strong>Add headers</strong>: via the injected <SpanYellow>Response</SpanYellow> object (only when needed)
          </Li>
          <Li>
            Why this is the convention:{" "}
            <ULdisc>
              <Li>You get automatic validation, OpenAPI docs, and consistent JSON serialization.</Li>
              <Li>It’s concise and readable.</Li>
              <Li>Only drop down to low-level responses when you truly need to.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_}></PythonHighlight>
      </section>
    </MainChildArea>
  );
};

export default O5_DefaultConvention;

const _1_ = `from fastapi import APIRouter, Response, HTTPException
from pydantic import BaseModel

router = APIRouter()

class UserOut(BaseModel):
    id: int
    name: str

@router.get("/users/{user_id}", response_model=UserOut, status_code=200, tags=["users"])
def get_user(user_id: int, response: Response):
    if user_id == 0:
        raise HTTPException(status_code=404, detail="User not found")
    # Optionally set headers
    response.headers["X-Trace-Id"] = "abc-123"
    return UserOut(id=user_id, name="Alice")
`;
