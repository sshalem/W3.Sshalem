/*


*/

import { MainChildArea } from "../../../../../components";
import { Highlight_PYTHON, SpanYellow } from "../../../../../components/Highlight";

const O5_PathParameter = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        This is same as <SpanYellow>@PathVariable</SpanYellow> in <SpanYellow>Spring boot</SpanYellow>
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O5_PathParameter;

const _1_ = `@router.get("/student/{student_id}", status_code=200)
def get_student(student_id: int):
    logger.info(f"Student with id {student_id}")
    return {"id": student_id}
`;
