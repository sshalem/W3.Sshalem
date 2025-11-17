import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_POM from "./O1_POM";
import O2_ApplicationProperties from "./O2_ApplicationProperties";
import O3_PackageLayout from "./O3_PackageLayout";

import O0_IntroJwtImpl from "./O0_IntroJwtImpl";
import O4_Entity from "./O4_Entity";
import O5_Repository from "./O5_Repository";
import O6_Service from "./O6_Service";
import O7_JwtUserDetails from "./O7_JwtUserDetails";
import O8_JwtUserDetailsService from "./O8_JwtUserDetailsService";
import O9_JwtTokenUtil from "./O9_JwtTokenUtil";
import O10_JwtAuthFilter from "./O10_JwtAuthFilter";
import O11_JwtAuthenticationEntryPoint from "./O11_JwtAuthenticationEntryPoint";
import O12_SecurityConfig from "./O12_SecurityConfig";
import O13_Exceptions from "./O13_Exceptions";
import O14_Model from "./O14_Model";
import O15_Controller from "./O15_Controller";
import O16_Test from "./O16_Test";
import O0_GitHubLink from "./O0_GitHubLink";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_IntroJwtImpl = "Intro Jwt v3.5.6";
const o0_GitHubLink = `GitHub Link`;
const o1_POM = "1. Dependencies & POM";
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
  o0_IntroJwtImpl,
  o0_GitHubLink,
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

const JwtV3_5_6Main = () => {
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

      <O0_IntroJwtImpl anchor={o0_IntroJwtImpl}></O0_IntroJwtImpl>
      <O0_GitHubLink anchor={o0_GitHubLink}></O0_GitHubLink>
      <O1_POM anchor={o1_POM}></O1_POM>
      <O2_ApplicationProperties anchor={o2_ApplicationProperties}></O2_ApplicationProperties>
      <O3_PackageLayout anchor={o3_PackageLayout}></O3_PackageLayout>
      <O4_Entity anchor={o4_Entity}></O4_Entity>
      <O5_Repository anchor={o5_Repository}></O5_Repository>
      <O6_Service anchor={o6_Service}></O6_Service>
      <O7_JwtUserDetails anchor={o7_JwtUserDetails}></O7_JwtUserDetails>
      <O8_JwtUserDetailsService anchor={o8_JwtUserDetailsService}></O8_JwtUserDetailsService>
      <O9_JwtTokenUtil anchor={o9_JwtTokenUtil}></O9_JwtTokenUtil>
      <O10_JwtAuthFilter anchor={o10_JwtAuthFilter}></O10_JwtAuthFilter>
      <O11_JwtAuthenticationEntryPoint anchor={o11_JwtAuthenticationEntryPoint}></O11_JwtAuthenticationEntryPoint>
      <O12_SecurityConfig anchor={o12_SecurityConfig}></O12_SecurityConfig>
      <O13_Exceptions anchor={o13_Exceptions}></O13_Exceptions>
      <O14_Model anchor={o14_Model}></O14_Model>
      <O15_Controller anchor={o15_Controller}></O15_Controller>
      <O16_Test anchor={o16_Test}></O16_Test>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JwtV3_5_6Main;
