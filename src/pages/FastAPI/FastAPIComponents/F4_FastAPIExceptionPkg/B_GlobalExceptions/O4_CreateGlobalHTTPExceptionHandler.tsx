/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_CreateGlobalHTTPExceptionHandler = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Create Global HTTPException Handler</h2>
        <ULdisc>
          <Li>
            In <SpanYellow>global_exception_handlers.py</SpanYellow> copy and paste code below
          </Li>
          <Li>This gives you Spring Boot–style errors everywhere, automatically. (Spring @ControllerAdvice equivalent)</Li>
          <Li>
            🔥 See I pass the <SpanYellow>app: FastAPI</SpanYellow>
            parameter here .
          </Li>
          <Li>
            🔥 I call this function from <SpanYellow>main.py</SpanYellow>
          </Li>
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

from exceptions.student_exceptions import UserAlreadyExistError, UserNotFoundError


def error_response(*, status_code: int, exception: str, message: str, path: str):
    status = HTTPStatus(status_code)
    return {
        "timestamp": datetime.utcnow().isoformat(),
        "status": status_code,
        "error": status.phrase,
        "exception": exception,
        "message": message,
        "path": path,
    }


def register_exception_handlers(app: FastAPI):
    # --- HTTPException (401, 403, 404, etc.) ---
    @app.exception_handler(HTTPException)
    async def http_exception_handler(request: Request, exc: HTTPException):
        return JSONResponse(status_code=exc.status_code,
                            content=error_response(status_code=exc.status_code, 
                                                   message=exc.detail,
                                                   path=request.url.path))

    @app.exception_handler(UserAlreadyExistError)
    async def user_exists_handler(request: Request, exc: UserAlreadyExistError):
        print(UserAlreadyExistError.__module__)
        return JSONResponse(status_code=409,
                            content=error_response(status_code=409, 
                                                   exception="UserAlreadyExistError", 
                                                   message=str(exc),
                                                   path=request.url.path))

    @app.exception_handler(UserNotFoundError)
    async def user_exists_handler(request: Request, exc: UserNotFoundError):
        return JSONResponse(status_code=409,
                            content=error_response(status_code=409, 
                                                   exception="UserNotFoundError", 
                                                   message=str(exc),
                                                   path=request.url.path))

`;
