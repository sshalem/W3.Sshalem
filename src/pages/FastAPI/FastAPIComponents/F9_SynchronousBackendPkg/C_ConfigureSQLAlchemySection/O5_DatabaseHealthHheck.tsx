/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O5_DatabaseHealthHheck = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold"></div>
        <ULDecimal>
          <Li>
            create <SpanEmerald>app/main.py</SpanEmerald>
          </Li>
          <Li>
            Notice that <SpanEmerald>@app.get()</SpanEmerald> is a Python decorator.
          </Li>
        </ULDecimal>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O5_DatabaseHealthHheck;

const _1_ = `from fastapi import FastAPI, HTTPException
from sqlalchemy.exc import SQLAlchemyError

from app.config.settings import settings
from app.database.database import test_connection


app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Customer Management API is running"
    }


@app.get("/health/db")
def database_health():

    try:
        result = test_connection()

        return {
            "database": "PostgreSQL",
            "status": "Connected",
            "test_query_result": result
        }

    except SQLAlchemyError:
        raise HTTPException(
            status_code=503,
            detail="Database connection failed"
        )
`;
