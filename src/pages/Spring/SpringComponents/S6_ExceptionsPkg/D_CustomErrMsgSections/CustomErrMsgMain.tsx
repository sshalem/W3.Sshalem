import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroCustomErrMsg from "./O1_IntroCustomErrMsg";
import O2_CodeCustomErrMsg from "./O2_CodeCustomErrMsg";
import O3_TestCustomErrMsg from "./O3_TestCustomErrMsg";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroCustomErrMsg = "1. Intro";
const o2_CodeCustomErrMsg = "2. Code Snippet";
const o3_TestCustomErrMsg = "3. Test";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroCustomErrMsg, o2_CodeCustomErrMsg, o3_TestCustomErrMsg];

// ============================================
// ============================================

const CustomErrMsgMain = () => {
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

      <O1_IntroCustomErrMsg anchor={o1_IntroCustomErrMsg}></O1_IntroCustomErrMsg>
      <O2_CodeCustomErrMsg anchor={o2_CodeCustomErrMsg}></O2_CodeCustomErrMsg>
      <O3_TestCustomErrMsg anchor={o3_TestCustomErrMsg}></O3_TestCustomErrMsg>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CustomErrMsgMain;
