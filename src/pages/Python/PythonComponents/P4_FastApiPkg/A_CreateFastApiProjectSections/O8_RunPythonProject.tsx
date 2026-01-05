/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O8_RunPythonProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        3 ways to run python project :
        <ULdisc>
          <Li>
            <span className="rounded-md bg-blue-600 p-1 text-sm font-semibold tracking-wider text-white">SHIFT</span> {" + "}
            <span className="rounded-md bg-blue-600 p-1 text-sm font-semibold tracking-wider text-white">F10</span>
          </Li>
          <Li>
            By clicking on the run Icon <span className="text-xl">▶️</span>
          </Li>
          <Li>
            Via terminal
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O8_RunPythonProject;

const _1_ = `./\.venv/\Scripts/\python.exe app.py`;
