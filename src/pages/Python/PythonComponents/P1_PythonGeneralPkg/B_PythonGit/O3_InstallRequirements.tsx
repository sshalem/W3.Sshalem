/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O3_InstallRequirements = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Git Ignore config</div>
        <ULdisc>
          <Li>
            Install Dependencies (Two Correct Options), Open PyCharm Terminal, run command below:
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_InstallRequirements;

const _1_ = `pip install -r requirements.txt`;
