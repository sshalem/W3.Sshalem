// ===========================================
// ==     content menu (title name)         ==
// ===========================================

import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../components";
import O1_Install from "./O1_Install";
import O2_DefaultConfig from "./O2_DefaultConfig";
import O3_SearchFields from "./O3_SearchFields";

const o1_install = "1. Install";
const o2_default_config = "2. Default config";
const o3_search_fields = "3. Search fields";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_install, o2_default_config, o3_search_fields];

// ============================================
// ============================================

const Pagination = () => {
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
      <O2_DefaultConfig anchor={o2_default_config}></O2_DefaultConfig>
      <O3_SearchFields anchor={o3_search_fields}></O3_SearchFields>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Pagination;
