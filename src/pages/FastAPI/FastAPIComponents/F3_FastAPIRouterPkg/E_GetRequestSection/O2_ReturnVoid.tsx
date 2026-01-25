/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight } from "../../../../../components/Highlight";

const O2_ReturnVoid = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Return Void</article>
        <ULdisc>
          <Li></Li>
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O2_ReturnVoid;

const _1_ = `from fastapi import APIRouter
from students.schemas import StudentDtoResponse

# GET with Response Model (produces)
@router.get("/student", response_model=StudentDtoResponse)
def get_student():
    logger.debug("test student url")
    # Build and return the Pydantic model (or dict)
    # StudentDtoResponse is a Pydantic model
    return StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50)`;
