import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroAuditing from "./O1_IntroAuditing";
import O2_SpringJpaAudit from "./O2_SpringJpaAudit";
import O3_AuditableClass from "./O3_AuditableClass";
import O4_ImplementAuditable from "./O4_ImplementAuditable";
import O5_AuditorAwareImpl from "./O5_AuditorAwareImpl";
import O6_AuditConfig from "./O6_AuditConfig";
import O7_TestApp from "./O7_TestApp";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroAuditing = "1. Intro";
const o2_SpringJpaAudit = "2. JPA Audit";
const o3_AuditableClass = "3. Auditable Class";
const o4_ImplementAuditable = "4. Implement Auditable on entity class";
const o5_AuditorAwareImpl = "5. AuditorAwareImpl class";
const o6_AuditConfig = "6. AuditConfig class";
const o7_TestApp = "7. Test App";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_IntroAuditing,
  o2_SpringJpaAudit,
  o3_AuditableClass,
  o4_ImplementAuditable,
  o5_AuditorAwareImpl,
  o6_AuditConfig,
  o7_TestApp,
];

// ============================================
// ============================================

const JpaAuditMain = () => {
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
      <O3_AuditableClass anchor={o3_AuditableClass}></O3_AuditableClass>
      <O4_ImplementAuditable anchor={o4_ImplementAuditable}></O4_ImplementAuditable>
      <O5_AuditorAwareImpl anchor={o5_AuditorAwareImpl}></O5_AuditorAwareImpl>
      <O6_AuditConfig anchor={o6_AuditConfig}></O6_AuditConfig>
      <O7_TestApp anchor={o7_TestApp}></O7_TestApp>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JpaAuditMain;
