import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../components";
import O1_WhatIsDocker from "./O1_WhatIsDocker";
import O2_WorkFlow from "./O2_WorkFlow";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_WhatIsDocker = "1. What Is Docker";
const o2_WorkFlow = "2. Docker Work Flow";
// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_WhatIsDocker, o2_WorkFlow];

// ============================================
// ============================================

const Docker = () => {
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
      <O1_WhatIsDocker anchor={o1_WhatIsDocker}></O1_WhatIsDocker>
      <O2_WorkFlow anchor={o2_WorkFlow}></O2_WorkFlow>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Docker;
