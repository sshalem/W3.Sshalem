/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O6_EnvFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        🔥 Important Production Insight
        <ULdisc>
          <Li>
            we usually <SpanRed>DO NOT</SpanRed> use <SpanYellow>.env</SpanYellow>.
          </Li>
          <Li>
            <SpanYellow>.env</SpanYellow> Used mostly in Local development, Simpler projects
          </Li>
        </ULdisc>
        Let's see how to use <SpanYellow>.env</SpanYellow> file with <SpanYellow>config.py</SpanYellow>
        {/* <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">.env</span>
        </article> */}
        <ULdisc>
          <Li>
            <SpanYellow>.env</SpanYellow> does nothing by itself.
          </Li>
          <Li>
            <SpanYellow>.env</SpanYellow> is just a plain text file with environment variables.
          </Li>
          <Li>
            It must be:
            <ULdisc>
              <Li>Loaded by something (pydantic-settings, python-dotenv, Docker, OS, etc.)</Li>
              <Li>Or injected as real environment variables</Li>
            </ULdisc>
          </Li>
          <Li>
            So you must explicitly say , in <SpanYellow>config.py</SpanYellow>
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            That tells Pydantic, <SpanYellow>"Go read that file."</SpanYellow>
          </Li>
          <Li>
            “If a value is not provided in the system environment, also look for it in a file called <SpanYellow>.env</SpanYellow> .”
          </Li>
        </ULdisc>
        <article className="my-8 text-lg">
          <SpanYellow>.env</SpanYellow>
          <PythonHighlight pythonCode={_2_} />
        </article>
        <article className="my-8 text-lg">
          <SpanYellow>config.py</SpanYellow>
          <PythonHighlight pythonCode={_3_} />
        </article>
        <article className="my-8 text-lg">
          <SpanYellow>database.py</SpanYellow>
          💡 Professional, modern Pydantic v2 style (Cleaner for v2) :
          <PythonHighlight pythonCode={_4_} />
        </article>
      </section>
    </MainChildArea>
  );
};

export default O6_EnvFastApi;

const _1_ = `model_config = SettingsConfigDict(env_file=".env")`;

const _2_ = `DATABASE_URL=sqlite:///example.db
ECHO_SHOW_SQL=True`;

const _3_ = `from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DATABASE_URL: str
    ECHO_SHOW_SQL: bool

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()`;

const _4_ = `from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session, DeclarativeBase
from typing import Generator

from core.config import settings

engine = create_engine(
    settings.DATABASE_URL,
    echo=settings.ECHO_SHOW_SQL,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, expire_on_commit=False)


class Base(DeclarativeBase):
    pass


def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`;
