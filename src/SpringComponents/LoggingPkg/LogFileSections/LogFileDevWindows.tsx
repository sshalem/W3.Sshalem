import { FaDiamond } from "react-icons/fa6";
import { CopyCode, MainChildArea } from "../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, Span } from "../../../Highlight";
import log_file_1 from "../../../assets/log_file_1.jpg";

const LogFileDevWindows = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-8">in this section I will show , how to config the log file during dev process on wiindows</div>
      <div className="my-1 ml-8 flex flex-wrap">
        <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Config &nbsp; <span className="font-semibold text-red-500">only</span> &nbsp;
        <Span>logging.file.name</Span>&nbsp;
      </div>
      <div className="my-1 ml-8 flex flex-wrap">
        <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Config &nbsp; <span className="font-semibold text-red-500">only</span> &nbsp;
        <Span>logging.file.path</Span>&nbsp;
      </div>
      <div className="my-1 ml-8 flex flex-wrap">
        <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Config &nbsp; <span className="font-semibold text-emerald-500">both</span>
        &nbsp; <Span>logging.file.name</Span>&nbsp; and &nbsp;
        <Span>logging.file.path</Span>&nbsp;
      </div>
      {/*  */}
      {/*  */}
      <article className="my-16">
        <div>
          <span className="rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">
            config <span className="font-mono">logging.file.name </span> only
          </span>
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
        <CopyCode code={logginFileCode}>
          <JavaHighlight javaCode={logginFileCode} />
        </CopyCode>
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp;<Span>GET request</Span> &nbsp; ,refresh the project (F5) ,
          check log file is created , see if &nbsp;
          <Span>app.log</Span> &nbsp; created , then explore the content of &nbsp; <Span>app.log</Span> &nbsp; , see if data is logged in it.
        </div>
      </article>
      {/*  */}
      {/*  */}
      <article className="my-16">
        <div>
          <span className="rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">
            config <span className="font-mono">logging.file.path </span> only
          </span>
        </div>
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; in this example I only config &nbsp; <Span>application.properties</Span>
          &nbsp; with &nbsp; <Span>logging.file.path</Span>
        </div>

        <div className="my-4"></div>
        <CopyCode code={logginFilePathOnlyProperties}>
          <ApplicationPropertiesHighlight propertiesCode={logginFilePathOnlyProperties} />
        </CopyCode>

        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; JAVA code using a simple &nbsp; <Span>RestController</Span>&nbsp; as in
          previous example
        </div>

        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp;<Span>GET request</Span> &nbsp; ,refresh the project (F5) ,
          check if a directory &nbsp;<Span>myLogDir</Span> &nbsp; is created, and check if log file is &nbsp;<Span>spring.log</Span>&nbsp; created.
        </div>
        <img src={log_file_1} alt="log_file" className="ml-20 mt-10" />
      </article>
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      <article className="my-8">
        <div>
          <span className="rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">
            config both <span className="font-mono">logging.file.name and path </span>
          </span>
        </div>
        <div className="my-4">
          In this example I config &nbsp; <Span>application.properties</Span>
          &nbsp; with both &nbsp; <Span>logging.file.name</Span> &nbsp; and &nbsp;<Span>logging.file.path</Span>
          It kind of tricky , since DOCS says , If I have both configured , then &nbsp;<Span>logging.file.path</Span> will be ignored. <br />
          Thus, In order to be able to have a log file , in my defined folder , with my defined name , here is how I do it
          <Span>logging.file.name=./myLogDir/sshb.log</Span>
        </div>
        <div className="my-4"></div>
        <CopyCode code={logginFilePathOnlyProperties}>
          <ApplicationPropertiesHighlight propertiesCode={logginFilePathOnlyProperties} />
        </CopyCode>
        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; JAVA code using a simple &nbsp; <Span>RestController</Span>&nbsp; as in
          previous example
        </div>
        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp;<Span>GET request</Span> &nbsp; ,refresh the project (F5) ,
          check if a directory &nbsp;<Span>myLogDir</Span> &nbsp; is created, and check if log file is &nbsp;<Span>spring.log</Span>&nbsp; created.
        </div>
        <img src={log_file_1} alt="log_file" className="ml-20 mt-10" />
      </article>
    </MainChildArea>
  );
};

export default LogFileDevWindows;

const logginFileNameOnlyProperties = `# Log to a file named app.log in the project root
logging.file.name=app.log`;

const logginFilePathOnlyProperties = `# Log to a directory named myLogDir in the project root
# it will create by default a Spring.log file
logging.file.path=./myLogDir`;

const logginFileCode = `import org.slf4j.Logger;
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
