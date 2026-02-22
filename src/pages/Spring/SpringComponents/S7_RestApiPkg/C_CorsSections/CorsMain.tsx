import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_CorsIntro from "./O1_CorsIntro";
import O2_CorsMethodLevel from "./O2_CorsMethodLevel";
import O3_CorsClassLevel from "./O3_CorsClassLevel";
import O4_CorsGlobalConfig from "./O4_CorsGlobalConfig";
import O5_CorsSpringSecurity from "./O5_CorsSpringSecurity";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CorsIntro = "1. Cors Intro";
const o2_CorsMethodLevel = "2. Cors Method Level";
const o3_CorsClassLevel = "3. Cors Class Level";
const o4_CorsGlobalConfig = "4. Cors Global Config";
const o5_CorsSpringSecurity = "5. Cors Spring Security";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_CorsIntro, o2_CorsMethodLevel, o3_CorsClassLevel, o4_CorsGlobalConfig, o5_CorsSpringSecurity];

// ============================================
// ============================================

const CorsMain = () => {
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

      <O1_CorsIntro anchor={o1_CorsIntro}></O1_CorsIntro>
      <O2_CorsMethodLevel anchor={o2_CorsMethodLevel}></O2_CorsMethodLevel>
      <O3_CorsClassLevel anchor={o3_CorsClassLevel}></O3_CorsClassLevel>
      <O4_CorsGlobalConfig anchor={o4_CorsGlobalConfig}></O4_CorsGlobalConfig>
      <O5_CorsSpringSecurity anchor={o5_CorsSpringSecurity}></O5_CorsSpringSecurity>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CorsMain;
