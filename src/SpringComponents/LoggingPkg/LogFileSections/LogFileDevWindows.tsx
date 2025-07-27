import { FaDiamond } from "react-icons/fa6";
import { CopyCode, MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, Span } from "../../../Highlight";

const LogFileDevWindows = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-4">
        <div>
          <span className="rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">logging.file.name</span>
        </div>
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; in this example I only config &nbsp; <Span>application.properties</Span>
          &nbsp; with &nbsp; <Span>logging.file.name</Span>
        </div>

        <div className="my-4"></div>
        <CopyCode code={logginFileNameOnlyProperties}>
          <ApplicationPropertiesHighlight propertiesCode={logginFileNameOnlyProperties} />
        </CopyCode>

        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; JAVA code using a simple &nbsp; <Span>RestController</Span>&nbsp;
        </div>

        <CopyCode code={logginFileNameOnlyCode}>
          <JavaHighlight javaCode={logginFileNameOnlyCode} />
        </CopyCode>

        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp; <Span>GET request</Span> &nbsp; , to check log file is created
          , refresh the project (F5) , see if &nbsp;
          <Span>app.log</Span> &nbsp; created , then explore the content of &nbsp; <Span>app.log</Span> &nbsp; , see if data is logged in it.
        </div>
      </article>

      {/*  */}
      {/*  */}

      <article className="my-4">
        <div>
          <span className="rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">logging.file.path</span>
        </div>
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; in this example I only config &nbsp; <Span>application.properties</Span>
          &nbsp; with &nbsp; <Span>logging.file.path</Span>
        </div>

        <div className="my-4"></div>
        <CopyCode code={logginFileNameOnlyProperties}>
          <ApplicationPropertiesHighlight propertiesCode={logginFileNameOnlyProperties} />
        </CopyCode>

        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; JAVA code using a simple &nbsp; <Span>RestController</Span>&nbsp;
        </div>

        <CopyCode code={logginFileNameOnlyCode}>
          <JavaHighlight javaCode={logginFileNameOnlyCode} />
        </CopyCode>

        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp;<Span>GET request</Span> &nbsp; , to check log file is created
          , refresh the project (F5) , see if &nbsp;
          <Span>app.log</Span> &nbsp; created , then explore the content of &nbsp; <Span>app.log</Span> &nbsp; , see if data is logged in it.
        </div>
      </article>
    </MainChildArea>
  );
};

export default LogFileDevWindows;

const logginFileNameOnlyProperties = `# Log to a file named app.log in the project root
logging.file.name=app.log`;

const logginFileNameOnlyCode = `import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;

@SpringBootApplication
@RestController("/")
public class LoggingProjApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(LoggingProjApplication.class);

	public static void main(String[] args) throws JsonProcessingException {
		SpringApplication.run(LoggingProjApplication.class, args);
	}

	@GetMapping("/data")
	public String getMethodName() {
		LOGGER.info("test my app");
		return new String("test my app");
	}
}`;
