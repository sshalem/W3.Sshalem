import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroAuditing from "./O1_IntroAuditing";
import O2_SpringJpaAudit from "./O2_SpringJpaAudit";
import O3_HibernateEnvars from "./O3_HibernateEnvars";
import O4_SpringDataEnvars from "./O4_SpringDataEnvars";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroAuditing = "1. Intro";
const o2_SpringJpaAudit = "2. JPA Audit";
const o3_HibernateEnvars = "3. Hibernate Envars";
const o4_SpringDataEnvars = "4. Spring Data Envars";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroAuditing, o2_SpringJpaAudit, o3_HibernateEnvars, o4_SpringDataEnvars];

// ============================================
// ============================================

const AuditingMain = () => {
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

      <O1_IntroAuditing anchor={o1_IntroAuditing}></O1_IntroAuditing>
      <O2_SpringJpaAudit anchor={o2_SpringJpaAudit}></O2_SpringJpaAudit>
      <O3_HibernateEnvars anchor={o3_HibernateEnvars}></O3_HibernateEnvars>
      <O4_SpringDataEnvars anchor={o4_SpringDataEnvars}></O4_SpringDataEnvars>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default AuditingMain;
