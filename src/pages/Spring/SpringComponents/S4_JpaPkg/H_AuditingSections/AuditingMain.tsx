import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroAuditing from "./O1_IntroAuditing";
import O2_SpringJpaAuditWithoutSecurity from "./O2_SpringJpaAuditWithoutSecurity";
import O3_SpringJpaAuditWithSecurity from "./O3_SpringJpaAuditWithSecurity";
import O4_HibernateEnvars from "./O4_HibernateEnvars";
import O5_SpringDataEnvars from "./O5_SpringDataEnvars";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroAuditing = "1. Intro";
const o2_SpringJpaAuditWithoutSecurity = "2. JPA Audit w/o Security";
const o3_SpringJpaAuditWithSecurity = "3. JPA Audit with Security";
const o4_HibernateEnvars = "4. Hibernate Envars";
const o5_SpringDataEnvars = "5. Spring Data Envars";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_IntroAuditing,
  o2_SpringJpaAuditWithoutSecurity,
  o3_SpringJpaAuditWithSecurity,
  o4_HibernateEnvars,
  o5_SpringDataEnvars,
];

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
      <O2_SpringJpaAuditWithoutSecurity anchor={o2_SpringJpaAuditWithoutSecurity}></O2_SpringJpaAuditWithoutSecurity>
      <O3_SpringJpaAuditWithSecurity anchor={o3_SpringJpaAuditWithSecurity}></O3_SpringJpaAuditWithSecurity>
      <O4_HibernateEnvars anchor={o4_HibernateEnvars}></O4_HibernateEnvars>
      <O5_SpringDataEnvars anchor={o5_SpringDataEnvars}></O5_SpringDataEnvars>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default AuditingMain;
