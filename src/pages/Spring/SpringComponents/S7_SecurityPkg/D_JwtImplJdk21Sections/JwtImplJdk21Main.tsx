import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_GitHubJdk21Link from "./O0_GitHubJdk21Link";
import O0_IntroJdk21JwtImpl from "./O0_IntroJdk21JwtImpl";
import O1_SecurityConfig from "./O1_SecurityConfig";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_IntroJdk21JwtImpl = "Intro Jwt Impl";
const o0_GitHubJdk21Link = "GitHub Link";
const o1_SecurityConfig = "1. Security Config";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_IntroJdk21JwtImpl, o0_GitHubJdk21Link, o1_SecurityConfig];

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

      <O0_IntroJdk21JwtImpl anchor={o0_IntroJdk21JwtImpl}></O0_IntroJdk21JwtImpl>
      <O0_GitHubJdk21Link anchor={o0_GitHubJdk21Link}></O0_GitHubJdk21Link>
      <O1_SecurityConfig anchor={o1_SecurityConfig}></O1_SecurityConfig>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtImplJdk21Main;
