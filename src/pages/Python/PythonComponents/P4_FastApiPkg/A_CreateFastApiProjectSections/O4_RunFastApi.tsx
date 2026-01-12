/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_RunFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Run FastAPI uvicorn</div>
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
    </MainChildArea>
  );
};

export default O4_RunFastApi;

const _1_ = `uvicorn main:app --reload`;

const _2_ = `uvicorn main:app --reload --host 0.0.0.0 --port 8000`;
