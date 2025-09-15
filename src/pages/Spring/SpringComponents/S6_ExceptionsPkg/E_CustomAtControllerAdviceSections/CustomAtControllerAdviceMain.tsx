import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroCustomCtrlAdvice from "./O1_IntroCustomCtrlAdvice";
import O2_CodeCustomCtrlAdvice from "./O2_CodeCustomCtrlAdvice";
import O3_TestCustomCtrlAdvice from "./O3_TestCustomCtrlAdvice";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroCustomCtrlAdvice = "1. Intro";
const o2_CodeCustomCtrlAdvice = "2. Code Snippet";
const o3_TestCustomCtrlAdvice = "3. Test";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroCustomCtrlAdvice, o2_CodeCustomCtrlAdvice, o3_TestCustomCtrlAdvice];

// ============================================
// ============================================

const CustomCtrlAdviceProdMain = () => {
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

      <O1_IntroCustomCtrlAdvice anchor={o1_IntroCustomCtrlAdvice}></O1_IntroCustomCtrlAdvice>
      <O2_CodeCustomCtrlAdvice anchor={o2_CodeCustomCtrlAdvice}></O2_CodeCustomCtrlAdvice>
      <O3_TestCustomCtrlAdvice anchor={o3_TestCustomCtrlAdvice}></O3_TestCustomCtrlAdvice>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CustomCtrlAdviceProdMain;
