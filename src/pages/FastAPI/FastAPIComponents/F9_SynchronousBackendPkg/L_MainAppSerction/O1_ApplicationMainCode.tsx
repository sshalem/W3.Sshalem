/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_JAVA, SpanEmerald } from "../../../../../components/Highlight";

const O1_ApplicationMainCode = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">app/main.py</div>

        <div>
          Now we need to modify <SpanEmerald>app/main.py</SpanEmerald> with code below
        </div>
        <Highlight_JAVA code={_1_}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O1_ApplicationMainCode;

const _1_ = `from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.config.settings import settings
from app.database.database import engine, Base, test_connection
from app.models.customer import Customer
from app.controller.customer_controller import router as customer_router
from app.exceptions.custom_exceptions import (CustomerNotFoundError, CustomerConflictError)

customeApp = FastAPI(title=settings.APP_NAME, version="1.0.0")

# Temporary table creation for our learning project.
# We will replace this with Alembic migrations later.
Base.metadata.create_all(bind=engine)

customeApp.include_router(customer_router)


@customeApp.exception_handler(CustomerNotFoundError)
async def customer_not_found_handler(request: Request, exc: CustomerNotFoundError):
    return JSONResponse(status_code=404, content={"detail": str(exc)})


@customeApp.exception_handler(CustomerConflictError)
async def customer_conflict_handler(request: Request, exc: CustomerConflictError):
    return JSONResponse(status_code=409, content={"detail": str(exc)})


@customeApp.get("/")
def root():
    return {
        "message": "Customer Management API is running"
    }


@customeApp.get("/health/db")
def database_health():
    try:
        result = test_connection()
        return {
            "database": "connected",
            "result": result
        }
    except Exception:
        return JSONResponse(status_code=503, content={"database": "unavailable"})
`;
