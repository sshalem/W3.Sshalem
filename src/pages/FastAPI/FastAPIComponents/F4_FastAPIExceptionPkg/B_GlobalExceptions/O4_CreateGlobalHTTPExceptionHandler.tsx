/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_CreateGlobalHTTPExceptionHandler = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Create Global HTTPException Handler</h2>
        <ULdisc>
          <Li>
            In <SpanGrey>global_exception_handlers.py</SpanGrey> copy and paste code below
          </Li>
          <Li>🔥 This gives you Spring Boot–style errors everywhere, automatically.</Li>
          <Li>🔥 This is your Spring @ControllerAdvice equivalent.</Li>
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_CreateGlobalHTTPExceptionHandler;

const _1_ = `from fastapi import Request, HTTPException, FastAPI
from fastapi.responses import JSONResponse
from datetime import datetime
from http import HTTPStatus

app = FastAPI()


@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    status = HTTPStatus(exc.status_code)
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "timestamp": datetime.utcnow().isoformat(),
            "status": exc.status_code,
            "error": status.phrase,
            "message": exc.detail,
            "path": request.url.path
        }
    )
`;
