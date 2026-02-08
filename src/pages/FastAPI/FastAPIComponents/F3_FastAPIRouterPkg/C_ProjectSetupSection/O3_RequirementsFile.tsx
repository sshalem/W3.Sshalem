/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGreen, SpanYellow, SpanRed } from "../../../../../components/Highlight";
import python_23 from "../../../../../assets/python_23.jpg";

const O3_RequirementsFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">
          <SpanYellow>requirements.txt</SpanYellow> describes the App dependencies
        </div>

        <ULDecimal>
          <Li>
            FastAPI <SpanYellow>requirements.txt</SpanYellow> install all the correct packages and versions , once I clone a project from GIT
          </Li>
          <Li>
            Open terminal , type command
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            this created the file <SpanYellow>requirements.txt</SpanYellow> and dependencies in it
          </Li>
          <Li>
            Re-Open PyCharm , Why?
            <ULdisc>
              <Li>PyCharm maintains its own cache of installed packages for each interpreter.</Li>
              <Li>
                When I install packages via terminal (even in the correct venv), PyCharm <SpanRed>doesn’t always immediately refresh</SpanRed> its
                package list in the Settings → Python Interpreter GUI.
              </Li>
              <Li>
                So <SpanYellow>pip freeze</SpanYellow> correctly shows the packages in your venv, but PyCharm’s GUI doesn’t reflect them until you{" "}
                <SpanGreen>reopen the IDE</SpanGreen> (or manually refresh).
              </Li>
            </ULdisc>
          </Li>

          <Li>
            After I Re-Open PyCahrm , now I see under the interpreter of the <SpanYellow>venv</SpanYellow> all dependencies I've installed.
          </Li>
          <IMG img_name={python_23}></IMG>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O3_RequirementsFile;

const _1_ = `pip freeze > requirements.txt`;
