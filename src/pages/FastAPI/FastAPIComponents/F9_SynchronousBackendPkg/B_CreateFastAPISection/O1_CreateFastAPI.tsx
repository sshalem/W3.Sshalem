/*


*/

import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanEmerald, SpanRed, SpanYellow } from "../../../../../components/Highlight";
import fastApi_1 from "../../../../../assets/fastApi_1.jpg";
import fastApi_2 from "../../../../../assets/fastApi_2.jpg";
import fastApi_3 from "../../../../../assets/fastApi_3.jpg";

const O1_CreateFastAPI = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Create the FastAPI project</div>

        <ULDecimal>
          <Li>
            Open PyCharm and create a new projec, Project name: <SpanEmerald>customer-management</SpanEmerald> <IMG img_name={fastApi_1}></IMG>
          </Li>
          <Li>
            For the Python interpreter:
            <ULdisc>
              <Li>Select a new Virtualenv environment.</Li>
              <Li>
                Location: the default <SpanEmerald>.venv</SpanEmerald> directory inside the project.
              </Li>
              <Li>
                <SpanRed>Important</SpanRed> : <SpanEmerald>.venv</SpanEmerald> is equivalent to an isolated environment for this particular project.
                Packages installed here won't interfere with other Python projects.
              </Li>
              <IMG img_name={fastApi_2}></IMG>
            </ULdisc>
          </Li>
          <Li>
            Open Terminal and verify we are inside the <SpanEmerald>(.venv)</SpanEmerald> enviroment.
            <IMG img_name={fastApi_3}></IMG>
            Coming from Java, think of <SpanEmerald>.venv</SpanEmerald> as an isolated dependency environment for your application.
            <ULdisc>
              <Li>
                In Java, <SpanYellow>Maven</SpanYellow> manages dependencies through <SpanYellow>pom.xml</SpanYellow>.
              </Li>
              <Li>
                In Python, we'll use:
                <ULdisc>
                  <Li>
                    <SpanEmerald>venv</SpanEmerald> — creates an isolated environment.
                  </Li>
                  <Li>
                    <SpanEmerald>pip</SpanEmerald> — installs dependencies.
                  </Li>
                  <Li>
                    <SpanEmerald>requirements.txt</SpanEmerald> — records project dependencies.
                  </Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_CreateFastAPI;
