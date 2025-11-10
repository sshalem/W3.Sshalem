/*
/spring/logging/slf4j-logback#slf4j(Logback)util
Slf4j Util --> (SPRING)(Logging)(Slf4j (Logback))
*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanBlue, XmlHighlight } from "../../../../../components/Highlight";

const Slf4jUtil = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">POM file </div>
        <div>
          <SpanBlue>Logback</SpanBlue> &nbsp; is part of spring boot so , There is no need to add any Dependency , as long as we have at least one
          dependency that it is part of spring boot , <br />
          <div>
            for example : <SpanBlue> web starter depenency</SpanBlue>
          </div>
          <div className="my-5">Add to POM file</div>
          <XmlHighlight xmlCode={dependency} />
        </div>
      </section>
      {/*  */}
      {/*  */}
      <section>
        <div className="my-5">code below I use:</div>
        <ul className="list-disc pl-8">
          <li className="my-1">
            <SpanBlue>import org.slf4j.Logger</SpanBlue> - The <span className="text-blue-600">org.slf4j.Logger</span> interface is the main user
            entry point of SLF4J API.
          </li>
          <li className="my-1">
            <SpanBlue>import org.slf4j.LoggerFactory</SpanBlue> - The <span className="text-blue-600">LoggerFactory</span> is a utility class
            producing Loggers forvarious logging APIs, e.g. logback
          </li>
        </ul>
        <div className="my-5">
          <JavaHighlight javaCode={javaCodeLogExample} />
        </div>
      </section>
      {/*  */}
      {/*  */}
    </MainChildArea>
  );
};

export default Slf4jUtil;

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
