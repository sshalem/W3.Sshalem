import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../components";
import BasicLogging from "./BasicLogging";
import LoggerSlf4jLogback from "./LoggerSlf4jLogback";
import PojoAsJson from "./PojoAsJson";
import JsonObject from "./JsonObject";
import LogUtilClass from "./LogUtilClass";

// =============================================================================================================

const basic_logging = "basic logging";
const logger_slf4j_logback = "logger Slf4j Logback";
const json_object = "json object";
const pojo_as_json_in_console = "pojo as json in console";
const log_util_class = "log util class";

// =============================================================================================================

const anchorList: string[] = [basic_logging, logger_slf4j_logback, json_object, pojo_as_json_in_console, log_util_class];

// =============================================================================================================

const LogUtil = () => {
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
      <BasicLogging anchor={basic_logging} />
      <LoggerSlf4jLogback anchor={logger_slf4j_logback} />
      <JsonObject anchor={json_object} />
      <PojoAsJson anchor={pojo_as_json_in_console} />
      <LogUtilClass anchor={log_util_class} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default LogUtil;
