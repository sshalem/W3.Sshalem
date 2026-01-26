/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

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
            If you raise a generic Python exception (e.g., RuntimeError), FastAPI returns <SpanGrey>HTTP 500</SpanGrey> with a generic body like below
            — it does not expose the exception message by default (for safety).
            <PythonHighlight pythonCode={_2_} />
          </Li>
          <Li>
            If you raise <SpanGrey>HTTPException</SpanGrey>, FastAPI send your message to the client in <PythonHighlight pythonCode={_2_} />
            Postman shows message of <PythonHighlight pythonCode={_3_} />
          </Li>
          <Li>
            You can also add custom exception handlers to map your exceptions to structured JSON, just like{" "}
            <SpanGrey>Spring’s @ControllerAdvice</SpanGrey> .
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_DefaultBehavior;

const _1_ = `{
    "timestamp": "",
    "status": ""
    "error": "",
    "trace": "",
    "message": "",
    "path": ""
}
`;

const _4_ = `"Internal server error"`;

const _2_ = `from fastapi import HTTPException

@router.get("/checkError")
def check_error():
    if True:
        raise HTTPException(detail="Internal server error", status_code=500)`;

const _3_ = `{
    "detail": "Internal server error"
}
`;
