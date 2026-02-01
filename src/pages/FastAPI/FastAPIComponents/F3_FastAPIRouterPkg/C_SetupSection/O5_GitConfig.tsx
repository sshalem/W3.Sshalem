/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_GitConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Git Ignore config</div>
        <ULdisc>
          <Li>Best practice to config the git ignore file with following lines</Li>
          <Li>
            Open the file <SpanYellow>.gitignore</SpanYellow> verify that the name of the :
            <ULdisc>
              <Li>
                <SpanYellow>virtual environment</SpanYellow> - all virtual environment is igonred (example <SpanYellow>.venv</SpanYellow> )
              </Li>
              <Li>
                <SpanYellow>.idea</SpanYellow> of pycharm is igonred
              </Li>
              <Li>
                <SpanYellow>__pycache__</SpanYellow> folder is ignored
              </Li>
            </ULdisc>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_GitConfig;

const _1_ = `# Ignore all .virtual environments directories in all projects
**/.venv/
**/venv/
**/env/

# Ignore all PyCharm .idea directories
**/.idea/


# Python cache directories in all projects
**/__pycache__/`;
