/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, PythonHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_34 from "../../../../../assets/python_34.jpg";
import { Link } from "react-router-dom";

const O7_RouterSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">✅ Setup Router (Same as RestController)</div>
        <div className="my-8 text-lg font-semibold">1️⃣ Create following packages</div>
        <ULdisc>
          <Li>
            <SpanGrey>core package</SpanGrey> - holds configuration files ENV, profiles Logging <SpanGrey>logging_config.py</SpanGrey> - see section{" "}
            <Link className="font-semibold text-blue-600" to={"python/fastapi/logging-fastapi#4.logging_config.py"}>
              logging_config
            </Link>
          </Li>
          <Li>
            <SpanGrey>students package</SpanGrey> - Holds the <SpanGrey>students</SpanGrey> corresponding logic (router, schemas, SQLAlchemy, DB
            connection, Buisness Logic ETC... )
          </Li>
          <IMG img_name={python_34}></IMG>
        </ULdisc>

        <hr />

        <div className="my-8 text-lg font-semibold">2️⃣ create file router.py (Same as RestController)</div>
        <ULdisc>
          <Li>
            create a file <SpanGrey>router.py</SpanGrey>
          </Li>
          <Li>
            create an Instance of <SpanGrey>APIRouter()</SpanGrey>
            <JsxHighlight jsxCode={_1_} />
          </Li>
        </ULdisc>
        <hr />
        <div className="my-8 text-lg font-semibold">3️⃣ mount the router in main.py</div>
        <ULdisc>
          <Li>
            mount the router in <SpanGrey>main.py</SpanGrey>
          </Li>
          <Li>
            See how I import the router form <SpanGrey>students</SpanGrey> file and gave it alias name
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O7_RouterSetup;

const _1_ = `from fastapi import APIRouter

router = APIRouter()`;

const _2_ = `from fastapi import FastAPI
from students.router import router as students_router

app = FastAPI()

# mount the router to app
app.include_router(router=students_router, prefix="/api",tags=["Students"])`;
