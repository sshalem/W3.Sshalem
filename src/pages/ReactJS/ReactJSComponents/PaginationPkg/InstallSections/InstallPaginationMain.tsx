// ===========================================
// ==     content menu (title name)         ==
// ===========================================

import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import O1_Install from "./O1_Install";

const o1_install = "1. Install";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_install];

// ============================================
// ============================================

const InstallPaginationMain = () => {
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

      <O1_Install anchor={o1_install}></O1_Install>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default InstallPaginationMain;
