import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ProjectFolderStructure from "./O1_ProjectFolderStructure";
import O3_CustomerEntityModel from "./O5_CustomerEntityModel";
import O4_OrderEntityModel from "./O6_OrderEntityModel";
import O2_Concepts from "./O3_Concepts";
import O3_Cascade from "./O4_Cascade";
import O2_RegisterModelImports from "./O2_RegisterModelImports";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ProjectFolderStructure = "1. Project Folder Structure";
const o2_RegisterModelImports = "2. Register Model Imports";
const o3_Concepts = "3. Concepts";
const o4_Cascade = "4. Cascade";
const o5_CustomerEntityModel = "5. Customer Entity - (Model)";
const o6_OrderEntityModel = "6. Order Entity - (Model)";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_ProjectFolderStructure,
  o2_RegisterModelImports,
  o2_Concepts,
  o3_Cascade,
  o3_CustomerEntityModel,
  o4_OrderEntityModel,
];

// ============================================
// ============================================

const One2ManyEntityMain = () => {
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

      <O1_ProjectFolderStructure anchor={o1_ProjectFolderStructure} />
      <O2_RegisterModelImports anchor={o2_RegisterModelImports} />
      <O3

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default One2ManyEntityMain;
