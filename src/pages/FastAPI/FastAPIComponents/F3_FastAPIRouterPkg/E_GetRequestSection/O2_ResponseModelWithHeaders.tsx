/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_ResponseModelWithHeaders = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            We can return a normal Python object (validated by <SpanYellow>response_model</SpanYellow> ) and set headers via the Response object
            injected by FastAPI.
          </Li>
          <Li>
            In FastAPI, <SpanYellow>response_model</SpanYellow> is optional, not required.
          </Li>
          <Li>
            What happens if you don’t set <SpanYellow>response_model</SpanYellow>?
            <ULdisc>
              <Li>FastAPI will simply Take whatever you return</Li>
              <Li>Try to JSON-serialize it</Li>
              <Li>Send it back as the HTTP response</Li>
              <Li>
                No <SpanYellow>validation</SpanYellow>, no filtering, no <SpanYellow>schema</SpanYellow> enforcement.
              </Li>
              <Li>
                <SpanYellow>response_model</SpanYellow> gives you extra guarantees and features, Response validation, Field filtering (very important
                for APIs) , Better OpenAPI / Swagger docs
              </Li>
            </ULdisc>
          </Li>
          <Li>
            Summarize :
            <ULdisc>
              <Li>✅ You can return responses without response_model</Li>
              <Li>❌ You lose validation, filtering, and clean docs</Li>
              <Li>⭐ Best practice: use response_model for real endpoints</Li>
            </ULdisc>
          </Li>
          <Li>
            Headers and status are controlled via Response (or <SpanYellow>status_code</SpanYellow> parameter).
          </Li>
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
