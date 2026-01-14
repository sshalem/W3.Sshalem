/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_31 from "../../../../../assets/python_31.jpg";
import python_33 from "../../../../../assets/python_33.jpg";

const O5_HowToRunFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-2xl font-semibold">
          1️⃣ Run Using Terminal with <SpanGrey>uvicorn</SpanGrey> command
        </div>
        <div>
          In the terminal, go to the folder where <SpanGrey>main.py</SpanGrey> is located and run:
        </div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
        Explanation:
        <ULdisc>
          <Li>
            <SpanGrey>main</SpanGrey> → the Python file name without <SpanGrey>.py</SpanGrey>
          </Li>
          <Li>
            <SpanGrey>app</SpanGrey> → the FastAPI instance variable
          </Li>
          <Li>
            <SpanGrey>--reload</SpanGrey> → automatic reload when you change code (<SpanGrey>for development only</SpanGrey>)
          </Li>
          <Li>
            Optional: <SpanGrey>--host 0.0.0.0</SpanGrey> to make it accessible externally
          </Li>
          <Li>
            Optional: <SpanGrey>--port 8000</SpanGrey> to change port
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

export default O5_HowToRunFastApi;

const _1_ = `uvicorn main:app --reload`;

const _2_ = `uvicorn main:app --reload --host 0.0.0.0 --port 8000`;
