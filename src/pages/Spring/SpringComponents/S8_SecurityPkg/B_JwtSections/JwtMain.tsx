import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroJwt from "./O1_IntroJwt";
import O2_JwtTokenStructure from "./O2_JwtTokenStructure";
import O0_links from "./O0_links";
import O4_JwtAuthFlow from "./O4_JwtAuthFlow";
import O3_JwtDependencies from "./O3_JwtDependencies";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_links = "links";
const o1_IntroJwt = "1. Intro Jwt";
const o2_JwtTokenStructure = "2. JWT token structure";
const o3_JwtDependencies = `3. Jwt Dependencies`;
const o4_JwtAuthFlow = "4. Jwt Authentication Flow";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_links, o1_IntroJwt, o2_JwtTokenStructure, o3_JwtDependencies, o4_JwtAuthFlow];

// ============================================
// ============================================

const JwtMain = () => {
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

      <O0_links anchor={o0_links}></O0_links>
      <O1_IntroJwt anchor={o1_IntroJwt}></O1_IntroJwt>
      <O2_JwtTokenStructure anchor={o2_JwtTokenStructure}></O2_JwtTokenStructure>
      <O3_JwtDependencies anchor={o3_JwtDependencies}></O3_JwtDependencies>
      <O4_JwtAuthFlow anchor={o4_JwtAuthFlow}></O4_JwtAuthFlow>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtMain;
