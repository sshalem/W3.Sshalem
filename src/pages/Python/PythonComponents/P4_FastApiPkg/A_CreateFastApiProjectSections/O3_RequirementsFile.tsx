/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_23 from "../../../../../assets/python_23.jpg";

const O3_RequirementsFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">
          <SpanGrey>requirements.txt</SpanGrey> describes the App dependencies
        </div>

        <ULDecimal>
          <Li>
            FastAPI <SpanGrey>requirements.txt</SpanGrey> install all the correct packages and versions , once I clone a project from GIT
          </Li>
          <Li>
            Open terminal , type command
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            this created the file <SpanGrey>requirements.txt</SpanGrey> and dependencies in it
          </Li>
          <Li>Re-Open PyCharm , verify we aslo see , dependencies are synced with Interpreter</Li>
          <IMG img_name={python_23}></IMG>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O3_RequirementsFile;

const _1_ = `pip freeze > requirements.txt`;
