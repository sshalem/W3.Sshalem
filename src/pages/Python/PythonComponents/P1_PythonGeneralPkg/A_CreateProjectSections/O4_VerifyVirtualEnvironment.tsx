/*


*/

import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGrey, SpanRed } from "../../../../../components/Highlight";
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
          <Li>
            Best Terminal for Pure Python Project is <SpanGrey>Power shell</SpanGrey>
          </Li>
          <Li>
            Best Terminal for Django Project is <SpanGrey>Git Bash</SpanGrey>
          </Li>
          <ULdisc>
            <SpanRed>Note</SpanRed>
            <Li>
              In Older PyCahrm versions , I had to type in Terminal the command :
              <ULDecimal>
                <Li>
                  <SpanGrey>python -m venv .venv</SpanGrey> - this creates the virtual Environment <SpanGrey>(.venv)</SpanGrey>
                </Li>
                <Li>
                  <SpanGrey>.venv\Scripts\Activate.ps1</SpanGrey> to activate <SpanGrey>(.venv)</SpanGrey> in PowerShell Terminal
                </Li>
              </ULDecimal>{" "}
            </Li>
          </ULdisc>
          <IMG img_name={python_3}></IMG>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_VerifyVirtualEnvironment;
