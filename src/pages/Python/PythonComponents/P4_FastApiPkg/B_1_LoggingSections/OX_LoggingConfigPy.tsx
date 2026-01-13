/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JsxHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_27 from "../../../../../assets/python_27.jpg";

const OX_LoggingConfigPy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">Sample logging.conf (INI format — works for Uvicorn)</article>
        <div>✅ Notes:</div>
        <ULdisc>
          <Li>
            <SpanGrey>qualname</SpanGrey> = the logger name
          </Li>
          <Li>
            <SpanGrey>handlers</SpanGrey> = what outputs the logs (console/file)
          </Li>
          <Li>
            <SpanGrey>propagate=0</SpanGrey> prevents double logging
          </Li>

          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
        <article>
          <div className="my-8 font-semibold">2️⃣ main.py file </div>
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
          <div className="my-8 font-semibold">3️⃣ Logging results in console </div>
          run command below to include <SpanGrey>logging.conf</SpanGrey>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
          Now check console , we see :
          <ULDecimal>
            <Li>✅ Both Uvicorn logs and your own logs now use the same timestamped format.</Li>
            <Li>there is no color on the logging of FastAPI</Li>
            <Li>
              <SpanGrey>*.conf</SpanGrey> is (INI file) , and we cannot aconfig it with <SpanGrey>colorlog</SpanGrey> dependency
            </Li>
          </ULDecimal>
          <IMG img_name={python_27}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default OX_LoggingConfigPy;

const _1_ = `[loggers]
keys=root,uvicorn,uvicorn.error,uvicorn.access,fastapi

[handlers]
keys=console

[formatters]
keys=default

[logger_root]
level=INFO
handlers=console

[logger_uvicorn]
level=INFO
handlers=console
qualname=uvicorn
propagate=0

[logger_uvicorn.error]
level=INFO
handlers=console
qualname=uvicorn.error
propagate=0

[logger_uvicorn.access]
level=INFO
handlers=console
qualname=uvicorn.access
propagate=0

[logger_fastapi]
level=INFO
handlers=console
qualname=fastapi
propagate=0

[handler_console]
class=StreamHandler
formatter=default
args=(sys.stdout,)

[formatter_default]
format=%(asctime)s | %(levelname)s | %(name)s | %(message)s`;

const _2_ = `from fastapi import FastAPI
import logging

logger = logging.getLogger(__name__)
app = FastAPI()

@app.get("/")
def read_root():
    logger.info("Custom log called")
    return {"message": "Hello World"}`;

const _3_ = `uvicorn main:app --reload --log-config logging.conf`;
