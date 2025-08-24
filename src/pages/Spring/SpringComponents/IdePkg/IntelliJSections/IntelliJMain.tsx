import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import O1_TerminologyCompare from "./O1_TerminologyCompare";
import O2_IntellijConfigPlugins from "./O2_IntellijConfigPlugins";
import O3_DevTools from "./O3_DevTools";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_terminology_compare = "1. Terminology compare";
const o2_IntellijConfigPlugins = "2. Intellij Plugins + config";
const o3_DevTools = "3. DevTools";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_terminology_compare, o2_IntellijConfigPlugins, o3_DevTools];

// ============================================
// ============================================

const IntelliJMain = () => {
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

      <O1_TerminologyCompare anchor={o1_terminology_compare}></O1_TerminologyCompare>
      <O2_IntellijConfigPlugins anchor={o2_IntellijConfigPlugins}></O2_IntellijConfigPlugins>
      <O3_DevTools anchor={o3_DevTools}></O3_DevTools>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default IntelliJMain;
