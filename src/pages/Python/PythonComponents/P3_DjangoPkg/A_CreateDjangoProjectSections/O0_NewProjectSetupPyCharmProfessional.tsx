/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import python_12 from "../../../../../assets/python_12.jpg";
import python_11 from "../../../../../assets/python_11.jpg";

const O0_NewProjectSetupPyCharmProfessional = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold">
          When Creating new <SpanGrey>Django</SpanGrey> project with <SpanGrey>PyCharm professional</SpanGrey> , it automatically creates following
          Structure:
          <IMG img_name={python_12}></IMG>
        </article>
        Run <SpanGrey>pip freeze</SpanGrey> , see what packages are installed:
        <ULdisc>
          <Li>asgiref==3.11.0</Li>
          <Li>Django==6.0.1</Li>
          <Li>sqlparse==0.5.5</Li>
          <Li>tzdata==2025.3</Li>
        </ULdisc>
        <IMG img_name={python_11}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O0_NewProjectSetupPyCharmProfessional;
