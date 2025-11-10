/*
/spring/logging/log-file#logfiledevwindows
Log File Dev Windows --> (SPRING)(Logging)(Log File)
*/
import { FaDiamond } from "react-icons/fa6";
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import log_file_1 from "../../../../../assets/log_file_1.jpg";
import log_file_2 from "../../../../../assets/log_file_2.jpg";

const LogFileDevWindows = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-8">in this section I will show , how to config the log file during dev process on wiindows</div>
      <div className="my-1 ml-8 flex flex-wrap">
        <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Config &nbsp; <SpanRed>only</SpanRed> &nbsp;
        <SpanBlue>logging.file.name</SpanBlue>&nbsp;
      </div>
      <div className="my-1 ml-8 flex flex-wrap">
        <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Config &nbsp; <SpanRed>only</SpanRed> &nbsp;
        <SpanBlue>logging.file.path</SpanBlue>&nbsp;
      </div>
      <div className="my-1 ml-8 flex flex-wrap">
        <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Config &nbsp; <SpanGreen>both</SpanGreen>
        &nbsp; <SpanBlue>logging.file.name</SpanBlue>&nbsp; and &nbsp;
        <SpanBlue>logging.file.path</SpanBlue>&nbsp;
      </div>
      {/*  */}
      {/*  */}
      <article className="my-16">
        <div>
          config <SpanBlue>logging.file.name </SpanBlue> only
        </div>
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; in this example I only config &nbsp;{" "}
          <SpanBlue>application.properties</SpanBlue>
          &nbsp; with &nbsp; <SpanBlue>logging.file.name</SpanBlue>
        </div>
        <div className="my-4"></div>
        <ApplicationPropertiesHighlight propertiesCode={logginFileNameOnlyProperties} />
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; JAVA code using a simple &nbsp; <SpanBlue>RestController</SpanBlue>&nbsp;
        </div>
        <JavaHighlight javaCode={logginFileCode} />
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp;<SpanBlue>GET request</SpanBlue> &nbsp; ,refresh the project
          (F5) , check log file is created , see if &nbsp;
          <SpanBlue>app.log</SpanBlue> &nbsp; created , then explore the content of &nbsp; <SpanBlue>app.log</SpanBlue> &nbsp; , see if data is logged
          in it.
        </div>
      </article>
      {/*  */}
      {/*  */}
      <article className="my-16">
        <div>
          config <SpanBlue>logging.file.path </SpanBlue> only
        </div>
        <div className="my-5 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; in this example I only config &nbsp;{" "}
          <SpanBlue>application.properties</SpanBlue>
          &nbsp; with &nbsp; <SpanBlue>logging.file.path</SpanBlue>
        </div>

        <div className="my-4"></div>
        <ApplicationPropertiesHighlight propertiesCode={logginFilePathOnlyProperties} />

        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; JAVA code using a simple &nbsp; <SpanBlue>RestController</SpanBlue>&nbsp; as
          in previous example
        </div>

        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp;<SpanBlue>GET request</SpanBlue> &nbsp; ,refresh the project
          (F5) , check if a directory &nbsp;<SpanBlue>myLogDir</SpanBlue> &nbsp; is created, and check if log file is &nbsp;
          <SpanBlue>spring.log</SpanBlue>&nbsp; created.
        </div>
        <img src={log_file_1} alt="log_file" className="ml-20 mt-10" />
      </article>
      {/*  */}
      {/*  */}

      {/*  */}
      {/*  */}
      <article className="my-8">
        <div>
          config both <SpanBlue>logging.file.name and path </SpanBlue>
        </div>
        <div className="my-4">
          In this example I config &nbsp; <SpanBlue>application.properties</SpanBlue>
          &nbsp; with both &nbsp; <SpanBlue>logging.file.name</SpanBlue> &nbsp; and &nbsp;<SpanBlue>logging.file.path</SpanBlue>
          It kind of tricky , since DOCS says , If I have both configured , then &nbsp;<SpanBlue>logging.file.path</SpanBlue> will be ignored. <br />
          Thus, In order to be able to have a log file , in my defined folder , with my defined name , here is how I do it
          <SpanBlue>logging.file.name=./myLogDir/sshb.log</SpanBlue>
        </div>
        <div className="my-4"></div>
        <ApplicationPropertiesHighlight propertiesCode={logginFilePathOnlyProperties} />
        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; JAVA code using a simple &nbsp; <SpanBlue>RestController</SpanBlue>&nbsp; as
          in previous example
        </div>

        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp; Send a &nbsp;<SpanBlue>GET request</SpanBlue> &nbsp; ,refresh the project
          (F5) , check if a directory &nbsp;<SpanBlue>myLogDir</SpanBlue> &nbsp; is created, and check if log file is &nbsp;
          <SpanBlue>spring.log</SpanBlue>&nbsp; created.
        </div>
        <div className="my-1 ml-8 flex flex-wrap">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> We cans see , a directory &nbsp;
          <SpanBlue>myLogDir</SpanBlue>&nbsp; is created , with the file name I define &nbsp;
          <SpanBlue>sshb.log</SpanBlue>&nbsp;
        </div>
        <img src={log_file_2} alt="log_file" className="ml-20 mt-10" />
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
