import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_JpaLogging from "./O1_JpaLogging";
import O2_HibernateLogging from "./O2_HibernateLogging";
import O3_P6SpyLogging from "./O3_P6SpyLogging";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================
const o1_JpaLogging = "1. Jpa logging";
const o2_HibernateLogging = "2. Hibernate logging";
const o3_P6SpyLogging = "3. P6Spy logging";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================
const anchorList: string[] = [o1_JpaLogging, o2_HibernateLogging, o3_P6SpyLogging];

// ============================================
// ============================================

const JpaLoggingMain = () => {
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

      <O1_JpaLogging anchor={o1_JpaLogging}></O1_JpaLogging>
      <O2_HibernateLogging anchor={o2_HibernateLogging}></O2_HibernateLogging>
      <O3_P6SpyLogging anchor={o3_P6SpyLogging}></O3_P6SpyLogging>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JpaLoggingMain;
