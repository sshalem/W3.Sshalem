import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_PythonicFastAPIStructure from "./O1_PythonicFastAPIStructure";
import O2_FeatureBasedStructure from "./O2_FeatureBasedStructure";
import O3_SpringLikeFileStructure from "./O3_SpringLikeFileStructure";
import O4_SpringStyleLayeredStructure from "./O4_SpringStyleLayeredStructure";
import O5_Hybrid from "./O5_Hybrid";
import O6_RealWorldFastAPIProjectStructure from "./O6_RealWorldFastAPIProjectStructure";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_PythonicFastAPIStructure = "1. Pythonic FastAPI Structure";
const o2_FeatureBasedStructure = "2. Feature Based Structure";
const o3_SpringLikeFileStructure = "3. Spring Like File Structure";
const o4_SpringStyleLayeredStructure = "4. Spring Style Layered Structure";
const o5_Hybrid = "5. Hybrid (Most Production FastAPI)";
const o6_RealWorldFastAPIProjectStructure = "6. Real World FastAPI Project Structure";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_PythonicFastAPIStructure,
  o2_FeatureBasedStructure,
  o3_SpringLikeFileStructure,
  o4_SpringStyleLayeredStructure,
  o5_Hybrid,
  o6_RealWorldFastAPIProjectStructure,
];

// ============================================
// ============================================

const FastApiFolderStructureMain = () => {
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

      <O1_PythonicFastAPIStructure anchor={o1_PythonicFastAPIStructure} />
      <O2_FeatureBasedStructure anchor={o2_FeatureBasedStructure} />
      <O3_SpringLikeFileStructure anchor={o3_SpringLikeFileStructure} />
      <O4_SpringStyleLayeredStructure anchor={o4_SpringStyleLayeredStructure} />
      <O5_Hybrid anchor={o5_Hybrid} />
      <O6_RealWorldFastAPIProjectStructure anchor={o6_RealWorldFastAPIProjectStructure} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default FastApiFolderStructureMain;
