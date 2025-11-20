import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroRefreshTokenInDBRotation from "./O1_IntroRefreshTokenInDBRotation";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_IntroJdk21JwtImpl = "Intro Jwt Impl";
const o1_IntroRefreshTokenInDBRotation = "1. Intro RefreshToken In DB Rotation";
const o0_GitHubJdk21Link = "GitHub Link";
const o1_SecurityConfig = "1. Security Config";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_IntroJdk21JwtImpl, o1_IntroRefreshTokenInDBRotation, o0_GitHubJdk21Link, o1_SecurityConfig];

// ============================================
// ============================================

const JwtRefreshTokenInDBMain = () => {
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

      <O1_IntroRefreshTokenInDBRotation anchor={o1_IntroRefreshTokenInDBRotation}></O1_IntroRefreshTokenInDBRotation>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtRefreshTokenInDBMain;
