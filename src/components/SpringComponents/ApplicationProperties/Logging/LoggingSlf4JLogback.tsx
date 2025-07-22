import ContentTitle from "../../../ContentAnchor";

import { ApplicationPropertiesHighlight, JavaHighlight, Span, XmlHighlight } from "../../../Highlight";

const LoggingSlf4JLogback = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor}>
      <ContentTitle anchor={anchor} />
      <div>Links with examples of how to config:</div>
      <ul className="mx-8">
        <li className="my-1 list-decimal">
          <a href="https://dzone.com/articles/configuring-logback-with-spring-boot" target="_blank" className="text-blue-500">
            DZone
          </a>
        </li>
        <li className="my-1 list-decimal">
          <a href="https://www.baeldung.com/logback" target="_blank" className="text-blue-500">
            Baeldung
          </a>
        </li>
        <li className="my-1 list-decimal">
          <a href="https://mkyong.com/spring-boot/spring-boot-logging-example/" target="_blank" className="text-blue-500">
            MyKong
          </a>
        </li>
        <li className="my-1 list-decimal">
          <a href="https://www.codingame.com/playgrounds/4497/configuring-logback-with-spring-boot" target="_blank" className="text-blue-500">
            Configuring Logback with Spring Boot
          </a>
        </li>
        <li className="my-1 list-decimal">
          <a href="https://logback.qos.ch/" target="_blank" className="text-blue-500">
            Logback
          </a>
          &nbsp; and &nbsp;
          <a href="https://logback.qos.ch/manual/layouts.html#conversionWord" target="_blank" className="text-blue-500">
            logback manual
          </a>
        </li>
        <li className="my-1 list-decimal">
          <a href="https://docs.spring.io/spring-boot/docs/2.7.6/reference/htmlsingle/#features.logging" target="_blank" className="text-blue-500">
            Spring Doc 2.7.6 - Logging
          </a>
        </li>
        <li className="my-1 list-decimal">
          <a href="https://howtodoinjava.com/logback/logback-html-layout/" target="_blank" className="text-blue-500">
            Logback HTML layout
          </a>
        </li>
        <li className="my-1 list-decimal">
          <a href="https://www.youtube.com/watch?v=ZmTNAKuTyVg" target="_blank" className="text-blue-500">
            Logback Video
          </a>
        </li>
      </ul>

      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">POM file </div>
      <div>
        <Span>Logback</Span> &nbsp; is part of spring boot so , There is no need to add any Dependency , as long as we have at least one dependency
        that it is part of spring boot , <br />
        <div>
          for example : <span className="text-red-500"> web starter depenency</span>
        </div>
        <XmlHighlight xmlCode={dependency} />
      </div>
      {/*  */}
      {/*  */}
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">Code usage example </div>
      <div>
        <JavaHighlight javaCode={javaCodeLogExample} />
      </div>
      {/*  */}
      {/*  */}
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">Re-Produce Logback console Logging pattern</div>
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
      <ul className="mx-8">
        <li className="my-1 list-disc">
          <ApplicationPropertiesHighlight propertiesCode={line_1} /> Date and Time: Millisecond precision and easily sortable.
        </li>
        <li className="my-1 list-disc"></li>
        <li className="my-1 list-disc"></li>
        <li className="my-1 list-disc"></li>
        <li className="my-1 list-disc"></li>
        <li className="my-1 list-disc"></li>
        <li className="my-1 list-disc"></li>
      </ul>
    </article>
  );
};

const line_1 = `%clr(%d{\${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint}`;

// %clr(%d{${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint} -
export default LoggingSlf4JLogback;

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
