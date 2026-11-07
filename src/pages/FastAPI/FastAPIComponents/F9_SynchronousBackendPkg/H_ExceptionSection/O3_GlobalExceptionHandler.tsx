/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O3_GlobalExceptionHandler = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Exceptions</div>
        <ULdisc>
          <Li>
            Create: <SpanEmerald>app/exceptions/exception_handlers.py</SpanEmerald>
          </Li>
          <Li>Contains the mapping between application exceptions and HTTP responses.</Li>
          <Li>
            Now in <SpanEmerald>main.py</SpanEmerald> need to add this line
            <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
          </Li>
          <Li>
            Why this separation?
            <ULdisc>
              <Li>
                <SpanYellow>custom_exceptions.py</SpanYellow> : Defines what went wrong.
              </Li>
              <Li>
                <SpanYellow>exception_handlers.py</SpanYellow> : Defines how HTTP should respond.
              </Li>
              <Li>
                <SpanYellow>main.py</SpanYellow> : Assembles and starts the application.
              </Li>
            </ULdisc>
            <Li>This is the architecture I recommend keeping as the project grows.</Li>
            <Li>
              <SpanRed>One additional improvement for later</SpanRed> : We can create a global exception handler for unexpected errors, so internal
              exceptions return a consistent HTTP 500 response without exposing implementation details.
            </Li>
          </Li>
        </ULdisc>
        <Highlight_PYTHON code={_2_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O3_GlobalExceptionHandler;

const _1_ = `# Register exception handlers
register_exception_handlers(customer_app)`;

const _2_ = `from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from app.exceptions.custom_exceptions import (CustomerNotFoundError, CustomerConflictError)


def register_exception_handlers(app: FastAPI):

    @app.exception_handler(CustomerNotFoundError)
    async def customer_not_found_handler(request: Request, exc: CustomerNotFoundError):
        return JSONResponse(status_code=404, content={"detail": str(exc)})

    @app.exception_handler(CustomerConflictError)
    async def customer_conflict_handler(request: Request, exc: CustomerConflictError):
        return JSONResponse(status_code=409, content={"detail": str(exc)})
  `;
