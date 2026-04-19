import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../components";
import O1_PidProcessPortName from "./O1_PidProcessPortName";
import O2_ProcNameByPID from "./O2_ProcNameByPID";
import O3_ProcNameByPIDTaskMang from "./O3_ProcNameByPIDTaskMang";
import O4_KillProcess from "./O4_KillProcess";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_PidProcessPortName = "1. Find PID Process by Port Name";
const o2_ProcNameByPID = "2. Find Process Name By PID number";
const o3_ProcNameByPIDTaskMang = "3. Find PID in task Manager";
const o4_KillProcess = "4. Kill Process";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_PidProcessPortName, o2_ProcNameByPID, o3_ProcNameByPIDTaskMang, o4_KillProcess];

// ============================================
// ============================================

const PortCheckMain = () => {
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
    <section className="ml-2 md:ml-10">
      {/* Start Contents */}
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}
      <O1_PidProcessPortName anchor={o1_PidProcessPortName} />
      <O2_ProcNameByPID anchor={o2_ProcNameByPID}></O2_ProcNameByPID>
      <O3_ProcNameByPIDTaskMang anchor={o3_ProcNameByPIDTaskMang} />
      <O4_KillProcess anchor={o4_KillProcess} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default PortCheckMain;
