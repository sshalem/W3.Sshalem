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
          When we create a new Python project in PyCharm using a custom virtual environment <SpanGrey>(.venv)</SpanGrey>, Python automatically builds
          a standard directory structure inside the <SpanGrey>.venv</SpanGrey>.
        </Li>
        <Li>
          The two folders we’re seeing — <SpanGrey>Lib</SpanGrey> and <SpanGrey>Scripts</SpanGrey> — are normal and essential parts of any virtual
          environment created on Windows.
        </Li>
        <Li>
          📁 1. Lib Folder contains
          <ULdisc>
            <Li>✔ All installed Python packages</Li>
            <Li>✔ Standard library files used by Python</Li>
          </ULdisc>
        </Li>
        <Li>
          📁 2. Scripts Folder contains executable files for your virtual environment, including:
          <ULdisc>
            <Li>
              ✔ The Python interpreter <SpanGrey>.venv/Scripts/python.exe</SpanGrey>
            </Li>
            <Li>
              ✔ Activation scripts <SpanGrey>.\.venv\Scripts\activate</SpanGrey>
            </Li>
            <Li>✔ Package scripts / command-line tools </Li>
          </ULdisc>
        </Li>
        <Li>
          This is how the <SpanGrey>tutorial</SpanGrey> project structure looks after setting up the project with the Virtual Environment
        </Li>
        <IMG img_name={python_2}></IMG>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O3_ProjectFolderStructureLayout;
