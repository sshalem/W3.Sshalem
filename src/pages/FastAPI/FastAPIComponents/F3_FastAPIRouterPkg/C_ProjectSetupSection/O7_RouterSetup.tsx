/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, PythonHighlight, SpanYellow } from "../../../../../components/Highlight";
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
            <SpanYellow>core package</SpanYellow> - holds configuration files ENV, profiles Logging <SpanYellow>logging_config.py</SpanYellow> - see section{" "}
            <Link className="font-semibold text-blue-600" to={"python/fastapi/logging-fastapi#4.logging_config.py"}>
              logging_config
            </Link>
          </Li>
          <Li>
            <SpanYellow>students package</SpanYellow> - Holds the <SpanYellow>students</SpanYellow> corresponding logic (router, schemas, SQLAlchemy, DB
            connection, Buisness Logic ETC... )
          </Li>
          <IMG img_name={python_34}></IMG>
        </ULdisc>

        <hr />

        <div className="my-8 text-lg font-semibold">2️⃣ create file router.py (Same as RestController)</div>
        <ULdisc>
          <Li>
            create a file <SpanYellow>router.py</SpanYellow>
          </Li>
          <Li>
            create an Instance of <SpanYellow>APIRouter()</SpanYellow>
            <JsxHighlight jsxCode={_1_} />
          </Li>
        </ULdisc>
        <hr />
        <div className="my-8 text-lg font-semibold">3️⃣ mount the router in main.py</div>
        <ULdisc>
          <Li>
            mount the router in <SpanYellow>main.py</SpanYellow>
          </Li>
          <Li>
            See how I import the router form <SpanYellow>students</SpanYellow> file and gave it alias name
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
