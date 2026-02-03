import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O2_FeatureBasedStructure from "./O2_FeatureBasedStructure";
import O1_SpringLikeStructure from "./O1_SpringLikeStructure";
import O3_RealWorldFastAPIProjectStructure from "./O3_RealWorldFastAPIProjectStructure";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_SpringLikeStructure = "1. Spring Like Structure";
const o2_FeatureBasedStructure = "2. Feature Based Structure";
const o3_RealWorldFastAPIProjectStructure = "3. Real World FastAPI Project Structure";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_SpringLikeStructure, o2_FeatureBasedStructure, o3_RealWorldFastAPIProjectStructure];

// ============================================
// ============================================

const FolderStructureMain = () => {
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

      <O1_SpringLikeStructure anchor={o1_SpringLikeStructure} />
      <O2_FeatureBasedStructure anchor={o2_FeatureBasedStructure} />
      <O3_RealWorldFastAPIProjectStructure anchor={o3_RealWorldFastAPIProjectStructure} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default FolderStructureMain;
