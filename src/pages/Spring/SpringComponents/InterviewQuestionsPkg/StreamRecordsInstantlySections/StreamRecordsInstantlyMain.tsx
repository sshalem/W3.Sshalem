import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_StreamMillionRecords from "./O1_StreamMillionRecords";
import O2_LiveUpdateDataDashboard from "./O2_LiveUpdateDataDashboard";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_StreamMillionRecords = "1. Stream Million Records Instantly";
const o2_LiveUpdateDataDashboard = "2. Live Update Data Dashboard";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_StreamMillionRecords, o2_LiveUpdateDataDashboard];

// ============================================
// ============================================

const StreamRecordsInstantlyMain = () => {
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

      <O1_StreamMillionRecords anchor={o1_StreamMillionRecords}></O1_StreamMillionRecords>
      <O2_LiveUpdateDataDashboard anchor={o2_LiveUpdateDataDashboard}></O2_LiveUpdateDataDashboard>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default StreamRecordsInstantlyMain;
