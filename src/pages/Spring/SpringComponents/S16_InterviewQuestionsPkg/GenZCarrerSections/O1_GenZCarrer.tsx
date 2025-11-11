/*


*/
import { Anchor, MainChildArea } from "../../../../../components";

const O1_GenZCarrer = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-4">
        Great Spring Interview question <br />
      </div>
      <div>
        <Anchor description="GenZCareer - Spring Interview" href="https://www.youtube.com/watch?v=XilRv9wJhzc&ab_channel=GenZCareer"></Anchor>
      </div>
      <div>
        <Anchor description="GenZCareer - Interview (see video)" href="https://www.youtube.com/watch?v=7Rt6UmsQTGM&ab_channel=GenZCareer"></Anchor>
      </div>
    </MainChildArea>
  );
};

export default O1_GenZCarrer;
