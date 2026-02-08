/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JsxHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import python_27 from "../../../../../assets/python_27.jpg";
import python_28 from "../../../../../assets/python_28.jpg";

const O1_LoggingConf = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">
          <div className="my-4 text-lg font-semibold">logging.conf (INI file)</div>
          <p className="font-semibold">✅ Advantages</p>
          <ULDecimal>
            <Li>
              Declarative — similar to Spring Boot’s application.properties
              <ULdisc>
                <Li>Can be edited without touching Python code.</Li>
                <Li>Good for ops teams or devs who prefer config files.</Li>
              </ULdisc>
            </Li>
            <Li>
              Uvicorn built-in support
              <ULdisc>
                <Li>
                  <SpanGrey>uvicorn --log-config logging.conf</SpanGrey> can read it directly.
                </Li>
                <Li>Works for simple unified setup.</Li>
              </ULdisc>
            </Li>
            <Li>
              Static & safe
              <ULdisc>
                <Li>Less chance of accidentally writing bad Python code.</Li>
              </ULdisc>
            </Li>
          </ULDecimal>
          <p className="font-semibold">❌ Disadvantages</p>
          <ULdisc>
            <Li>
              Less flexible
              <ULdisc>
                <Li>Harder to add colored logs (colorlog doesn’t work via INI)</Li>
                <Li>Harder to dynamically attach handlers for multiple environments.</Li>
              </ULdisc>
            </Li>
            <Li>Needs exact logger names (uvicorn, uvicorn.access)</Li>
            <Li>Harder to add conditional logic like dev/prod differences.</Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8 text-xl font-semibold">logging.conf (INI format — works for Uvicorn)</article>
        create a file name it <SpanGrey>logging.conf</SpanGrey>
        <IMG img_name={python_28}></IMG>
        <div>
          ✅ Copy/paste code below to <SpanGrey>logging.conf</SpanGrey>
        </div>
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
              <SpanGrey>*.conf</SpanGrey> is (INI file) , and we <SpanRed>cannot config it</SpanRed> with <SpanGrey>colorlog</SpanGrey> dependency
            </Li>
          </ULDecimal>
          <IMG img_name={python_27}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_LoggingConf;

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
