/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O2_DBInitDataSqlPostgres = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          <SpanYellow>DataBase Init with SQLAlchemy</SpanYellow>
        </article>
        <ULdisc>
          <Li>
            Init DB like Spring <SpanYellow>data.sql</SpanYellow> style{" "}
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_DBInitDataSqlPostgres;

const _1_ = `from fastapi import FastAPI
from contextlib import asynccontextmanager
import anyio

from api.user_router import router as user_router

from sqlalchemy import text
from core.db import Base, engine


@asynccontextmanager
async def life_span(app: FastAPI):
    def init_db():
        Base.metadata.drop_all(bind=engine)
        Base.metadata.create_all(bind=engine)

        with engine.begin() as conn:
            with open("data.sql") as f:
                conn.exec_driver_sql(f.read())

    await anyio.to_thread.run_sync(init_db)
    yield


app = FastAPI(lifespan=life_span)`;
