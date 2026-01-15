/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O3_GitIgnore = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Git Ignore config</div>
        <ULdisc>
          <Li>Best practice to config the git ignore file with following lines</Li>
          <Li>
            Open the file <SpanGrey>.gitignore</SpanGrey> verify that the name of the :
            <ULdisc>
              <Li>
                <SpanGrey>virtual environment</SpanGrey> - all virtual environment is igonred (example <SpanGrey>.venv</SpanGrey> )
              </Li>
              <Li>
                <SpanGrey>.idea</SpanGrey> of pycharm is igonred
              </Li>
              <Li>
                <SpanGrey>__pycache__</SpanGrey> folder is ignored
              </Li>
            </ULdisc>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_GitIgnore;

const _1_ = `# Ignore all .virtual environments directories in all projects
**/.venv/
**/venv/
**/env/

# Ignore all PyCharm .idea directories
**/.idea/


# Python cache directories in all projects
**/__pycache__/`;
