/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import python_4 from "../../../../../assets/python_4.jpg";

const O6_CreateMainFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>In order to write a script we need to create a file</Li>
          <Li>Right click the Project tree and create new python file</Li>
          <Li>
            I name it <SpanGrey>main.py</SpanGrey>
          </Li>
          <IMG img_name={python_4}></IMG>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_CreateMainFile;
