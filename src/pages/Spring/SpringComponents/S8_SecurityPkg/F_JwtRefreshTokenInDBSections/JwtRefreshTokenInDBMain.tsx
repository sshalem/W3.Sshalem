import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_IntroRefreshTokenInDBRotation from "./O0_IntroRefreshTokenInDBRotation";
import O0_GitHubLink from "./O0_GitHubLink";
import O1_POM from "./O1_POM";
import O2_ApplicationProperties from "./O2_ApplicationProperties";
import O3_PackageLayout from "./O3_PackageLayout";
import O4_Entity from "./O4_Entity";
import O5_Repository from "./O5_Repository";
import O6_Service from "./O6_Service";
import O7_JwtUserDetails from "./O7_JwtUserDetails";
import O8_JwtUserDetailsService from "./O8_JwtUserDetailsService";
import O9_JwtTokenUtil from "./O9_JwtTokenUtil";
import O10_JwtAuthFilter from "./O10_JwtAuthFilter";
import O11_JwtAuthenticationEntryPoint from "./O11_JwtAuthenticationEntryPoint";
import O12_SecurityConfig from "./O12_SecurityConfig";
import O13_SecurityConstants from "./O13_SecurityConstants";
import O14_Exceptions from "./O14_Exceptions";
import O15_Model from "./O15_Model";
import O16_Controller from "./O16_Controller";
import O17_Test from "./O17_Test";

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
const o13_SecurityConstants = "13. SecurityConstants";
const o14_Exceptions = "14. Exceptions";
const o15_Model = "15. Model";
const o16_Controller = "16. Controller";
const o17_Test = "17. Test";

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
  o13_SecurityConstants,
  o14_Exceptions,
  o15_Model,
  o16_Controller,
  o17_Test,
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
      <O3_PackageLayout anchor={o3_PackageLayout} />
      <O4_Entity anchor={o4_Entity} />
      <O5_Repository anchor={o5_Repository} />
      <O6_Service anchor={o6_Service} />
      <O7_JwtUserDetails anchor={o7_JwtUserDetails} />
      <O8_JwtUserDetailsService anchor={o8_JwtUserDetailsService} />
      <O9_JwtTokenUtil anchor={o9_JwtTokenUtil} />
      <O10_JwtAuthFilter anchor={o10_JwtAuthFilter} />
      <O11_JwtAuthenticationEntryPoint anchor={o11_JwtAuthenticationEntryPoint} />
      <O12_SecurityConfig anchor={o12_SecurityConfig} />
      <O13_SecurityConstants anchor={o13_SecurityConstants} />
      <O14_Exceptions anchor={o14_Exceptions} />
      <O15_Model anchor={o15_Model} />
      <O16_Controller anchor={o16_Controller} />
      <O17_Test anchor={o17_Test} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtRefreshTokenInDBMain;
