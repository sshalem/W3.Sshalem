/*


*/

import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const OX_CloneGitPythonProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">✅ Correct Workflow in PyCharm (BEST PRACTICE)</article>
        <ULDecimal>
          <Li>Open CMD and Clone the Project</Li>
          <Li>
            Configure the Virtual Environment in PyCharm (Key Step).
            <ULdisc>
              Set it manually (recommended) In PyCharm :
              <ULdisc>
                <Li>File → Settings → Python → Interpreter</Li>
                <Li>Click Add Interpreter</Li>
                <Li>Choose Virtualenv Environment</Li>
                <Li>Select: Existing environment</Li>
              </ULdisc>
            </ULdisc>
          </Li>
          <Li>
            Install Dependencies (Two Correct Options), Open PyCharm Terminal, run command below:
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            🧠 How to Verify It’s Working , In PyCharm Terminal, run:
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default OX_CloneGitPythonProject;

const _1_ = `pip install -r requirements.txt`;

const _2_ = `where python`;
