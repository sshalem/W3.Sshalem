import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import O1_Introduction from "./O1_Introduction";
import O2_Variables from "./O2_Variables";
import O3_UnknownNever from "./O3_UnknownNever";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_introduction = "1. Introduction";
const o2_variables = "2. Variables";
const o3_unknown_never = "3. Unknown , never";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_introduction, o2_variables, o3_unknown_never];

// ============================================
// ============================================

const IntroMain = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();

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
  }, []);

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

      <O1_Introduction anchor={o1_introduction}></O1_Introduction>
      <O2_Variables anchor={o2_variables}></O2_Variables>
      <O3_UnknownNever anchor={o3_unknown_never}></O3_UnknownNever>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default IntroMain;
