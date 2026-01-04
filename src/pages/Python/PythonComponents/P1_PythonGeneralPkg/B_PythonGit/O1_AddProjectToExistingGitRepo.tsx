/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import python_5 from "../../../../../assets/python_5.jpg";
import python_6 from "../../../../../assets/python_6.jpg";
import python_8 from "../../../../../assets/python_8.jpg";

const O1_AddProjectToExistingGitRepo = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          How to Add New Python Project to my <SpanGrey>Python Git Repository</SpanGrey>
        </article>
        <ULdisc>
          <Li>
            1️⃣ I created for the example a Projetc <SpanGrey>tutorial</SpanGrey>
          </Li>
          <Li>
            2️⃣ This is How it looks inside the tutorial folder
            <IMG img_name={python_5}></IMG>
          </Li>
          <Li>
            3️⃣ Copy the whole folder to my <SpanGrey>Python Respoitry</SpanGrey> folder on computer . <br />
            (Folder shows I have 3 project folders inside it , <strong>Django_Project</strong> , <strong>Django_tutorials</strong> ,
            <strong>tutorial</strong>)<IMG img_name={python_6}></IMG>
          </Li>
          <Li>
            4️⃣ <strong>Best Practice</strong> : <SpanRed>Delete</SpanRed> both directories <SpanGrey>.venv</SpanGrey> and <SpanGrey>.idea</SpanGrey>{" "}
            from Project , before commit/push to Git (the <SpanGrey>(.idea)</SpanGrey> made me lot of problems <SpanGrey>[invalid] issue</SpanGrey>{" "}
            when tried to clone the project and assign virtual venv )<IMG img_name={python_8}></IMG>
          </Li>
          <Li>
            5️⃣ Its a must to ignore the <SpanGrey>.venv</SpanGrey> and <SpanGrey>.idea</SpanGrey> from Prjects (Like ignore Node folder in ReactJs).
          </Li>
          <Li>
            6️⃣ Open the file <SpanGrey>.gitignore</SpanGrey> verify that the name of the vritual environment is igonred
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            7️⃣ run command
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_AddProjectToExistingGitRepo;

const _1_ = `# Ignore all .venv directories in all projects
**/.venv/

# Ignore all PyCharm .idea directories
**/.idea/
`;

const _2_ = `Git_all.bat`;
