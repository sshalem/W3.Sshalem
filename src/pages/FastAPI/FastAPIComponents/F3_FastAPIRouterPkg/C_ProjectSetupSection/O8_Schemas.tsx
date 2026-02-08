/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";
import { Link } from "react-router-dom";

const O8_Schemas = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">✅ Schemas (DTO)</div>
        <div className="my-8 text-lg font-semibold">3️⃣ schemas file</div>
        <ULdisc>
          <Li>
            create <SpanYellow>schemas.py</SpanYellow> file - I holds all DTO class represantation (See the{" "}
            <Link className="font-semibold text-blue-600" to={"/fastapi/router/pydantic"}>
              Pydantic section
            </Link>
            )
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O8_Schemas;

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
