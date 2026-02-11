/*


*/

import { MainChildArea } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O6_Database_AllTogether = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">
            All together in <SpanYellow>database.py</SpanYellow>
          </span>
        </article>

        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O6_Database_AllTogether;

const _1_ = `from sqlalchemy import create_engine
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
