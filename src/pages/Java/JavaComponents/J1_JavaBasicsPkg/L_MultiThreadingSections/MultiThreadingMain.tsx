/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_MultiThreadingIntro from "./O1_MultiThreadingIntro";
import O2_LifeCycleOfThread from "./O2_LifeCycleOfThread";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_MultiThreadingIntro = "1. Multi Threading Intro";
const o2_LifeCycleOfThread = "2. Life Cycle Of Thread";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_MultiThreadingIntro, o2_LifeCycleOfThread];

// ============================================
// ============================================

const MultiThreadingMain = () => {
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

      <O1_MultiThreadingIntro anchor={o1_MultiThreadingIntro} />
      <O2_LifeCycleOfThread anchor={o2_LifeCycleOfThread} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default MultiThreadingMain;
