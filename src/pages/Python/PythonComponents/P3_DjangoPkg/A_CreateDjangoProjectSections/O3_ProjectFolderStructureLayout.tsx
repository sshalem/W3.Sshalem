/*


*/

import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import python_2 from "../../../../../assets/python_2.jpg";

const O3_ProjectFolderStructureLayout = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          When we create a new Python project in PyCharm using a <SpanGrey>Project venv</SpanGrey> Python automatically builds
          <SpanGrey>(.venv)</SpanGrey> (Virtual Environment) with a standard directory structure inside.
        </Li>
        <Li>
          This is how the <SpanGrey>tutorial</SpanGrey> project structure looks after setting up the project with the Virtual Environment
        </Li>
        <IMG img_name={python_2}></IMG>
        <Li>
          The two folders we’re seeing — <SpanGrey>Lib</SpanGrey> and <SpanGrey>Scripts</SpanGrey> — are normal and essential parts of any virtual
          environment created on Windows.
        </Li>
        <Li>
          <strong>📁 Lib Folder contains</strong>
          <ULdisc>
            <Li>✔ All installed Python packages</Li>
            <Li>✔ Standard library files used by Python</Li>
          </ULdisc>
        </Li>
        <Li>
          📁 <strong>Scripts Folder contains</strong> executable files for your virtual environment, including:
          <ULdisc>
            <Li>
              ✔ The Python interpreter <SpanGrey>.venv/Scripts/python.exe</SpanGrey>
            </Li>
            <Li>
              ✔ Activation scripts <SpanGrey>.\.venv\Scripts\activate</SpanGrey>
            </Li>
            <Li>
              ✔ Package scripts / command-line tools <SpanGrey>pip.exe</SpanGrey> or <SpanGrey>django-admin.exe (if Django installed)</SpanGrey>
            </Li>
          </ULdisc>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O3_ProjectFolderStructureLayout;
