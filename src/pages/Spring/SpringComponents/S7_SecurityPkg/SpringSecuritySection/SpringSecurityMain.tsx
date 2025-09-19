import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroSecurity from "./O1_IntroSecurity";
import O5_Example from "./O5_Example";
import O3_FilterChainProxy from "./O3_FilterChainProxy";
import O2_DelegatingFilterProxy from "./O2_DelegatingFilterProxy";
import O4_SecurityFilterChain from "./O4_SecurityFilterChain";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroSecurity = "1. Intro Spring Security";
const o2_DelegatingFilterProxy = "2. DelegatingFilterProxy";
const o3_FilterChainProxy = "3. FilterChainProxy";
const o4_SecurityFilterChain = "4. SecurityFilterChain";
const o5_Example = "5. Example";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroSecurity, o2_DelegatingFilterProxy, o3_FilterChainProxy, o4_SecurityFilterChain, o5_Example];

// ============================================
// ============================================

const SpringSecurityMain = () => {
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

      <O1_IntroSecurity anchor={o1_IntroSecurity}></O1_IntroSecurity>
      <O2_DelegatingFilterProxy anchor={o2_DelegatingFilterProxy}></O2_DelegatingFilterProxy>
      <O3_FilterChainProxy anchor={o3_FilterChainProxy}></O3_FilterChainProxy>
      <O4_SecurityFilterChain anchor={o4_SecurityFilterChain}></O4_SecurityFilterChain>
      <O5_Example anchor={o5_Example}></O5_Example>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default SpringSecurityMain;
