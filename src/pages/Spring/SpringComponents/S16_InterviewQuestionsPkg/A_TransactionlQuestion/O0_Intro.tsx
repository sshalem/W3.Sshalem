/*


*/
import { IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder } from "../../../../../components/Highlight";
import transQuestion_5 from "../../../../../assets/transQuestion_5.jpg";
import transQuestion_6 from "../../../../../assets/transQuestion_6.jpg";

const O0_Intro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Difficulty by topic</DivDoubleBorder>
      <div>
        These levels are approximate. The same topic can be an introductory exercise or a senior-level problem depending on the depth expected.
      </div>
      <IMG img_name={transQuestion_5} />
      <div className="my-8 text-xl font-semibold">What makes it a senior-level question?</div>
      <div>The key distinction is between fixing a method and designing a reliable system.</div>
      <IMG img_name={transQuestion_6} />
    </MainChildArea>
  );
};

export default O0_Intro;
