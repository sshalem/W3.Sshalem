/*


*/

import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";
import python_3 from "../../../../../assets/python_3.jpg";

const O5_CheckPackageList = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>Open Terminal</Li>
          <Li>
            run on of the commands below Before installing any packages
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>So far, We have only 1 packages installed. (Note : pip in Python is like npm in React) .</Li>
          <IMG img_name={python_3}></IMG>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_CheckPackageList;

const _1_ = `pip list
pip list -v
pip freeze`;
