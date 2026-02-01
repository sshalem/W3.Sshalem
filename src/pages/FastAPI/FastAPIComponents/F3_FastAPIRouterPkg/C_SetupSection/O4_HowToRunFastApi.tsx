/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";
import python_31 from "../../../../../assets/python_31.jpg";
import python_33 from "../../../../../assets/python_33.jpg";

const O4_HowToRunFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-2xl font-semibold">
          1️⃣ Run Using Terminal with <SpanYellow>uvicorn</SpanYellow> command
        </div>
        <div>
          In the terminal, go to the folder where <SpanYellow>main.py</SpanYellow> is located and run:
        </div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
        Explanation:
        <ULdisc>
          <Li>
            <SpanYellow>main</SpanYellow> → the Python file name without <SpanYellow>.py</SpanYellow>
          </Li>
          <Li>
            <SpanYellow>app</SpanYellow> → the FastAPI instance variable
          </Li>
          <Li>
            <SpanYellow>--reload</SpanYellow> → automatic reload when you change code (<SpanYellow>for development only</SpanYellow>)
          </Li>
          <Li>
            Optional: <SpanYellow>--host 0.0.0.0</SpanYellow> to make it accessible externally
          </Li>
          <Li>
            Optional: <SpanYellow>--port 8000</SpanYellow> to change port
          </Li>
          <Li>Full example:</Li>
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <div className="my-8 text-2xl font-semibold">2️⃣ Run using PyCharm play button</div>
        <div>In order to run the app via the play button do following</div>
        <ULdisc>
          <Li>On the top of PyCharm, click on the dropdown arrow</Li>
          <Li>
            then , Click on <SpanYellow>Edit Configurations</SpanYellow>
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

export default O4_HowToRunFastApi;

const _1_ = `uvicorn main:app --reload`;

const _2_ = `uvicorn main:app --reload --host 0.0.0.0 --port 8000`;
