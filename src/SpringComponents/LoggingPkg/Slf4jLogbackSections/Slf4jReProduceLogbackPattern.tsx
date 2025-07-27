import { CopyCode, MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const Slf4jReProduceLogbackPattern = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">
          Re-Produce Logback console Logging pattern
        </div>
        <div>
          From logback &nbsp;
          <a href="https://logback.qos.ch/manual/layouts.html" target="_blank" className="text-blue-500">
            https://logback.qos.ch/manual/layouts.html
          </a>
          ,
        </div>
        <div>I have re-produce the same logging pattern that comes with deafult .</div>
        <div>
          This line of logger creates same format of logging in <Span>spring console</Span> :
        </div>
        <div>
          <ApplicationPropertiesHighlight propertiesCode={loggingReProduce} />
        </div>

        <div className="my-8">Here is another way to config the pattern </div>
        <CopyCode code={anotherWayCode}>
          <ApplicationPropertiesHighlight propertiesCode={anotherWayCode} />
        </CopyCode>
        <div className="my-8">logging.pattern.console exlpained:</div>
        <ul className="mx-8 list-decimal">
          <li className="my-1">
            <Span>{line_1}</Span> - Date and Time: Millisecond precision and easily sortable.
          </li>
          <li className="my-1">
            <Span>{line_2}</Span> - Log Level: ERROR, WARN, INFO, DEBUG, or TRACE.
          </li>
          <li className="my-1">
            <Span>{line_3}</Span> - Process ID.
          </li>
          <li className="my-1">
            <Span>{line_4}</Span> - 3 dashes --- separator to distinguish the start of actual log messages.
          </li>
          <li className="my-1">
            <Span>{line_5}</Span> - Thread name: Enclosed in square brackets (may be truncated for console output).
          </li>
          <li className="my-1">
            <Span>{line_6}</Span> - Logger name: This is usually the source class name (often abbreviated).
          </li>
          <li className="my-1">
            <Span>{line_7}</Span> -The log message.
          </li>
        </ul>
      </section>
    </MainChildArea>
  );
};

export default Slf4jReProduceLogbackPattern;

const loggingReProduce = `logging.pattern.console=\\
	%d{dd-MM-yyyy HH:mm:ss.SSS}  \\
	%clr(%5p) \\
	%clr(\${PID:- }){magenta}  \\
	--- \\
	[%15.15t]  \\
	%cyan(%-40.40logger{39}) : %msg %n`;

const anotherWayCode = `logging.pattern.console=\\
	%clr(%d{\${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint} \\
	%clr(\${LOG_LEVEL_PATTERN:-%5p}) \\
	%clr(\${PID:- }){magenta} \\
	%clr(---){faint} \\
	%clr([%15.15t]){faint} \\
	%clr(%-40.40logger{39}){cyan} \\
	%clr(:){faint} %m%n`;

const line_1 = `%clr(%d{\${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint}`;
const line_2 = `%clr(\${LOG_LEVEL_PATTERN:-%5p})`;
const line_3 = `%clr(\${PID:- }){magenta}`;
const line_4 = `%clr(---){faint}`;
const line_5 = `%clr([%15.15t]){faint}`;
const line_6 = `%clr(%-40.40logger{39}){cyan}`;
const line_7 = `%clr(:){faint} %m%n`;
