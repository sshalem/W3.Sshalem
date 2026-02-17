/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_PostgresSetupDbConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            create <SpanYellow>db.py</SpanYellow> file, inside <SpanYellow>core</SpanYellow> package
          </Li>
          <Li>
            Copy/Paste code
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_PostgresSetupDbConfig;

const _1_ = `from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session, DeclarativeBase
from typing import Generator

engine = create_engine(
    "postgresql+psycopg://postgres:postgres@localhost:5432/pythonDB",
    pool_pre_ping=True,
    pool_size=5,
    max_overflow=10,
    echo=True,
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
