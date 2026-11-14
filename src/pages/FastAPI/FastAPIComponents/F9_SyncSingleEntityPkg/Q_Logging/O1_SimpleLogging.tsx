/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O1_SimpleLogging = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">logging</div>
        <ULdisc>
          <Li>
            Python has a built-in logging framework
            <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>The important thing: you don't need an external logging library to build a professional logging solution in FastAPI.</Li>
          <Li>We'll initially use Python's built-in logging framework.</Li>
          <Li>
            <SpanRed>Note</SpanRed> : Python logging is not configured to display <SpanYellow>INFO-level</SpanYellow> messages.
          </Li>
          <Li>
            By default, Python's logging level is <SpanYellow>WARNING</SpanYellow> , so <SpanYellow>logger.info()</SpanYellow> messages are ignored.
            <br />
            <br />
          </Li>
          <Li>
            <span className="text-lg font-semibold underline">Creating a logger</span>
            <ULdisc>
              <Li>
                In Python
                <Highlight_PYTHON code={_2_} />
              </Li>
              <Li>
                The <SpanEmerald>__name__</SpanEmerald> variable identifies the current Python module.
              </Li>
              <Li>
                for example
                <Highlight_PYTHON code={_3_} />
                The resulting logger name will be: <SpanYellow>app.services.customer_service</SpanYellow>
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_SimpleLogging;

const _1_ = `import logging`;

const _2_ = `import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)`;

const _3_ = `# app/services/customer_service.py

import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

logger.info("Customer created successfully")
`;
