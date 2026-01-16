/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_26 from "../../../../../assets/python_26.jpg";

const O3_FastAPILogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">FastAPI Equivalent of SLF4J</article>
        1️⃣ Python’s equivalent of SLF4J is:
        <JsxHighlight jsxCode={_1_} />
        <article>
          <ULdisc>
            <Li>FastAPI fully supports : Log levels, Formatters , Handlers, Files / Console output</Li>
          </ULdisc>
        </article>
        <article>
          <div className="my-8 font-semibold">2️⃣ Proper Logging WITH Timestamp </div>
          <ULdisc>
            <Li>
              Configure logging (once), then we have 2 options:
              <ULdisc>
                <Li>put this in main.py</Li>
                <Li>
                  or, Create <SpanGrey>logging_config.py</SpanGrey>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              <JsxHighlight jsxCode={_2_} />
            </Li>
          </ULdisc>
        </article>
        <article>
          <div className="my-8 font-semibold">Logging results in console </div>
          When I run the app, and check console we see :
          <ULDecimal>
            <Li>logger has timestamp as we config it</Li>
            <Li>But , uvicron is not affected from it</Li>
            <Li>there is no color on the logging of FastAPI</Li>
          </ULDecimal>
          <IMG img_name={python_26}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_FastAPILogging;

const _1_ = `import logging`;

const _2_ = `from fastapi import FastAPI 
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO,
                    format="%(asctime)s   %(levelname)s   %(name)s   %(message)s")

logger = logging.getLogger(__name__)


@app.get("/")
def read_test():
    logger.info("succesfully logged")
    return {"Hello": "World"}`;
