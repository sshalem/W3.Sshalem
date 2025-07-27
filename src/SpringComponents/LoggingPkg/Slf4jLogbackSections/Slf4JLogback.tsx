import { ContentAnchor } from "../../../components";

import { ApplicationPropertiesHighlight, JavaHighlight, Span, XmlHighlight } from "../../../Highlight";

const Slf4JLogback = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />

      <section>
        <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">POM file </div>
        <div>
          <Span>Logback</Span> &nbsp; is part of spring boot so , There is no need to add any Dependency , as long as we have at least one dependency
          that it is part of spring boot , <br />
          <div>
            for example : <span className="text-red-500"> web starter depenency</span>
          </div>
          <XmlHighlight xmlCode={dependency} />
        </div>
      </section>
      {/*  */}
      {/*  */}
      <section>
        <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">Code usage example </div>
        <div>
          <JavaHighlight javaCode={javaCodeLogExample} />
        </div>
      </section>
      {/*  */}
      {/*  */}
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
    </article>
  );
};

const line_1 = `%clr(%d{\${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint}`;

// %clr(%d{${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint} -
export default Slf4JLogback;

const dependency = `<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>`;

const javaCodeLogExample = `import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogbackController {

	private static Logger LOGGER = LoggerFactory.getLogger(LogbackController.class);

	public void getLog() {
	  LOGGER.trace("doStuff needed more information - {}");
          LOGGER.debug("doStuff needed to debug - {}");
          LOGGER.info("doStuff took input - {}");
          LOGGER.warn("doStuff needed to warn - {}");
          LOGGER.error("doStuff encountered an error with value - {}");
	}
}`;

const loggingReProduce = `logging.pattern.console=\
	%d{dd-MM-yyyy HH:mm:ss.SSS}  \
	%clr(%5p) \
	%clr(\${PID:- }){magenta}  \
	--- \
	[%15.15t]  \
	%cyan(%-40.40logger{39}) : %msg %n`;
