import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroTimestamp from "./O1_IntroTimestamp";
import O2_CustomErrorAttributes from "./O2_CustomErrorAttributes";
import O4_ControllerAdvice from "./O4_ControllerAdvice";
import O3_GlobalJacksonConfig from "./O3_GlobalJacksonConfig";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroTimestamp = "1. Intro Timestamp";
const o2_CustomErrorAttributes = "2. Custom ErrorAttributes";
const o3_GlobalJacksonConfig = "3. Global Jackson Config";
const o4_ControllerAdvice = "4. ControllerAdvice";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroTimestamp, o2_CustomErrorAttributes, o3_GlobalJacksonConfig, o4_ControllerAdvice];

// ============================================
// ============================================

const TimestampConfigMain = () => {
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

      <O1_IntroTimestamp anchor={o1_IntroTimestamp}></O1_IntroTimestamp>
      <O2_CustomErrorAttributes anchor={o2_CustomErrorAttributes}></O2_CustomErrorAttributes>
      <O3_GlobalJacksonConfig anchor={o3_GlobalJacksonConfig}></O3_GlobalJacksonConfig>
      <O4_ControllerAdvice anchor={o4_ControllerAdvice}></O4_ControllerAdvice>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default TimestampConfigMain;
