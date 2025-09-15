import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroTimestamp from "./O1_IntroTimestamp";
import O4_ControllerAdvice from "./O4_ControllerAdvice";
import O2_GlobalJacksonConfig from "./O2_GlobalJacksonConfig";
import O3_CustomErrorAttributes from "./O3_CustomErrorAttributes";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroTimestamp = "1. Intro Timestamp";
const o2_GlobalJacksonConfig = "2. Global Jackson Config";
const o3_CustomErrorAttributes = "3. Custom ErrorAttributes";
const o4_ControllerAdvice = "4. ControllerAdvice";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroTimestamp, o2_GlobalJacksonConfig, o3_CustomErrorAttributes, o4_ControllerAdvice];

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
      <O2_GlobalJacksonConfig anchor={o2_GlobalJacksonConfig}></O2_GlobalJacksonConfig>
      <O3_CustomErrorAttributes anchor={o3_CustomErrorAttributes}></O3_CustomErrorAttributes>
      <O4_ControllerAdvice anchor={o4_ControllerAdvice}></O4_ControllerAdvice>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default TimestampConfigMain;
