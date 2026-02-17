/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGreen, SpanGrey, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O5_PostgresFastAPILifeSpan = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            In <SpanYellow>main.py</SpanYellow> paste code below
          </Li>
          <Li>
            🔎 Why <SpanGrey>exec_driver_sql()</SpanGrey> instead of <SpanGrey>execute(text())</SpanGrey> ? because:
            <ULdisc>
              <Li>
                <SpanYellow>conn.exec_driver_sql(sql_script)</SpanYellow> :
              </Li>
              <ULdisc>
                <Li>Executes raw SQL directly</Li>
                <Li>Supports multiple statements</Li>
                <Li>Cleaner for full SQL files</Li>
              </ULdisc>
            </ULdisc>
            <ULdisc>
              <Li>
                While <SpanYellow>conn.execute(text(sql_script))</SpanYellow> :
              </Li>
              <ULdisc>
                <Li>Designed for single statements</Li>
                <Li>May fail with multi-line scripts</Li>
              </ULdisc>
            </ULdisc>
          </Li>
          <Li>
            ⚠️ The Core Issue (async / sync)
            <ULdisc>
              <Li>
                <SpanYellow>Base.metadata.create_all()</SpanYellow> and <SpanYellow>engine.begin()</SpanYellow> are <strong>blocking (sync)</strong>{" "}
                operations.
              </Li>
              <ULdisc>
                <Li>
                  FastAPI runs on <SpanYellow>async event loop</SpanYellow> (ASGI).
                </Li>
                <Li>
                  If we execute <SpanYellow>blocking DB</SpanYellow> code directly inside an <SpanYellow>async function</SpanYellow> →{" "}
                  <SpanRed>we block the event loop</SpanRed>.
                </Li>
                <Li>
                  thus, we run the function as <SpanYellow>anyio.to_thread.run_sync()</SpanYellow> , which runs blocking code safely
                </Li>
                <Li>Moves blocking SQLAlchemy code to a thread</Li>
                <Li>Does NOT block event loop</Li>
                <Li>Safe for async apps</Li>
                <Li>
                  Recommended when using <SpanGreen>sync</SpanGreen> SQLAlchemy engine
                </Li>
              </ULdisc>
            </ULdisc>
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
        <div className="text-xl">🧠 Cleaner Pattern (Professional Way)</div>
        <PythonHighlight pythonCode={_2_} />
      </section>
    </MainChildArea>
  );
};

export default O5_PostgresFastAPILifeSpan;

const _1_ = `from fastapi import FastAPI
from contextlib import asynccontextmanager
import anyio
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

const _2_ = `from fastapi import FastAPI
from contextlib import asynccontextmanager
import anyio
from core.db import Base, engine


def init_db():
    Base.metadata.create_all(bind=engine)
    with engine.begin() as conn:
        with open("data.sql") as f:
            conn.exec_driver_sql(f.read())

@asynccontextmanager
async def life_span(app: FastAPI):
    await anyio.to_thread.run_sync(init_db)
    yield
`;
