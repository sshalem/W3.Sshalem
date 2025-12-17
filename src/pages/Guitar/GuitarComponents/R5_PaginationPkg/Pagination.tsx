/*


*/
// ===========================================
// ==     content menu (title name)         ==
// ===========================================

import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../components";
import O1_Install from "./O1_Install";
import O2_DefaultConfig from "./O2_DefaultConfig";
import O3_SearchFields from "./O3_SearchFields";
import O4_PageSize from "./O4_PageSize";
import O5_Language from "./O5_Language";
import O6_PageButtons from "./O6_PageButtons";

const o1_install = "1. Install";
const o2_default_config = "2. Default config";
const o3_search_fields = "3. Search fields";
const o4_page_size = "4. Page size";
const o5_language = "5. Language";
const o6_page_buttons = "6. Page buttons";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_install, o2_default_config, o3_search_fields, o4_page_size, o5_language, o6_page_buttons];

// ============================================
// ============================================

const Pagination = () => {
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

      <O1_Install anchor={o1_install}></O1_Install>
      <O2_DefaultConfig anchor={o2_default_config}></O2_DefaultConfig>
      <O3_SearchFields anchor={o3_search_fields}></O3_SearchFields>
      <O4_PageSize anchor={o4_page_size}></O4_PageSize>
      <O5_Language anchor={o5_language}></O5_Language>
      <O6_PageButtons anchor={o6_page_buttons}></O6_PageButtons>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Pagination;
