import { MainChildArea } from "../../../components";
import { Span } from "../../../Highlight";

const LogFileIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      {" "}
      <article className="my-0">
        <div>refernce link</div>
        <a
          href="https://docs.spring.io/spring-boot/reference/features/logging.html"
          target="_blank"
          className="tracking-wider text-blue-500 underline"
        >
          https://docs.spring.io/spring-boot/reference/features/logging.html
        </a>
      </article>
      <article className="my-5">
        <div>
          By default, Spring Boot logs only to the console and does not write log files. <br /> If you want to write log files in addition to the
          console output, you need to set a :
          <ul className="my-5 list-disc pl-8">
            <li className="my-1">
              <Span>logging.file.name</Span>
            </li>
            <li className="my-1">
              or <Span>logging.file.path</Span> property (for example, in your application.properties).
            </li>
          </ul>
          <div className="my-4">
            If both properties are set &nbsp;
            <Span>
              <span className="text-red-500">logging.file.path</span>
            </Span>
            &nbsp; is ignored, and only &nbsp;
            <Span>
              <span className="text-emerald-500">logging.file.name</span>
            </Span>
            &nbsp; is used.
          </div>
          <div className="my-8">
            <span className="rounded-md bg-red-500 p-1 px-2 font-semibold text-white">Important note</span>
            <ul className="my-5 list-disc pl-8">
              <li className="my-1">
                <Span>System.out.println()</Span> writes only (directly) to the console (not to file), and bypasses the logging framework entirely.
              </li>
              <li className="my-1">
                <Span>Spring Boot’s logging()</Span> (e.g., via SLF4J, Logback, or Log4j2) is configured to write logs to both the console and
                optionally a file.
              </li>
            </ul>
          </div>
          <div className="my-4">
            There are 4 possible options with logging file on production server (see Spring docs ) &nbsp;
            <a
              href="https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-output"
              target="_blank"
              className="tracking-wider text-blue-500 underline"
            >
              Logging properties File output
            </a>
          </div>
        </div>
      </article>
    </MainChildArea>
  );
};

export default LogFileIntro;
