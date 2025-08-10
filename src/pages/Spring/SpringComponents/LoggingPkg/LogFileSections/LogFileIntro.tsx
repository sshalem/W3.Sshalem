import { FaDiamond } from "react-icons/fa6";
import { LoggingComapreTable, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";

const LogFileIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
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
              <SpanBlue>logging.file.name</SpanBlue>
            </li>
            <li className="my-1">
              or <SpanBlue>logging.file.path</SpanBlue> property (for example, in your application.properties).
            </li>
          </ul>
          <div className="my-4">
            If both properties are set &nbsp;
            <SpanRed>logging.file.path</SpanRed>
            &nbsp; is ignored, and only &nbsp;
            <SpanGreen>logging.file.name</SpanGreen>
            &nbsp; is used.
          </div>
          <div className="my-8">
            <SpanRed>Important note</SpanRed>
            <ul className="my-5 list-disc pl-8">
              <li className="my-1">
                <SpanBlue>System.out.println()</SpanBlue> writes only (directly) to the console (not to file), and bypasses the logging framework
                entirely.
              </li>
              <li className="my-1">
                <SpanBlue>Spring Boot’s logging()</SpanBlue> (e.g., via SLF4J, Logback, or Log4j2) is configured to write logs to both the console and
                optionally a file.
              </li>
            </ul>
          </div>
          {/*  */}
          <article className="my-4">
            There are 4 possible options to configure <SpanBlue>Spring Boot Logging</SpanBlue> with logging file on production server (see Spring docs
            ) &nbsp;
          </article>
          <LoggingComapreTable />
          {/*  */}
          <article className="my-4">
            <div className="my-5">
              from spring docs
              <div className="my-1 ml-8 flex">
                <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
                <a
                  href="https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-output"
                  target="_blank"
                  className="tracking-wider text-blue-500"
                >
                  https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-output
                </a>
              </div>
              <div className="my-1 ml-8 flex">
                <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
                <a href="https://docs.spring.io/spring-boot/reference/features/logging.html" target="_blank" className="tracking-wider text-blue-500">
                  https://docs.spring.io/spring-boot/reference/features/logging.html
                </a>
              </div>
              <div className="my-1 ml-8 flex">
                <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
                <a
                  href="https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-rotation"
                  target="_blank"
                  className="tracking-wider text-blue-500"
                >
                  https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-rotation
                </a>
              </div>
              <div className="my-1 ml-8 flex">
                <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
                <a
                  href="https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.custom-log-configuration"
                  target="_blank"
                  className="tracking-wider text-blue-500"
                >
                  https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.custom-log-configuration
                </a>
              </div>
            </div>
          </article>
        </div>
      </article>
    </MainChildArea>
  );
};

export default LogFileIntro;
