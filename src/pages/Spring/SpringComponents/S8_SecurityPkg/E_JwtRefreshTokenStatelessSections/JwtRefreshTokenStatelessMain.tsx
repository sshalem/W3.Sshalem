import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroRefreshToken from "./O1_IntroRefreshToken";
import O2_BestPractice from "./O2_BestPractice";
import O3_Controller from "./O3_Controller";
import O0_GitHubLink from "./O0_GitHubLink";
import O4_Test from "./O4_Test";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_GitHubLink = "GitHub Link";
const o1_IntroRefreshToken = "1. Intro Jwt refresh token";
const o2_BestPractice = "2. Best Practice";
const o3_Controller = "3. Controller";
const o4_Test = "4. Test";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_GitHubLink, o1_IntroRefreshToken, o2_BestPractice, o3_Controller, o4_Test];

// ============================================
// ============================================

const JwtRefreshTokenStatelessMain = () => {
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

      <O0_GitHubLink anchor={o0_GitHubLink}></O0_GitHubLink>
      <O1_IntroRefreshToken anchor={o1_IntroRefreshToken}></O1_IntroRefreshToken>
      <O2_BestPractice anchor={o2_BestPractice}></O2_BestPractice>
      <O3_Controller anchor={o3_Controller}></O3_Controller>
      <O4_Test anchor={o4_Test}></O4_Test>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtRefreshTokenStatelessMain;
