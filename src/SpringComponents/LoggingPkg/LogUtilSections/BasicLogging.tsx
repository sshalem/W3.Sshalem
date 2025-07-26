import { ContentAnchor } from "../../../components";
import { JavaHighlight, Span } from "../../../Highlight";

const BasicLogging = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <div>
        to display description in console without TimeStamp we use the Simple <Span>System.out.println</Span>
      </div>
      <JavaHighlight javaCode={sysoutCode} />
    </article>
  );
};

export default BasicLogging;

const sysoutCode = `    public static void printMessage(String message) {
        System.out.println(message);
    }`;

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
