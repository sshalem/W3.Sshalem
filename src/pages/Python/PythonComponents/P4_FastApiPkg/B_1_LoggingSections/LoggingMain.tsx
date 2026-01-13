import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DefaultLogging from "./O1_DefaultLogging";
import O2_LogginLevel from "./O2_LogginLevel";
import O3_FastAPILogging from "./O3_FastAPILogging";
import OX_LoggingConf from "./OX_LoggingConf";
import OX_LoggingConfigPy from "./OX_LoggingConfigPy";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DefaultLogging = "1. Default Logging";
const o2_LogginLevel = "2. Logging Level";
const o3_FastAPILogging = "3. Fast API Logging";
const oX_LoggingConfigPy = "oX . logging_config.py";
const oX_LoggingConf = "oX. logging.conf";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_DefaultLogging, o2_LogginLevel, o3_FastAPILogging, oX_LoggingConfigPy, oX_LoggingConf];

// ============================================
// ============================================

const LoggingMain = () => {
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
      {/* Start Contents */}
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}

      <O1_DefaultLogging anchor={o1_DefaultLogging} />
      <O2_LogginLevel anchor={o2_LogginLevel} />
      <O3_FastAPILogging anchor={o3_FastAPILogging} />
      <OX_LoggingConfigPy anchor={oX_LoggingConfigPy} />
      <OX_LoggingConf anchor={oX_LoggingConf} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default LoggingMain;
