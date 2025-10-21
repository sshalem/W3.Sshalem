import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroHibernateAuditing from "./O1_IntroHibernateAuditing";
import O2_HibernateEnvarsAudit from "./O2_HibernateEnvarsAudit";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroHibernateAuditing = "1. Intro";
const o2_HibernateEnvarsAudit = "2. Hibernate Envars";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroHibernateAuditing, o2_HibernateEnvarsAudit];

// ============================================
// ============================================

const HibernateEnvarsMain = () => {
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

      <O1_IntroHibernateAuditing anchor={o1_IntroHibernateAuditing}></O1_IntroHibernateAuditing>
      <O2_HibernateEnvarsAudit anchor={o2_HibernateEnvarsAudit}></O2_HibernateEnvarsAudit>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default HibernateEnvarsMain;
