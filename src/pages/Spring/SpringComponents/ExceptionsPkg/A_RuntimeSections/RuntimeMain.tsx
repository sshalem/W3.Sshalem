import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroRuntime from "./O1_IntroRuntime";
import O2_CodeRuntime from "./O2_CodeRuntime";
import O3_TestRuntime from "./O3_TestRuntime";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroRuntime = "1. Intro RuntimeException";
const o2_CodeRuntime = "2. Code RuntimeException";
const o3_TestRuntime = "3. Test Runtime";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroRuntime, o2_CodeRuntime, o3_TestRuntime];

// ============================================
// ============================================

const RuntimeMain = () => {
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

      <O1_IntroRuntime anchor={o1_IntroRuntime}></O1_IntroRuntime>
      <O2_CodeRuntime anchor={o2_CodeRuntime}></O2_CodeRuntime>
      <O3_TestRuntime anchor={o3_TestRuntime}></O3_TestRuntime>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default RuntimeMain;
