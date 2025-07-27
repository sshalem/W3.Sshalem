import { CopyCode, MainChildArea } from "../../../components";
import { JavaHighlight, Span, XmlHighlight } from "../../../Highlight";

const Slf4jUtil = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">POM file </div>
        <div>
          <Span>Logback</Span> &nbsp; is part of spring boot so , There is no need to add any Dependency , as long as we have at least one dependency
          that it is part of spring boot , <br />
          <div>
            for example : <Span> web starter depenency</Span>
          </div>
          <div className="my-5">Add to POM file</div>
          <CopyCode code={dependency}>
            <XmlHighlight xmlCode={dependency} />
          </CopyCode>
        </div>
      </section>
      {/*  */}
      {/*  */}
      <section>
        <div className="my-5">code below I use:</div>
        <ul className="list-disc pl-8">
          <li className="my-1">
            <Span>import org.slf4j.Logger</Span> - The <span className="text-blue-600">org.slf4j.Logger</span> interface is the main user entry point
            of SLF4J API.
          </li>
          <li className="my-1">
            <Span>import org.slf4j.LoggerFactory</Span> - The <span className="text-blue-600">LoggerFactory</span> is a utility class producing
            Loggers forvarious logging APIs, e.g. logback
          </li>
        </ul>
        <div className="my-5">
          <CopyCode code={javaCodeLogExample}>
            <JavaHighlight javaCode={javaCodeLogExample} />
          </CopyCode>
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
