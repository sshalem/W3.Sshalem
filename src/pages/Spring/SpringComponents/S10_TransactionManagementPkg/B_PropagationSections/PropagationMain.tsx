import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O2_InMemoryVsDB from "./O2_InMemoryVsDB";
import O3_SaveFlushCommit from "./O3_SaveFlushCommit";
import O4_HibernateSession from "./O4_HibernateSession";
import O1_IntroTxMngmt from "./O1_IntroTxMngmt";
import O5_SpringTxMngmnt from "./O5_SpringTxMngmnt";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroTxMngmt = "1. Intro TX Mangmnt";
const o2_InMemoryVsDB = "2. InMemory Vs Persistent Context Vs DB";
const o3_SaveFlushCommit = "3. Save, Flush, Commit";
const o4_HibernateSession = "4. Hibernate Session";
const o5_SpringTxMngmnt = "5. Spring Tx Management (ACID)";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroTxMngmt, o2_InMemoryVsDB, o3_SaveFlushCommit, o4_HibernateSession, o5_SpringTxMngmnt];

// ============================================
// ============================================

const PropagationMain = () => {
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
      <O1_IntroTxMngmt anchor={o1_IntroTxMngmt}></O1_IntroTxMngmt>
      <O2_InMemoryVsDB anchor={o2_InMemoryVsDB}></O2_InMemoryVsDB>
      <O3_SaveFlushCommit anchor={o3_SaveFlushCommit}></O3_SaveFlushCommit>
      <O4_HibernateSession anchor={o4_HibernateSession}></O4_HibernateSession>
      <O5_SpringTxMngmnt anchor={o5_SpringTxMngmnt}></O5_SpringTxMngmnt>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PropagationMain;
