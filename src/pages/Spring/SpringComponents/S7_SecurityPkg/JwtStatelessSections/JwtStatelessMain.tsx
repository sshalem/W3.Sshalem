import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import OX_Jwtstateless from "./OX_Jwtstateless";
import O3_JwtDependencies from "./O3_JwtDependencies";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroJwt = "1. Intro Jwt";
const o2_JwtTokenStructure = "2. Jwt token structure";
const o3_JwtDependencies = "3. Jwt Dependencies";
const oX_Jwtstateless = `oX_Jwtstateless`;

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroJwt, o2_JwtTokenStructure, o3_JwtDependencies, oX_Jwtstateless];

// ============================================
// ============================================

const JwtStatelessMain = () => {
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

      <O3_JwtDependencies anchor={o3_JwtDependencies}></O3_JwtDependencies>
      <OX_Jwtstateless anchor={oX_Jwtstateless}></OX_Jwtstateless>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtStatelessMain;
