/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald } from "../../../../../components/Highlight";

const O4_ConfigSqlAlchemy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold"></div>
        <ULDecimal>
          <Li>
            create <SpanEmerald>app/database/database.py</SpanEmerald>
            <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
          </Li>
        </ULDecimal>
        Let's understand the Java equivalents.
        <ULdisc>
          <article className="w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white text-base shadow-sm">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 font-bold text-gray-800">
                  <th className="px-6 py-3.5">Python / SQLAlchemy</th>
                  <th className="px-6 py-3.5">Java / Hibernate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="px-6 py-3">
                    <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-base">create_engine()</code>
                  </td>
                  <td className="px-6 py-3">Database connection infrastructure</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">
                    <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-base">SessionLocal</code>
                  </td>
                  <td className="px-6 py-3">Session factory</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">
                    <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-base">Session</code>
                  </td>
                  <td className="px-6 py-3">Hibernate Session / persistence context</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">
                    <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-base">Base</code>
                  </td>
                  <td className="px-6 py-3">Base for ORM entity mapping</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">
                    <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-base">engine.connect()</code>
                  </td>
                  <td className="px-6 py-3">Direct database connection</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="my-8">
            <div>
              A few important details:
              <ULdisc>
                <Li>
                  <SpanEmerald>engine</SpanEmerald> manages database connectivity and connection pooling.
                </Li>
                <Li>
                  <SpanEmerald>SessionLocal</SpanEmerald> creates database sessions.
                </Li>
                <Li>
                  <SpanEmerald>Base</SpanEmerald> will be inherited by our SQLAlchemy entities.
                </Li>
                <Li>
                  <SpanEmerald>echo=True</SpanEmerald> prints SQL statements to the console. Useful during development.
                </Li>
              </ULdisc>
              One important detail: <SpanEmerald>SessionLocal</SpanEmerald> is a factory, not an actual database session. We'll create and close
              sessions per request later.
            </div>
          </article>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_ConfigSqlAlchemy;

const _1_ = `from sqlalchemy import create_engine, text
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
engine = create_engine(
    DATABASE_URL,
    echo=True
)


# Create Session Factory
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False
)


# Base class for SQLAlchemy models
Base = declarative_base()


# Test database connection
def test_connection():

    with engine.connect() as connection:

        result = connection.execute(text("SELECT 1"))

        print("Database connection successful!")
        print("Result:", result.scalar())`;
