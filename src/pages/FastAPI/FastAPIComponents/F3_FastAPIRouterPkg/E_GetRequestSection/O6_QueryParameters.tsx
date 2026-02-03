/*


*/

import { MainChildArea } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O6_QueryParameters = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        GET with <SpanYellow>query parameters</SpanYellow> <br />
        Via Postman send the url request as follows : <SpanYellow>localhost:8000/api/queryParameters?limit=5&offset=7</SpanYellow>
        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O6_QueryParameters;

const _1_ = `@router.get("/queryParameters")
def list_students(limit: int = 10, offset: int = 0):
    return {"limit": limit, "offset": offset}`;
