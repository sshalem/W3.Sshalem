import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_SimpleLogging from "./O1_SimpleLogging";
import O2_CentralizedLogging from "./O2_CentralizedLogging";
import O3_InitLoggingMainPy from "./O3_InitLoggingMainPy";
import O4_RunExample from "./O4_RunExample";
import O5_ColorsToConsole from "./O5_ColorsToConsole";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_SimpleLogging = "1. Simple logging";
const o2_CentralizedLogging = "2. Centralized Logging";
const o3_InitLoggingMainPy = "3. main.py (Init logging)";
const o4_RunExample = "4. run example";
const o5_ColorsToConsole = "5. add Colors to log";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_SimpleLogging, o2_CentralizedLogging, o3_InitLoggingMainPy, o4_RunExample, o5_ColorsToConsole];

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
      <O1_SimpleLogging anchor={o1_SimpleLogging} />
      <O2_CentralizedLogging anchor={o2_CentralizedLogging} />
      <O3_InitLoggingMainPy anchor={o3_InitLoggingMainPy} />
      <O4_RunExample anchor={o4_RunExample} />
      <O5_ColorsToConsole anchor={o5_ColorsToConsole} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default LoggingMain;
