/*


*/

import { MainChildArea } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O7_QueryEnumParameters = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        GET with <SpanYellow>query ENUM parameters</SpanYellow> <br />
        Via Postman send the url request as follows : <SpanYellow>localhost:8000//api/studentOrder?order=asc</SpanYellow>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O7_QueryEnumParameters;

const _1_ = `from enum import Enum

class SortOrder(str, Enum):
    asc = "asc"
    desc = "desc"

@router.get("/studentOrder")
def get_students(order: SortOrder = SortOrder.asc):
    return {"order": order}`;
