import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroJwtImpl = "1. Intro Jwt Implementation";
const o2_SpringBootVersion = "2. Spring Version 2.6.11 & JDK";
const ox_POM = "x. Dependencies & POM";
const ox_PackageLayout = "x. Package Layout";
const ox_JwtTokenUtil = "x. JwtTokenUtil";
const ox_JwtAuthFilter = "x. JwtAuthenticationFilter";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroJwtImpl, o2_SpringBootVersion, ox_POM, ox_PackageLayout, ox_JwtTokenUtil, ox_JwtAuthFilter];

// ============================================
// ============================================

const JwtImplJdk21Main = () => {
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

      {/* <O1_IntroJwtImpl anchor={o1_IntroJwtImpl}></O1_IntroJwtImpl>
      <O2_SpringBootVersion anchor={o2_SpringBootVersion}></O2_SpringBootVersion>
      <Ox_POM anchor={ox_POM}></Ox_POM>
      <Ox_PackageLayout anchor={ox_PackageLayout}></Ox_PackageLayout>
      <Ox_JwtTokenUtil anchor={ox_JwtTokenUtil}></Ox_JwtTokenUtil>
      <Ox_JwtAuthFilter anchor={ox_JwtAuthFilter}></Ox_JwtAuthFilter> */}

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtImplJdk21Main;
