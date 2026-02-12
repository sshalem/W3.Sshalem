/*


*/

import { Answer, Li, MainChildArea, Question, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_ConfigPy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Let's see what the usage of <SpanYellow>config.py</SpanYellow>
        <Question>
          <div>
            🔎 Is <SpanYellow>config.py</SpanYellow> = <SpanYellow>application.properties</SpanYellow>?
          </div>
        </Question>
        <Answer>
          <div className="my-4">✅ Conceptually → YES , ❌ Technically → NOT exactly </div>
        </Answer>
        <div className="mt-8">In FastAPI</div>
        <ULdisc>
          <Li>Configuration is just data</Li>
          <Li>We explicitly use it</Li>
        </ULdisc>
        It used for
        <ULdisc>
          <Li>Store app configuration</Li>
          <Li>Load environment variables</Li>
          <Li>Centralize app settings</Li>
          <Li>Used to configure DB, debug mode, secrets, etc.</Li>
        </ULdisc>
        <SpanYellow>config.py</SpanYellow>
        <PythonHighlight pythonCode={_1_} />
        <SpanYellow>database.py</SpanYellow>
        <PythonHighlight pythonCode={_2_} />
      </section>
    </MainChildArea>
  );
};

export default O4_ConfigPy;

const _1_ = `from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = 'sqlite:///example.db'
    ECHO_SHOW_SQL: bool = True


settings = Settings()`;

const _2_ = `from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session, DeclarativeBase
from typing import Generator

from core.config import settings

engine = create_engine(
    settings.DATABASE_URL,
    echo=settings.ECHO_SHOW_SQL,  # → print every SQL statement to the console
    connect_args={"check_same_thread": False}  # → SQLite feature only
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

// const _2_ = `DATABASE_URL=sqlite:///example.db
// ECHO_SHOW_SQL=True`;

// const _3_ = `from pydantic_settings import BaseSettings, SettingsConfigDict

// class Settings(BaseSettings):
//     DATABASE_URL: str
//     ECHO_SHOW_SQL: bool

//     model_config = SettingsConfigDict(env_file=".env")

// settings = Settings()`;
