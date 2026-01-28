/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_DefaultBehavior = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        In Spring Boot, if I throw an exception and don’t catch it, the default error handler returns a JSON body with details (unless you override
        it).
        <PythonHighlight pythonCode={_1_} />
        In FastAPI, the behavior is a bit different:
        <ULdisc>
          <Li>
            If I raise an exception(e.g., <mark>RuntimeError</mark> )
            <PythonHighlight pythonCode={_2_} />
          </Li>
          <Li>
            FastAPI returns <SpanGrey>HTTP 500</SpanGrey> with a generic body like below
          </Li>
          <Li>It does not expose the exception message by default (for safety).</Li>
          <Li>The front End (Postman for example) will see the message below, and pythin console will show trace of the error</Li>
          <PythonHighlight pythonCode={_3_} />
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">✅ HTTPException</h2>
        <ULdisc>
          <Li>
            If you raise <SpanGrey>HTTPException</SpanGrey>, <PythonHighlight pythonCode={_4_} />
            FastAPI send the message , Example Postman shows message of <ApplicationPropertiesHighlight propertiesCode={_5_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_DefaultBehavior;

const _1_ = `{
    "timestamp": "2025-09-11T09:17:56.839+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "exception": "UserAlreadyExistError",
    "message": "User Shabtay already exist",
    "path": "/user/shabtay"
}
`;

const _2_ = `@router.get("/checkError")
def check_error():
    if True:
        raise RuntimeError("RuntimeError exception")`;

const _3_ = `"Internal server error"`;

const _4_ = `from fastapi import HTTPException

@router.get("/checkError")
def check_error():
    if True:
        raise HTTPException(detail="Internal server error", status_code=500)`;

const _5_ = `{
    "detail": "Internal server error"
}`;
