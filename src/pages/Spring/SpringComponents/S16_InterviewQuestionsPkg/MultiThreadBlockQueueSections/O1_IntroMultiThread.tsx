/*


*/
import { Anchor, MainChildArea } from "../../../../../components";

const O1_IntroMultiThread = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Anchor
        description="Multi Thread Producer–Consumer using wait/notify & BlockingQueue "
        href="https://www.youtube.com/watch?v=ITPesAZFvWI&ab_channel=JavaTechie"
      ></Anchor>
    </MainChildArea>
  );
};

export default O1_IntroMultiThread;
