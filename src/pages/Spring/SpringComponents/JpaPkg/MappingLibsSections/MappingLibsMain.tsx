import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import O1_CompareLibs from "./O1_CompareLibs";
import O2_ModelMapper from "./O2_ModelMapper";
import O3_MapStruct from "./O3_MapStruct";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CompareLibs = "1. Compare Libs";
const o2_ModelMapper = "2. Model Mapper";
const o3_MapStruct = "3. Map Struct";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_CompareLibs, o2_ModelMapper, o3_MapStruct];

// ============================================
// ============================================

const MappingLibsMain = () => {
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

      <O1_CompareLibs anchor={o1_CompareLibs}></O1_CompareLibs>
      <O2_ModelMapper anchor={o2_ModelMapper}></O2_ModelMapper>
      <O3_MapStruct anchor={o3_MapStruct}></O3_MapStruct>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default MappingLibsMain;
