import { useEffect, useRef, useState } from "react";
import LoggingSlf4JLogback from "./LoggingSections/LoggingSlf4JLogback";
import LoggingLogUtil from "./LoggingSections/LoggingLogUtil";
import ContentList from "../../ContentList";

// =============================================================================================================

const log_util = "log util";
const slf4j_or_logback = "SLF4J or Logback";

// =============================================================================================================

const anchorList: string[] = [slf4j_or_logback, log_util];

// =============================================================================================================

const Logging = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleShowContent = () => {
    setShowContent(!showContent);
    if (sessionStorage.getItem("scrollHeight") !== null) {
      const value = JSON.parse(sessionStorage.getItem("scrollHeight") as string);
      setContentHeight(value);
    }
  };

  useEffect(() => {
    if (ulRef.current !== null) {
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight + 16));
      setContentHeight(ulRef.current.scrollHeight + 16);
    }
  }, []);
  return (
    <section>
      {/* Start Contents */}
      <article className="content-sm content-md content-lg content-xl content-basic">
        <div className="mb-0 w-[100%] bg-gray-800 px-2 py-1 text-center capitalize">
          <span className="ml-2 text-sm font-semibold tracking-wider text-white">contents </span>
          <span className={`${showContent ? `text-red-400` : `text-teal-400`} cursor-pointer text-xs`} onClick={handleShowContent}>
            [{showContent ? " hide " : " show "}]
          </span>
        </div>

        <ContentList ulRef={ulRef} showContent={showContent} contentHeight={contentHeight} anchorList={anchorList}></ContentList>
      </article>

      {/* End Contents */}

      <LoggingSlf4JLogback anchor={slf4j_or_logback} />
      <LoggingLogUtil anchor={log_util} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Logging;
