/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O6_PostgresFastAPILifeSpanWrongWay = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl">❌ Option 2 (Technically Wrong)</div>
        <ULdisc>
          <Li>
            In <SpanYellow>main.py</SpanYellow> paste code below
          </Li>
          <Li>
            🔎 Why Technically Wrong?
            <ULdisc>
              <Li>Runs blocking DB calls inside async function</Li>
              <Li>Blocks event loop during startup</Li>
              <Li>Not scalable pattern</Li>
              <Li>Can freeze app if DB is slow</Li>
            </ULdisc>
            It <SpanYellow>works in small apps</SpanYellow> — but it's <SpanRed>bad async hygiene</SpanRed>.
          </Li>
        </ULdisc>
        <div className="my-8 text-xl">🧠 When Would this Be Acceptable?</div>
        <ULdisc>
          <Li>
            Only if:
            <ULdisc>
              <Li>
                You are using a fully <SpanYellow>synchronous</SpanYellow> FastAPI app
              </Li>
              <Li>Or this is just a small local dev experiment</Li>
            </ULdisc>
            But architecturally → Option in section 5 is correct.
          </Li>
        </ULdisc>
        <div className="my-8 text-xl">
          🤢 what is a <SpanYellow>fully synchronous FastAPI app</SpanYellow>
        </div>
        <ULdisc>
          <Li>
            An app where all your route handlers and database calls are synchronous (def), and you don’t use <SpanYellow>async</SpanYellow> anywhere
            in your business logic.
          </Li>
          <Li>
            An app where you use def endpoints + sync database + <SpanRed>no async logic</SpanRed>, letting FastAPI’s internal threadpool handle
            blocking operations.
          </Li>
        </ULdisc>

        <div className="my-8 text-xl">🧠 Why It’s OK</div>
        <ULdisc>
          <Li>
            Even though lifespan is defined as: <SpanYellow>async def</SpanYellow>
          </Li>
          <Li>
            your database operations are:
            <ULdisc>
              <Li>synchronous</Li>
              <Li>executed once at startup</Li>
              <Li>before the app starts serving requests</Li>
            </ULdisc>
            <Li>
              So:
              <ULdisc>
                <Li>You are not blocking active request handling</Li>
                <Li>You are not harming concurrency</Li>
                <Li>It runs once and finishes</Li>
              </ULdisc>
              That’s totally acceptable.
            </Li>
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O6_PostgresFastAPILifeSpanWrongWay;

const _1_ = `from fastapi import FastAPI
from contextlib import asynccontextmanager
import anyio
from core.db import Base, engine


@asynccontextmanager
async def life_span(app: FastAPI):
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    with engine.begin() as conn:
        with open("data.sql") as f:
            conn.exec_driver_sql(f.read())
    yield

app = FastAPI(lifespan=life_span)`;
