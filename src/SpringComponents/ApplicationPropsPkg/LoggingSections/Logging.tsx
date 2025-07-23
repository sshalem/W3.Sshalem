import { useEffect, useRef, useState } from "react";
import LoggingSlf4JLogback from "./LoggingSlf4JLogback";
import LoggingLogUtil from "./LoggingLogUtil";
import { ContentMenu, Loading } from "../../../components";

// =============================================================================================================

const log_util = "Log Util";
const slf4j_or_logback = "Slf4j Or Logback";

// =============================================================================================================

const anchorList: string[] = [slf4j_or_logback, log_util];

// =============================================================================================================

const Logging = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleShowContent = () => {
    setShowContent(!showContent);
    if (sessionStorage.getItem("scrollHeight") !== null) {
      const value = JSON.parse(sessionStorage.getItem("scrollHeight") as string);
      setContentHeight(value);
    }
  };

  // // Why I have 2 useEffect functions?
  // // 1. useEffect with setTimeout
  useEffect(() => {
    if (ulRef.current !== null) {
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight));
      setContentHeight(ulRef.current.scrollHeight);
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(function () {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 200);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}

      <LoggingSlf4JLogback anchor={slf4j_or_logback} />
      <LoggingLogUtil anchor={log_util} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Logging;
