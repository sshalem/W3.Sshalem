/*


*/

import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_7 from "../../../../../assets/python_7.jpg";
import python_8 from "../../../../../assets/python_8.jpg";
import python_9 from "../../../../../assets/python_9.jpg";

const O2_CloneGitPythonProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">✅ Correct Workflow in PyCharm (BEST PRACTICE)</article>
        <ULdisc>
          <Li>1️⃣ Clone the repo</Li>
          <Li>
            2️⃣ Open the project in PyCharm , (PyCharm detects no interpreter) , But a popup message appears saying
            <ULdisc>
              <Li>
                If I would like to create a <SpanGrey>.venv</SpanGrey> ?
              </Li>
              <Li>Base Interpreter</Li>
              <Li>
                <SpanGrey>requierments.txt</SpanGrey> install
              </Li>
            </ULdisc>
            <IMG img_name={python_9}></IMG>
          </Li>
          <Li>If after opening the Project in PyCharm The popup message does NOT appear then (SiSu VeSimChu)</Li>
          when tried to clone the project and assign virtual venv )<IMG img_name={python_8}></IMG>
          PyCharm caches interpreter paths in <SpanGrey>.idea</SpanGrey>
          Thus , to fix issue of Invalid :<ULdisc></ULdisc>
          <ULdisc>
            <Li>
              🔥 STEP 1 — Invalidate PyCharm caches <SpanGrey>File → Invalidate Caches / Restart → Invalidate and Restart</SpanGrey>
            </Li>
            <Li>🔥 STEP 2 — CLOSE PYCHARM</Li>
            <Li>
              🔥 STEP 3 — DELETE PyCharm project <SpanGrey>.idea</SpanGrey>
            </Li>
            <Li>🔥 STEP 4 — If it's a repo , delte the repo , and clone it again</Li>
            <Li>🔥 STEP 5 — OPEN PROJECT CORRECTLY (Open PyCharm → Open → select the exact folder)</Li>
            <Li>
              🔥 STEP 6 — CREATE interpreter (correct way)
              <ULDecimal>
                <Li>File → Settings → Python Interpreter</Li>
                <Li>Click Add Interpreter → Add Local Interpreter</Li>
                <Li>Select Virtualenv Environment</Li>
                <Li>
                  Choose :
                  <ULdisc>
                    <Li>✅ New</Li>
                    <Li>
                      ✅ Location <SpanGrey>D:\_Software\_Python\Python\tutorial\.venv</SpanGrey>
                    </Li>
                    <Li>
                      ✅ Base interpreter: <SpanGrey>C:\Program Files\Python312\python.exe</SpanGrey>
                    </Li>
                  </ULdisc>
                </Li>
              </ULDecimal>
            </Li>
            <Li>I repeat these steps , since best way to is to let the popup message appear , and let PyCharm perform all.</Li>
            <Li>Otherwise I need to </Li>
          </ULdisc>
          <Li>
            3️⃣ Create <SpanGrey>(.venv)</SpanGrey> folder , Open PyCharm Terminal , type command below (This creates a <SpanGrey>(.venv)</SpanGrey>
            folder inside your project.)
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            4️⃣ 2 ways to Assign the <SpanGrey>(.venv)</SpanGrey> to the project :
            <ULdisc>
              Option 1 :
              <Li>
                From Terminal , run the <SpanGrey>activate.ps1</SpanGrey> command
              </Li>
            </ULdisc>
            <ULdisc>
              Options 2:
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
          <Li>
            4️⃣ <SpanGrey>sanity check</SpanGrey> : Open PyCharm Terminal , type command below , → should point to <SpanGrey>(.venv)</SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={_4_} />
            or iI am in the root project directory then :
            <ApplicationPropertiesHighlight propertiesCode={_4_1_} />
          </Li>
          <Li>
            5️⃣ Install Dependencies (Two Correct Options), Open PyCharm Terminal, run command below:
            <ApplicationPropertiesHighlight propertiesCode={_5_} />
          </Li>
          <Li>
            6️⃣ How to Verify It’s Working , In PyCharm Terminal, run:
            <ApplicationPropertiesHighlight propertiesCode={_6_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_CloneGitPythonProject;

const _1_ = `python -m venv .venv`;

const _4_ = `python -c "import sys; print(sys.executable)`;

const _4_1_ = `./\.venv/\Scripts/\python -c "import sys; print(sys.executable)"`;

// # correct output : .../MyApp/.venv/Scripts/python.exe
// # wrong output   : C:/\Program Files/\Python312/\python.exe`;

const _5_ = `pip install -r requirements.txt`;

const _6_ = `where python`;
