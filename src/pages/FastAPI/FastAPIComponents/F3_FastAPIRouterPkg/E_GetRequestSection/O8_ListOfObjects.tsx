/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O8_ListOfObjects = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            Return <SpanYellow>List of objects</SpanYellow> <br />
          </Li>
          <Li>
            See that <SpanYellow>response_model=List[StudentDtoResponse]</SpanYellow>
          </Li>
        </ULdisc>

        <PythonHighlight pythonCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O8_ListOfObjects;

const _1_ = `from typing import List

@router.get("/allStudents", response_model=List[StudentDtoResponse])
def get_all_students():
    students = [
        StudentDtoResponse(id=1, first_name="shabtay", last_name="shalem", age=50),
        StudentDtoResponse(id=2, first_name="karin", last_name="shalem", age=50),
    ]
    return students`;
