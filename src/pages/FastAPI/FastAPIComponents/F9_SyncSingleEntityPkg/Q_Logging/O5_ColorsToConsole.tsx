/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O5_ColorsToConsole = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">logging with Color</div>
        <ULdisc>
          <Li>Lets add colors to log info , and also to msg</Li>
          <Li>Inside existing controller methods, add appropriate logging</Li>
          <Li>
            Add <Highlight_PYTHON code={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_ColorsToConsole;

const _1_ = `import copy
import logging
import logging.config


class ColoredFormatter(logging.Formatter):
    COLORS = {
        logging.DEBUG: "\\033[36m",  # Cyan
        logging.INFO: "\\033[32m",  # Green
        logging.WARNING: "\\033[33m",  # Yellow
        logging.ERROR: "\\033[31m",  # Red
        logging.CRITICAL: "\\033[1;31m",  # Bold red
    }

    RESET = "\\033[0m"

    # Custom colors for individual fields
    TIMESTAMP_COLOR = "\\033[90m"  # Gray
    LOGGER_COLOR = "\\033[35m"  # Magenta
    MESSAGE_COLOR = "\\033[37m"  # White

    # def format(self, record):
    #     colored_record = copy.copy(record)
    #     color = self.COLORS.get(record.levelno, "")
    #     colored_record.levelname = f"{color}{record.levelname}{self.RESET}"
    #     return super().format(colored_record)

    def format(self, record):
        colored_record = copy.copy(record)
        level_color = self.COLORS.get(record.levelno, "")

        # Color individual fields
        colored_record.asctime = f"{self.TIMESTAMP_COLOR}{self.formatTime(record)}{self.RESET}"
        colored_record.levelname = f"{level_color}{record.levelname}{self.RESET}"
        colored_record.name = f"{self.LOGGER_COLOR}{record.name}{self.RESET}"
        colored_record.msg = f"{self.MESSAGE_COLOR}{record.msg}{self.RESET}"
        return super().format(colored_record)


def setup_logging() -> None:
    logging_config = {
        "version": 1,
        "disable_existing_loggers": False,

        "formatters": {
            "standard": {
                "()": ColoredFormatter,
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

        "loggers": {
            "uvicorn": {
                "level": "INFO",
                "handlers": ["console"],
                "propagate": False,
            },
            "uvicorn.error": {
                "level": "INFO",
                "handlers": ["console"],
                "propagate": False,
            },
            "uvicorn.access": {
                "level": "INFO",
                "handlers": ["console"],
                "propagate": False,
            },
        },

        "root": {
            "level": "INFO",
            "handlers": ["console"],
        },
    }

    logging.config.dictConfig(logging_config)
`;
