/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import python_34 from "../../../../../assets/python_34.jpg";
import { Link } from "react-router-dom";
import Table_2ColCompareSpringVsFastAPI from "../../../../../components/Tables/Table_2ColCompareSpringVsFastAPI";

const O0_FastAPISetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">✅ Project setup with router only (Same as RestController)</div>
        <div className="my-8">
          These steps I shows with details in section{" "}
          <Link to={"/python/fastapi/setup-fastapi"} className="font-semibold text-blue-600">
            setup-fastapi
          </Link>
          <ULdisc>
            <Li>Create Pure Python Project</Li>
            <Li>Install Fast API</Li>
            <Li>create requirements.txt file</Li>
          </ULdisc>
        </div>
        <div className="my-8">
          <SpanRed>Important Note</SpanRed>
          <ULdisc>
            <Li>
              always create a <SpanGrey>python package</SpanGrey> where it create a <SpanGrey>__init__</SpanGrey> file.
            </Li>
            <Li>best for imports, does not break when imports used between packages/files</Li>
          </ULdisc>
        </div>
        <div className="my-8 text-lg font-semibold">1️⃣ Create following packages</div>
        <ULdisc>
          <Li>
            <SpanGrey>core</SpanGrey> - <strong>python package</strong> , and place here the <SpanGrey>logging_config.py</SpanGrey>
          </Li>
          <Li>
            <SpanGrey>students</SpanGrey> - <strong>python package</strong> , where I will have for it
          </Li>
          <IMG img_name={python_34}></IMG>
        </ULdisc>
        <hr />
        <div className="my-8 text-lg font-semibold">2️⃣ core package</div>
        <ULdisc>
          <Li>
            <SpanGrey>logging_config.py</SpanGrey> - see section{" "}
            <Link className="font-semibold text-blue-600" to={"python/fastapi/logging-fastapi#4.logging_config.py"}>
              logging_config
            </Link>
          </Li>
        </ULdisc>
        <hr />
        <div className="my-8 text-lg font-semibold">3️⃣ students package</div>
        <ULdisc>
          <Li>
            <SpanGrey>schemas.py</SpanGrey> - DTO class represantation (See the{" "}
            <Link className="font-semibold text-blue-600" to={"#Pydantic"}>
              Pydantic section
            </Link>
            )
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            <SpanGrey>router.py</SpanGrey> - see next section
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_FastAPISetup;

const _1_ = `from pydantic import BaseModel


class StudentDtoRequest(BaseModel):
    first_name: str
    last_name: str
    age: int


class StudentDtoResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    age: int
`;
