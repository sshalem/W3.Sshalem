import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_GitHubLink from "./O0_GitHubLink";
import O1_IntroRefreshToken from "./O1_IntroRefreshToken";
import O2_refreshTokenStatelessProsCons from "./O2_refreshTokenStatelessProsCons";
import O3_BestPractice from "./O3_BestPractice";
import O4_Controller from "./O4_Controller";
import O5_Test from "./O5_Test";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_GitHubLink = "GitHub Link";
const o1_IntroRefreshToken = "1. Intro Jwt refresh token(stateless)";
const o2_refreshTokenStatelessProsCons = "2. RefreshToken Stateless Pros/Cons";
const o3_BestPractice = "3. Best Practice";
const o4_Controller = "4. Controller";
const o5_Test = "5. Test";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_GitHubLink, o1_IntroRefreshToken, o2_refreshTokenStatelessProsCons, o3_BestPractice, o4_Controller, o5_Test];

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
      <O2_refreshTokenStatelessProsCons anchor={o2_refreshTokenStatelessProsCons}></O2_refreshTokenStatelessProsCons>
      <O3_BestPractice anchor={o3_BestPractice}></O3_BestPractice>
      <O4_Controller anchor={o4_Controller}></O4_Controller>
      <O5_Test anchor={o5_Test}></O5_Test>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtRefreshTokenStatelessMain;
