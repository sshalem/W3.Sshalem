import { ContentAnchor } from "../../../../../components";
import { JavaHighlight, SpanBlue, SpanGreen, XmlHighlight } from "../../../../../components/Highlight";

const LoggerSlf4jLogback = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />

      <div>
        to display description in console <SpanGreen>with TimeStamp</SpanGreen> with I will use the <SpanBlue>SLF4J (Logback)</SpanBlue>. <br />
        <SpanBlue>Logback</SpanBlue> &nbsp; is part of spring boot so , There is no need to add any Dependency , as long as we have at least one
        dependency that it is part of spring boot , <br />
        <div>
          for example : <span className="text-red-500"> web-starter-depenency</span>
        </div>
        <div className="my-5">
          <XmlHighlight xmlCode={dependency} />
        </div>
      </div>

      <div className="my-14">
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
        <div className="my-10">
          <JavaHighlight javaCode={slf4jCode} />
        </div>
      </div>
    </article>
  );
};

export default LoggerSlf4jLogback;

const slf4jCode = `import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LoggingProjApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(LoggingProjApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(LoggingProjApplication.class, args);
		LOGGER.info("show logger");
	}
}
`;

const dependency = `<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>`;
