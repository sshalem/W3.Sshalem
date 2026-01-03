/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O8_RunPythonProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        2 ways to run python project :
        <ULdisc>
          <Li>
            Via terminal
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>Right click the Project tree and create new python file</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O8_RunPythonProject;

const _1_ = ``;
