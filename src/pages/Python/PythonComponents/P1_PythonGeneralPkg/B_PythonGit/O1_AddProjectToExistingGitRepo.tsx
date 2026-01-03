/*


*/

import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_5 from "../../../../../assets/python_5.png";
import python_6 from "../../../../../assets/python_6.jpg";

const O1_AddProjectToExistingGitRepo = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          How to Add New Python Project to my <SpanGrey>Python Git Repository</SpanGrey>
        </article>
        <ULDecimal>
          <Li>
            I crated for the example a Projetc <SpanGrey>tutorial</SpanGrey>
          </Li>
          <Li>
            This is How it looks inside the tutorial folder
            <IMG img_name={python_5}></IMG>
          </Li>
          <Li>
            Copy the whole folder to my <SpanGrey>Python Respoitry</SpanGrey> folder on computer . <br />
            (Folder shows I have 3 project folders inside it , <strong>Django_Project</strong> , <strong>Django_tutorials</strong> ,
            <strong>tutorial</strong>)<IMG img_name={python_6}></IMG>
          </Li>
          <Li>
            Its a must to ignor the virtual environment fomr Prjects (Like ignore Node folder in ReactJs). <br />
            Open the file <SpanGrey>.gitignore</SpanGrey> verify that the name of the vritual environment is igonred
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            run command
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_AddProjectToExistingGitRepo;

const _1_ = `# ==================================================
# ignore (.venv) folder from all projects the 
# ==================================================

**/.venv/`;

const _2_ = `Git_all.bat`;
