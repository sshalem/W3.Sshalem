import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_IntroRefreshTokenInDBRotation from "./O0_IntroRefreshTokenInDBRotation";
import O0_GitHubLink from "./O0_GitHubLink";
import O1_POM from "./O1_POM";
import O2_ApplicationProperties from "./O2_ApplicationProperties";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_GitHubLink = "GitHub Link";
const o0_IntroRefreshTokenInDBRotation = "Intro RefreshToken In DB Rotation";
const o1_POM = "1. POM";
const o2_ApplicationProperties = "2. Application Properties";
const o3_PackageLayout = "3. Package Layout";
const o4_Entity = "4. Entity";
const o5_Repository = "5. Repository";
const o6_Service = "6. Service";
const o7_JwtUserDetails = "7. JwtUserDetails";
const o8_JwtUserDetailsService = "8. JwtUserDetailsService";
const o9_JwtTokenUtil = "9. JwtTokenUtil";
const o10_JwtAuthFilter = "10. JwtAuthenticationFilter";
const o11_JwtAuthenticationEntryPoint = "11. JwtAuthenticationEntryPoint";
const o12_SecurityConfig = "12. SecurityConfig";
const o13_Exceptions = "13. Exceptions";
const o14_Model = "14. Model";
const o15_Controller = "15. Controller";
const o16_Test = "16. Test";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o0_GitHubLink,
  o0_IntroRefreshTokenInDBRotation,
  o1_POM,
  o2_ApplicationProperties,
  o3_PackageLayout,
  o4_Entity,
  o5_Repository,
  o6_Service,
  o7_JwtUserDetails,
  o8_JwtUserDetailsService,
  o9_JwtTokenUtil,
  o10_JwtAuthFilter,
  o11_JwtAuthenticationEntryPoint,
  o12_SecurityConfig,
  o13_Exceptions,
  o14_Model,
  o15_Controller,
  o16_Test,
];

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
      <O0_GitHubLink anchor={o0_GitHubLink} />
      <O0_IntroRefreshTokenInDBRotation anchor={o0_IntroRefreshTokenInDBRotation} />
      <O1_POM anchor={o1_POM} />
      <O2_ApplicationProperties anchor={o2_ApplicationProperties} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtRefreshTokenInDBMain;
