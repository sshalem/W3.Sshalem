/*


*/

import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import python_1 from "../../../../../assets/python_1.jpg";

const O2_CreateNewProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>Open PyCharm and select new Project</Li>
        <Li>
          Create new <SpanGrey>Pure Python</SpanGrey> Project with the following fields below.
        </Li>
        <IMG img_name={python_1}></IMG>
        <Li>
          This is how the <SpanGrey>tutorial</SpanGrey> project structure looks after setting up the project with the Virtual Environment
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O2_CreateNewProject;
