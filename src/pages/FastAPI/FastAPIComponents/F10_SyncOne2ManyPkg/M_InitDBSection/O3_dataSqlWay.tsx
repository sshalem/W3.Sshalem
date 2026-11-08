/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O3_dataSqlWay = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">data.sql</div>

        <ULdisc>
          <Li>
            Similar to the way I use in Spring boot <SpanEmerald>data.sql</SpanEmerald>
          </Li>
          <Li>
            create file <SpanEmerald>data.sql</SpanEmerald> ,Inside Package <SpanEmerald>app/database</SpanEmerald>
            <Highlight_ApplicationProperties code={_0_} />
          </Li>
          <Li>
            The data I want to insert <SpanEmerald>data.sql</SpanEmerald>
            <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>
            Modify <SpanEmerald>main.py</SpanEmerald> and add this code
            <Highlight_PYTHON code={_2_} />
          </Li>
          <Li>
            This is the Full code
            <Highlight_PYTHON code={_3_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_dataSqlWay;

const _0_ = `customer-management/
├── app/
├── database/
│   ├── __init.py__
│   ├── data.sql
│   └── database.py
`;

const _1_ = `INSERT INTO customers (first_name, last_name, email, age)
VALUES
    ('Shabtay', 'Shalem', 'shabtay@gmail.com', 25),
    ('Karin', 'Shalem', 'karin@gmail.com', 22),
    ('John', 'Smith', 'john@example.com', 30),
    ('David', 'Cohen', 'david@example.com', 35);`;

const _2_ = `def init_db():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    sql_file = Path("app/database/data.sql")
    with engine.begin() as connection:
        connection.exec_driver_sql(sql_file.read_text(encoding="utf-8"))


@asynccontextmanager
async def lifespan(app: FastAPI):
    await anyio.to_thread.run_sync(init_db)
    yield
    
    
# Create FastAPI application
customer_app = FastAPI(title=settings.APP_NAME, version="1.0.0", lifespan=lifespan)`;

const _3_ = `from contextlib import asynccontextmanager
from pathlib import Path

import anyio
from fastapi import FastAPI

from app.config.settings import settings
from app.database.database import engine, Base
from app.controller.customer_controller import router as customer_router
from app.exceptions.exception_handlers import register_exception_handlers


def init_db():
    # Drop/Create tables
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    sql_file = Path("app/database/data.sql")
    with engine.begin() as connection:
        connection.exec_driver_sql(sql_file.read_text(encoding="utf-8"))


@asynccontextmanager
async def lifespan(app: FastAPI):
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


@customer_app.get("/")
def root():
    return {"message": "Customer Management API is running"}
`;
