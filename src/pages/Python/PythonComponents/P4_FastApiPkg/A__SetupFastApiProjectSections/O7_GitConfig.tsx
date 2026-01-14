/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O7_GitConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Git Ignore config</div>
        <ULdisc>
          <Li>Best practice to config the giit ignore file with following lines</Li>
          <Li>
            Open the file <SpanGrey>.gitignore</SpanGrey> verify that the name of the vritual environment <SpanGrey>.venv</SpanGrey> and
            <SpanGrey>.idea</SpanGrey> are igonred
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O7_GitConfig;

const _1_ = `# Ignore all .venv directories in all projects
**/.venv/

# Ignore all PyCharm .idea directories
**/.idea/`;
