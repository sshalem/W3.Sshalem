import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroIsolation from "./O1_IntroIsolation";
import O2_DirtyRead from "./O2_DirtyRead";
import O3_NonRepeatableRead from "./O3_NonRepeatableRead";
import O4_PhantomRead from "./O4_PhantomRead";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroIsolation = "1. Intro Isolation";
const o2_DirtyRead = "2. Dirty Read";
const o3_NonRepeatableRead = "3. Non-Repeatable Read";
const o4_PhantomRead = "4. Phantom Read";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroIsolation, o2_DirtyRead, o3_NonRepeatableRead, o4_PhantomRead];

// ============================================
// ============================================

const IsolationMain = () => {
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
      <O1_IntroIsolation anchor={o1_IntroIsolation}></O1_IntroIsolation>
      <O2_DirtyRead anchor={o2_DirtyRead}></O2_DirtyRead>
      <O3_NonRepeatableRead anchor={o3_NonRepeatableRead}></O3_NonRepeatableRead>
      <O4_PhantomRead anchor={o4_PhantomRead}></O4_PhantomRead>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default IsolationMain;
