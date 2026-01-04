/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_7 from "../../../../../assets/python_7.jpg";

const OX_CloneGitPythonProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">✅ Correct Workflow in PyCharm (BEST PRACTICE)</article>
        <ULdisc>
          <Li>1️⃣ Clone the repo</Li>
          <Li>2️⃣ Open the project in PyCharm , (PyCharm detects no interpreter)</Li>
          <Li>
            3️⃣ Create <SpanGrey>(.venv)</SpanGrey> folder , Open PyCharm Terminal , type command below (This creates a <SpanGrey>(.venv)</SpanGrey>
            folder inside your project.)
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>

          <Li>
            4️⃣ Assign the <SpanGrey>(.venv)</SpanGrey> to PyCharm as the project interpreter
            <ULdisc>
              <Li>Go to :File → Settings → Python → Interpreter</Li>
              <Li>Click Add Interpreter → Add Local Interpreter</Li>
              <Li>
                <strong>Environment</strong> : Existing Environment
              </Li>
              <Li>
                <strong>Type</strong> : Virtualenv
              </Li>
              <Li>
                <strong>Base Python</strong> : Path where Python.exe located (<SpanGrey>C:\Program Files\Python\Python312\python.exe</SpanGrey> )
              </Li>
              <IMG img_name={python_7}></IMG>
            </ULdisc>
          </Li>
          {/* <Li>
            4️⃣ <SpanGrey>sanity check</SpanGrey> : Open PyCharm Terminal , type command below , → should point to <SpanGrey>(.venv)</SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={_3_} />
          </Li>
          <Li>
            Install Dependencies (Two Correct Options), Open PyCharm Terminal, run command below:
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            🧠 How to Verify It’s Working , In PyCharm Terminal, run:
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </Li> */}
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default OX_CloneGitPythonProject;

const _1_ = `python -m venv .venv`;

const _4_ = `pip install -r requirements.txt`;

const _5_ = `where python`;

const _6_ = `python -c "import sys; print(sys.executable)

# correct output : .../MyApp/.venv/Scripts/python.exe
# wrong output   : C:/\Program Files/\Python312/\python.exe`;
