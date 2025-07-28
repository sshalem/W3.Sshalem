import { ContentAnchor } from "../../../components";
import { JavaHighlight, Span, XmlHighlight } from "../../../Highlight";

const LoggerSlf4jLogback = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />

      <div>
        to display description in console <span className="rounded-md bg-emerald-500 px-1 py-[0.1rem] font-semibold text-white">with TimeStamp</span>{" "}
        with I will use the <Span>SLF4J (Logback)</Span>. <br />
        <Span>Logback</Span> &nbsp; is part of spring boot so , There is no need to add any Dependency , as long as we have at least one dependency
        that it is part of spring boot , <br />
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
            <Span>import org.slf4j.Logger</Span> - The <span className="text-blue-600">org.slf4j.Logger</span> interface is the main user entry point
            of SLF4J API.
          </li>
          <li className="my-1">
            <Span>import org.slf4j.LoggerFactory</Span> - The <span className="text-blue-600">LoggerFactory</span> is a utility class producing
            Loggers forvarious logging APIs, e.g. logback
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
