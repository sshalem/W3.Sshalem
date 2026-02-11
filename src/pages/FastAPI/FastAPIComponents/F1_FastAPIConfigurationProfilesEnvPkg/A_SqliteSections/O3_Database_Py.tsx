/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_Database_Py = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold"></article>
        In <SpanYellow>database.py</SpanYellow> I define how to connect to DB, the Session, DecalrativeBase
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">⭐ 1. Database engine</span>
        </article>
        <ULdisc>
          <Li>
            Database engine (same as Spring boot <SpanYellow> DataSource + Dialect + Connection Pool + Execution Layer</SpanYellow> )
          </Li>
          <Li>Execution (in Python you execute via Engine/Connection; in Java you’d use JdbcTemplate or Hibernate)</Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">⭐ 2. Session</span>
        </article>
        <ULdisc>
          <Li>
            Session ORM unit of work (same as Spring boot <SpanYellow>EntityManager (EntityManagerFactory)</SpanYellow>)
          </Li>
          <Li>Session (SQLAlchemy ORM) ≈ EntityManager</Li>
        </ULdisc>
        <JavaHighlight javaCode={_2_} />
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">⭐ 3. Base (DeclarativeBase)</span>
        </article>
        <ULdisc>
          <Li>Base (DeclarativeBase) A shared ORM base class and mapper registry + metadata</Li>
          <Li>In Spring boot , JPA entity system managed by the EntityManagerFactory; entities are POJOs annotated with @Entity.</Li>
        </ULdisc>
        <JavaHighlight javaCode={_3_} />
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">⭐ 4. Dependency for DB session</span>
        </article>
        <ULdisc>
          <Li>Dependency for DB session</Li>
          <Li>FastAPI uses dependency injection, not magic annotations.</Li>
          <PythonHighlight pythonCode={_4_} />
        </ULdisc>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">⭐ All together in database.py</span>
        </article>
        <PythonHighlight pythonCode={_5_} />
      </section>
    </MainChildArea>
  );
};

export default O3_Database_Py;

const _1_ = `engine = create_engine(
    "sqlite:///example.db",
    echo=True,
    connect_args={"check_same_thread": False}
)`;

const _2_ = `SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, expire_on_commit=False)`;

const _3_ = `class Base(DeclarativeBase):
    pass`;

const _4_ = `# same as 
# @PersistenceContext
# EntityManager em
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`;

const _5_ = `from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session, DeclarativeBase
from typing import Generator

engine = create_engine(
    "sqlite:///example.db",
    echo=True,
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
        db.close()
`;
