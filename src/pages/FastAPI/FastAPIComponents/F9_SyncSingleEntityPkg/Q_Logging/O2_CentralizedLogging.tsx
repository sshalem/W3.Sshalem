/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O2_CentralizedLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Centralized logging</div>
        <ULdisc>
          <Li>
            Create: <SpanEmerald>app/config/logging_config.py</SpanEmerald>
          </Li>
          <Li>
            <SpanEmerald>"disable_existing_loggers": False</SpanEmerald>
            <ULdisc>
              <Li>This is important when working with FastAPI and its dependencies.</Li>
              <Li>FastAPI and Uvicorn have their own loggers.</Li>
              <Li>We don't want our configuration to accidentally disable existing loggers.</Li>
            </ULdisc>
          </Li>
          <Li>
            <SpanEmerald>"handlers"</SpanEmerald>
            <ULdisc>
              <Li>A handler determines where logs are sent.</Li>
              <Li>
                We're using <SpanYellow>StreamHandler</SpanYellow> with <SpanYellow>sys.stdout</SpanYellow> , meaning logs are printed to the
                application console.
              </Li>
            </ULdisc>
          </Li>
          <Li>
            <SpanEmerald>"root"</SpanEmerald>
            <ULdisc>
              <Li>The root logger is the parent of your application's logger hierarchy.</Li>
              <Li>Our application loggers inherit its configuration unless explicitly configured otherwise.</Li>
              <Li>This means you don't need to configure every service, controller and repository separately.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <Highlight_PYTHON code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O2_CentralizedLogging;

const _1_ = `import logging
import logging.config


def setup_logging() -> None:
    logging_config = {
        "version": 1,
        "disable_existing_loggers": False,

        "formatters": {
            "standard": {
                "format": "%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
                "datefmt": "%Y-%m-%d %H:%M:%S",
            }
        },

        "handlers": {
            "console": {
                "class": "logging.StreamHandler",
                "level": "DEBUG",
                "formatter": "standard",
                "stream": "ext://sys.stdout",
            }
        },

        "root": {
            "level": "INFO",
            "handlers": ["console"],
        },
    }

    logging.config.dictConfig(logging_config)
`;
