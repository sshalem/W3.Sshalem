/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O1_ApplicationMainCode = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">app/main.py</div>

        <div>
          Now we need to modify <SpanEmerald>app/main.py</SpanEmerald> with code below
        </div>
        <ULdisc>
          <Li>Notice what I've registered</Li>
          <Li>Now I also have order controller registered</Li>
        </ULdisc>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O1_ApplicationMainCode;

const _1_ = `from contextlib import asynccontextmanager
from pathlib import Path

import anyio
from fastapi import FastAPI

from app.config.settings import settings
from app.database.database import engine, Base
from app.controller import customer_controller, order_controller
from app.exceptions.exception_handlers import register_exception_handlers

# Both model classes register their tables in Base.metadata.
from app.models import Customer, Order


def init_db():
    # Drop/Create tables
    Base.metadata.drop_all(bind=engine)
    # Create all registered tables (In Database) (temporary - until we introduce Alembic)
    Base.metadata.create_all(bind=engine)
    sql_file = Path("app/database/data.sql")
    with engine.begin() as connection:
        connection.exec_driver_sql(sql_file.read_text(encoding="utf-8"))


@asynccontextmanager
async def lifespan(app: FastAPI):
    await anyio.to_thread.run_sync(init_db)
    yield


# Create FastAPI application
one2many_app = FastAPI(title=settings.APP_NAME, version="1.0.0", lifespan=lifespan)

# Create all registered tables (In Database) (temporary - until we introduce Alembic)
Base.metadata.create_all(bind=engine)

# Register global exception handlers
register_exception_handlers(one2many_app)

# Register API controllers
one2many_app.include_router(customer_controller.router)
one2many_app.include_router(order_controller.router)
`;
