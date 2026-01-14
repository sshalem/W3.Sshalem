/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import python_31 from "../../../../../assets/python_31.jpg";
import python_33 from "../../../../../assets/python_33.jpg";
import { SpanGrey } from "../../../../../components/Highlight";

const O5_RunWithPlayButton = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Run FastAPI with play button on PyCharm</div>
        <div>In order to run the app via the play button do following</div>
        <ULdisc>
          <Li>On the top of PyCharm, click on the dropdown arrow</Li>
          <Li>
            then , Click on <SpanGrey>Edit Configurations</SpanGrey>
            <IMG img_name={python_33} />
          </Li>
          <Li>
            apply following settings per image below
            <IMG img_name={python_31} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_RunWithPlayButton;
