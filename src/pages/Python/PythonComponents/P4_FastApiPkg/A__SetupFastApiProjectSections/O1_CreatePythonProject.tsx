/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

import python_21_1 from "../../../../../assets/python_21_1.jpg";
import python_22 from "../../../../../assets/python_22.jpg";
import python_24 from "../../../../../assets/python_24.jpg";

const O1_CreatePythonProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">Create Pure Python project</article>
        <ULDecimal>
          <Li>
            create a new <SpanGrey>Pure Python</SpanGrey> project folder where for Django project/apps will reside
            <IMG img_name={python_21_1}></IMG>
          </Li>
          <Li>
            this is how folder structure looks, It created a <SpanGrey>main.py</SpanGrey> file
          </Li>
          <IMG img_name={python_24}></IMG>
          <Li>Delete its content</Li>
          <Li>
            Open Terminal and verify we are inside the <SpanGrey>(.venv)</SpanGrey> enviroment.
            <IMG img_name={python_22}></IMG>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_CreatePythonProject;
