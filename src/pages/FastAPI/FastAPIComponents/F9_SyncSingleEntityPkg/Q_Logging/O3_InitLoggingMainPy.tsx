/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O3_InitLoggingMainPy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Initialize logging in main.py</div>
        <ULdisc>
          <Li>Now we need to initialize logging when FastAPI starts. (see code below)</Li>
          <Li></Li>
        </ULdisc>
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O3_InitLoggingMainPy;

const _1_ = `import logging
from contextlib import asynccontextmanager
from pathlib import Path

import anyio
from fastapi import FastAPI

from app.config.logging_config import setup_logging
from app.config.settings import settings
from app.database.database import engine, Base
from app.controller.customer_controller import router as customer_router
from app.exceptions.exception_handlers import register_exception_handlers

logger = logging.getLogger(__name__)


def init_db():
    # Drop/Create tables
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    sql_file = Path("app/database/data.sql")
    with engine.begin() as connection:
        connection.exec_driver_sql(sql_file.read_text(encoding="utf-8"))


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize logging first
    setup_logging()
    await anyio.to_thread.run_sync(init_db)
    yield


# Create FastAPI application
customer_app = FastAPI(title=settings.APP_NAME, version="1.0.0", lifespan=lifespan)

# Create database tables (temporary - until we introduce Alembic)
Base.metadata.create_all(bind=engine)

# Register global exception handlers
register_exception_handlers(customer_app)

# Register API controllers
customer_app.include_router(customer_router)
`;
