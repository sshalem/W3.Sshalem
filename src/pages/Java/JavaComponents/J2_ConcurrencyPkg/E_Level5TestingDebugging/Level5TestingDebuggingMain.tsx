/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O42_TestingConcurrentCode from "./O42_TestingConcurrentCode";
import O43_DebuggingConcurrentApp from "./O43_DebuggingConcurrentApp";
import O44_PerformanceTuning from "./O44_PerformanceTuning;";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o42_TestingConcurrentCode = "o42_TestingConcurrentCode";
const o43_DebuggingConcurrentApp = "o43_DebuggingConcurrentApp";
const o44_PerformanceTuning = "o44_PerformanceTuning";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o42_TestingConcurrentCode, o43_DebuggingConcurrentApp, o44_PerformanceTuning];

// ============================================
// ============================================

const Level5TestingDebuggingMain = () => {
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

      <O42_TestingConcurrentCode anchor={o42_TestingConcurrentCode} />
      <O43_DebuggingConcurrentApp anchor={o43_DebuggingConcurrentApp} />
      <O44_PerformanceTuning anchor={o44_PerformanceTuning} />
      {/* <O35_SpringAsync anchor={o35_SpringAsync} /> */}

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default Level5TestingDebuggingMain;
