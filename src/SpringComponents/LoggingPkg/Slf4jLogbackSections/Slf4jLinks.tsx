import { MainChildArea } from "../../../components";
import { Span } from "../../../Highlight";

const Slf4jLinks = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5 mt-5">
        <span className="rounded-md bg-teal-500 p-1 text-white">SLF4J</span> - <span className="font-bold text-red-500">S</span>imple{" "}
        <span className="font-bold text-red-500">L</span>
        ogging <span className="font-bold text-red-500">F</span>acade &nbsp;
        <span className="font-bold text-red-500">f</span>or <span className="font-bold text-red-500">J</span>ava.
      </div>
      It’s not a logging implementation by itself, but rather a facade or abstraction for various logging frameworks (e.g., Logback, Log4j,
      java.util.logging). It allows your application code to remain independent of the underlying logging framework.
      <div className="mb-5 mt-5">Links with examples of how to config:</div>
      <ul className="mx-8 list-decimal">
        <li className="my-1">
          <a href="https://dzone.com/articles/configuring-logback-with-spring-boot" target="_blank" className="text-blue-500">
            DZone
          </a>
        </li>
        <li className="my-1">
          <a href="https://www.baeldung.com/logback" target="_blank" className="text-blue-500">
            Baeldung
          </a>
        </li>
        <li className="my-1">
          <a href="https://mkyong.com/spring-boot/spring-boot-logging-example/" target="_blank" className="text-blue-500">
            MyKong
          </a>
        </li>
        <li className="my-1">
          <a href="https://www.codingame.com/playgrounds/4497/configuring-logback-with-spring-boot" target="_blank" className="text-blue-500">
            Configuring Logback with Spring Boot
          </a>
        </li>
        <li className="my-1">
          <a href="https://logback.qos.ch/" target="_blank" className="text-blue-500">
            Logback
          </a>
          &nbsp; and &nbsp;
          <a href="https://logback.qos.ch/manual/layouts.html#conversionWord" target="_blank" className="text-blue-500">
            logback manual
          </a>
        </li>
        <li className="my-1">
          <a href="https://docs.spring.io/spring-boot/docs/2.7.6/reference/htmlsingle/#features.logging" target="_blank" className="text-blue-500">
            Spring Doc 2.7.6 - Logging
          </a>
        </li>
        <li className="my-1">
          <a href="https://howtodoinjava.com/logback/logback-html-layout/" target="_blank" className="text-blue-500">
            Logback HTML layout
          </a>
        </li>
        <li className="my-1">
          <a href="https://www.youtube.com/watch?v=ZmTNAKuTyVg" target="_blank" className="text-blue-500">
            Logback Video
          </a>
        </li>
      </ul>
      {/*  */}
      {/*  */}
      <section>
        <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">Why Logback </div>
        <ul className="mx-8 list-decimal">
          <li className="my-1">Logback is a successor to log4j</li>
          <li className="my-1">Great improvement over log4j</li>
          <li className="my-1">Faster & smaller memory footprint thatn log4j</li>
          <li className="my-1">
            Implements <Span>SLF4J</Span> natively
          </li>
          <li className="my-1">Automatic reloading of configuration files </li>
          <li className="my-1">Automatic removal of old log archives</li>
          <li className="my-1">Automatic compression of archived log files</li>
          <li className="my-1">Filters : used-based logging, thread-based logging</li>
        </ul>
      </section>
      {/*  */}
      {/*  */}
      <section>
        <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 tracking-widest text-white">
          Rolling file setup in application.properties
        </div>
        <ul className="mx-8 list-decimal">
          <li className="my-1">logging.file.path</li>
          <li className="my-1">logging.file.name</li>
          <li className="my-1">logging.pattern.file</li>
          <li className="my-1">logging.pattern.rolling-file-name</li>
          <li className="my-1">logging.file.max.size (default: 10MB)</li>
          <li className="my-1">logging.file.max.history (default: 7 days)</li>
          <li className="my-1">logging.file.total-size-cap</li>
          <li className="my-1">logging.file.clean-history-on-start</li>
        </ul>
      </section>
      {/*  */}
      {/*  */}
    </MainChildArea>
  );
};

export default Slf4jLinks;
