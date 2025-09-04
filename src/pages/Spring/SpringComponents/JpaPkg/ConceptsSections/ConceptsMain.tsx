import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_InMemoryVsDB from "./O1_InMemoryVsDB";
import O2_SaveFlushCommit from "./O2_SaveFlushCommit";
import O3_HibernateSession from "./O3_HibernateSession";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_InMemoryVsDB = "1. InMemory(PersistentContext) Vs DB";
const o2_SaveFlushCommit = "2. Save, Flush, Commit";
const o3_HibernateSession = "3. Hibernate Session";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_InMemoryVsDB, o2_SaveFlushCommit, o3_HibernateSession];

// ============================================
// ============================================

const ConceptsMain = () => {
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

      <O1_InMemoryVsDB anchor={o1_InMemoryVsDB}></O1_InMemoryVsDB>
      <O2_SaveFlushCommit anchor={o2_SaveFlushCommit}></O2_SaveFlushCommit>
      <O3_HibernateSession anchor={o3_HibernateSession}></O3_HibernateSession>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ConceptsMain;
