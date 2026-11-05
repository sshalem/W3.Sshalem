/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O1_DB_DepenInject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Database Dependency Injection</div>

        <ULdisc>
          <Li>Before implementing the Service, we need to understand how FastAPI manages database sessions.</Li>
          <Li>In Spring Boot, you usually inject a repository or service using Spring Dependency Injection.</Li>
          <Li>
            <SpanEmerald>Depends()</SpanEmerald> In FastAPI, we'll use it for dependency Injection .
          </Li>
          One important distinction:
          <ULdisc>
            <Li>
              <SpanEmerald>Depends()</SpanEmerald> is FastAPI's dependency injection mechanism.
            </Li>
            <Li>
              <SpanRed>It is not a full equivalent of Spring's application-wide IoC container.</SpanRed>
            </Li>
          </ULdisc>
          <Li>
            Open: <SpanEmerald>app/database/database.py</SpanEmerald> and add this function to it
          </Li>
          <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
        </ULdisc>

        <article>
          <div className="my-4">This function is a generator. Here's what happens: 1.</div>
          <ULdisc>
            <Li>A new SQLAlchemy session is created.</Li>
            <Li>The session is provided to the endpoint through dependency injection.</Li>
            <Li>The request executes.</Li>
            <Li>
              The session is closed in <SpanGrey>finally</SpanGrey>, even if an exception occurs.
            </Li>
            <Li>
              Our controller will eventually use: <SpanGrey>db: Session = Depends(get_db)</SpanGrey>
            </Li>
            <Li>Best practice to use only at controller level</Li>
          </ULdisc>
        </article>
        <div className="my-8 text-lg font-semibold">
          Full code of <SpanEmerald>app/database/database.py</SpanEmerald>
        </div>
        <Highlight_PYTHON code={_2_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O1_DB_DepenInject;

const _1_ = `
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`;

const _2_ = `from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base

from app.config.settings import settings

# Database connection URL
DATABASE_URL = (
    f"postgresql+psycopg://"
    f"{settings.DATABASE_USERNAME}:"
    f"{settings.DATABASE_PASSWORD}@"
    f"{settings.DATABASE_HOST}:"
    f"{settings.DATABASE_PORT}/"
    f"{settings.DATABASE_NAME}"
)

# Create SQLAlchemy Engine
engine = create_engine(DATABASE_URL, echo=True)

# Create Session Factory
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

# Base class for SQLAlchemy models
Base = declarative_base()


# same as  @PersistenceContext , EntityManager em
# Used for Dependency Injection
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Test database connection
def test_connection():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))

        print("Database connection successful!")
        print("Result:", result.scalar())
`;
