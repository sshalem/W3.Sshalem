/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O6_RequirementsFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Run Django Project for first time</div>
        In previous section , when we run the project for first time
        <ULDecimal>
          <Li>
            For Analogy : <SpanGrey>requirements.txt</SpanGrey> = <SpanGrey>package.json</SpanGrey> with React
          </Li>
          <Li>
            <SpanGrey>requirements.txt</SpanGrey> - describe the app's dependencies.
          </Li>
          <Li>
            Django <SpanGrey>requirements.txt</SpanGrey> install all the correct packages and versions , once I clone a project from GIT
          </Li>
          <Li>
            Open terminal , type command
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            this created the file <SpanGrey>requirements.txt</SpanGrey> and dependencies in it
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O6_RequirementsFile;

const _1_ = `pip freeze > requirements.txt`;
