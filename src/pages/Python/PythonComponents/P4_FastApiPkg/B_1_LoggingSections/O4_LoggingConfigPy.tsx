/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_LoggingConfigPy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          ✅ Most modern FastAPI projects prefer <SpanGrey>logging_config.py</SpanGrey> because it gives <br /> Spring Boot-like flexibility and
          allows you to unify Uvicorn + FastAPI + app logs easily.
        </article>

        <article className="my-4">
          <div className="my-4 text-lg font-semibold">logging_config.py (Python code)</div>
          <p className="font-semibold">✅ Advantages</p>
          <ULDecimal>
            <Li>
              Full Python flexibility
              <ULdisc>
                <Li>You can dynamically configure loggers, handlers, colors, files, rotating logs, etc.</Li>
                <Li>Conditional logic: dev vs prod, environment variables, custom formatters.</Li>
              </ULdisc>
            </Li>
            <Li>
              Colored console logs
              <ULdisc>
                <Li>Works naturally with colorlog or other Python packages.</Li>
              </ULdisc>
            </Li>
            <Li>
              Programmatically attach loggers
              <ULdisc>
                <Li>Can automatically attach Uvicorn loggers, SQLAlchemy loggers, etc.</Li>
                <Li>Easier to unify all loggers under the same configuration.</Li>
              </ULdisc>
            </Li>
            <Li>
              Easy to integrate in FastAPI app
              <ULdisc>
                <Li>
                  Just <SpanGrey>from logging_config import setup_logging; setup_logging()</SpanGrey>
                </Li>
                <Li>No external file parsing needed.</Li>
              </ULdisc>
            </Li>
          </ULDecimal>
          <p className="font-semibold">❌ Disadvantages</p>
          <ULdisc>
            <Li>Slightly less declarative — you have to read Python code to understand the logging setup.</Li>
            <Li>Changes require editing code, not just a config file.</Li>
          </ULdisc>
        </article>

        <hr />

        <article className="my-8">
          <div>
            Let’s build a complete Spring Boot–style unified logging setup for FastAPI + Uvicorn using <SpanGrey>logging_config.py</SpanGrey>. <br />
            It will include:
            <ULdisc>
              <Li>✅ Unified logging (Uvicorn + FastAPI + your app)</Li>
              <Li>✅ Timestamps on all logs</Li>
              <Li>✅ Colored console logs for dev</Li>
              <Li>✅ Optional file logging for prod</Li>
              <Li>✅ Configurable log levels per environment</Li>
              <Li>✅ Optional request logging (like Spring Boot access logs)</Li>
            </ULdisc>
          </div>
          <hr />
          <article className="my-8">
            <div className="my-4">1️⃣ Install Dependencies</div>
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </article>
          <hr />
          <article className="my-8">
            <div className="my-4">
              2️⃣ create <SpanGrey>logging_config.py</SpanGrey> file
            </div>
            <PythonHighlight pythonCode={_2_} />
          </article>
          <hr />
          <article className="my-8">
            <div className="my-4">
              3️⃣ <SpanGrey>main.py</SpanGrey> FastAPI + Uvicorn Using Unified Logging
            </div>
            <PythonHighlight pythonCode={_3_} />
          </article>
          <hr />
          <article className="my-8">
            <div className="my-4">4️⃣ Production Tips</div>
            <ULdisc>
              <Li>
                File logging for production:
                <PythonHighlight pythonCode={_4_} />
              </Li>
              <Li>
                Different levels per logger:
                <PythonHighlight pythonCode={_5_} />
              </Li>
            </ULdisc>
          </article>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_LoggingConfigPy;

const _1_ = `pip install colorlog`;

const _2_ = `import logging
import sys
from colorlog import ColoredFormatter

# ===========================
# Configurable variables
# ===========================
LOG_LEVEL = logging.DEBUG     # Dev: DEBUG, Prod: INFO
LOG_TO_FILE = False           # Enable file logging
LOG_FILENAME = "app.log"      # File to save logs

# Color formatter for console logs
COLOR_FORMAT = (
    "%(log_color)s%(asctime)s | %(levelname)s | %(name)s | %(message)s"
)
LOG_COLORS = {
    "DEBUG": "white",
    "INFO": "green",
    "WARNING": "yellow",
    "ERROR": "red",
    "CRITICAL": "bold_red",
}


def setup_logging(level=LOG_LEVEL, log_to_file=LOG_TO_FILE, filename=LOG_FILENAME):
    """
    Sets up unified logging for:
    - Root logger
    - Uvicorn loggers (uvicorn, uvicorn.error, uvicorn.access)
    - Your FastAPI app loggers
    """

    # -------------------
    # Console Handler
    # -------------------
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(ColoredFormatter(COLOR_FORMAT, log_colors=LOG_COLORS))

    # -------------------
    # Root Logger
    # -------------------
    root_logger = logging.getLogger()
    root_logger.setLevel(level)
    root_logger.handlers = [console_handler]  # overwrite default handlers

    # -------------------
    # Optional File Logging
    # -------------------
    if log_to_file:
        file_formatter = logging.Formatter(
            "%(asctime)s | %(levelname)s | %(name)s | %(message)s"
        )
        file_handler = logging.FileHandler(filename)
        file_handler.setFormatter(file_formatter)
        root_logger.addHandler(file_handler)

    # -------------------
    # Configure Uvicorn loggers to use same handlers
    # -------------------
    for uvicorn_logger_name in ("uvicorn", "uvicorn.error", "uvicorn.access"):
        logger = logging.getLogger(uvicorn_logger_name)
        logger.handlers = root_logger.handlers
        logger.setLevel(level)`;

const _3_ = `from fastapi import FastAPI
import logging
from logging_config import setup_logging

app = FastAPI()

# Initialize logging
setup_logging(level=logging.DEBUG, log_to_file=False)
logger = logging.getLogger(__name__)


@app.get("/")
def read_root():
    logger.debug("Root endpoint called")
    logger.info("Root endpoint called")
    logger.warning("Root endpoint called")
    logger.error("Root endpoint called")
    logger.critical("Root endpoint called")
    return {"message": "Hello World"}
`;

const _4_ = `# Dev environment
setup_logging(level=logging.DEBUG, log_to_file=False)
    
# Production environment
setup_logging(level=logging.INFO, log_to_file=True, filename="prod.log")`;

const _5_ = `logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)
logging.getLogger("uvicorn.access").setLevel(logging.INFO)`;
