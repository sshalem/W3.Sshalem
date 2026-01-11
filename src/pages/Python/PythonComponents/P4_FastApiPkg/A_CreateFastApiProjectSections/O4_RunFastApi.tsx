/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JsxHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_RunFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Run FastAPI uvicorn</div>
        <ULDecimal>
          <Li>
            Copy code below and paste it inside <SpanGrey>main.py</SpanGrey>
          </Li>
          <JsxHighlight jsxCode={_2_} />
          <Li>Run in PyCharm terminal command below</Li>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
          <Li>
            2 ways to check API
            <ULdisc>
              <Li>
                <a className="tracking-wider text-blue-500" href="http://localhost:8000" target="_blank">
                  http://localhost:8000
                </a>
              </Li>
              <Li>
                <a className="tracking-wider text-blue-500" href="http://127.0.0.1:8000/docs" target="_blank">
                  http://127.0.0.1:8000/docs
                </a>{" "}
                this is swagger app
              </Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O4_RunFastApi;

const _1_ = `uvicorn main:app --reload`;

const _2_ = `from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}`;
