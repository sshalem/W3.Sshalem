/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import python_3 from "../../../../../assets/python_3.jpg";

const O4_VerifyVirtualEnvironment = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>Open Terminal</Li>
          <Li>
            verify that we have In parenthesis <SpanGrey>(.venv)</SpanGrey> , this means we are inside the virtual Environment.
          </Li>
          <Li>Best Terminal for Pure Python Project is PS (Power shell)</Li>
          <Li>Best Terminal for Django Project is Git Bash (I can select it)</Li>
          <IMG img_name={python_3}></IMG>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_VerifyVirtualEnvironment;
