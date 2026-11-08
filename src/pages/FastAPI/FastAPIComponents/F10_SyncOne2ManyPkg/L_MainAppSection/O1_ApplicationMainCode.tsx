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

const _1_ = `from fastapi import FastAPI
from fastapi.responses import JSONResponse

from app.config.settings import settings
from app.database.database import engine, Base, test_connection
from app.controller.customer_controller import router as customer_router
from app.exceptions.exception_handlers import register_exception_handlers

# Create FastAPI application
customer_app = FastAPI(title=settings.APP_NAME, version="1.0.0")

# Create database tables (temporary - until we introduce Alembic)
Base.metadata.create_all(bind=engine)

# Register global exception handlers
register_exception_handlers(customer_app)

# Register API controllers
customer_app.include_router(customer_router)


@customer_app.get("/")
def root():
    return {"message": "Customer Management API is running"}
`;
