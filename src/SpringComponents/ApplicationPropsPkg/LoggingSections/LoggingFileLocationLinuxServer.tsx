import { ContentAnchor } from "../../../components";
import { Span } from "../../../Highlight";

const LoggingFileLocationLinuxServer = ({ anchor }: { anchor: string }) => {
  return (
    <section className="my-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <article className="my-0">
        <div>refernce link</div>
        <a href="https://docs.spring.io/spring-boot/reference/features/logging.html" className="tracking-wider text-blue-500 underline">
          https://docs.spring.io/spring-boot/reference/features/logging.html
        </a>
      </article>
      <article className="my-5">
        <div>
          By default, Spring Boot logs only to the console and does not write log files. <br /> If you want to write log files in addition to the
          console output, you need to set a :
          <ul className="list-disc pl-8">
            <li className="my-1">
              <Span>logging.file.name</Span>
            </li>
            <li className="my-1">
              or <Span>logging.file.path</Span> property (for example, in your application.properties).
            </li>
          </ul>
          <div className="my-4">If both properties are set:</div>
          <ul className="list-disc pl-8">
            <li className="my-1">
              <Span>
                <span className="text-red-500">logging.file.name</span>
              </Span>
              &nbsp; is ignored
            </li>
            <li className="my-1">
              and only
              <Span>
                <span className="text-emerald-500">logging.file.path</span>
              </Span>
              &nbsp; is used.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default LoggingFileLocationLinuxServer;
