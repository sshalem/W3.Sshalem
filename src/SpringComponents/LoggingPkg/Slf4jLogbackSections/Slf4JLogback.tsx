import { MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const Slf4JLogback = ({ anchor }: { anchor: string }) => {
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
        <div className="my-8">logging.pattern.console exlpained:</div>
        <ul className="mx-8 list-disc">
          <li className="my-1">
            <ApplicationPropertiesHighlight propertiesCode={line_1} /> Date and Time: Millisecond precision and easily sortable.
          </li>
          <li className="my-1"></li>
          <li className="my-1"></li>
          <li className="my-1"></li>
          <li className="my-1"></li>
          <li className="my-1"></li>
          <li className="my-1"></li>
        </ul>
      </section>
      {/*  */}
      {/*  */}
    </MainChildArea>
  );
};

const line_1 = `%clr(%d{\${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint}`;

// %clr(%d{${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint} -
export default Slf4JLogback;

const loggingReProduce = `logging.pattern.console=\
	%d{dd-MM-yyyy HH:mm:ss.SSS}  \
	%clr(%5p) \
	%clr(\${PID:- }){magenta}  \
	--- \
	[%15.15t]  \
	%cyan(%-40.40logger{39}) : %msg %n`;
