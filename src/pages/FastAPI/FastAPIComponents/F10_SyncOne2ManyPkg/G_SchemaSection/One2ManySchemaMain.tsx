import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ProjectFolderStructure from "./O1_ProjectFolderStructure";
import O2_CustomerSchemaPydanticDTO from "./O2_CustomerSchemaPydanticDTO";
import O3_OrderSchemaPydanticDTO from "./O3_OrderSchemaPydanticDTO";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ProjectFolderStructure = "1. Project Folder Structure";
const o2_CustomerSchemaPydanticDTO = "2. Customer Schema — Pydantic DTO";
const o3_OrderSchemaPydanticDTO = "3. Order Schema - Pydantic DTO";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_ProjectFolderStructure, o2_CustomerSchemaPydanticDTO, o3_OrderSchemaPydanticDTO];

// ============================================
// ============================================

const One2ManySchemaMain = () => {
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
      <O2_CustomerSchemaPydanticDTO anchor={o2_CustomerSchemaPydanticDTO} />
      <O3_OrderSchemaPydanticDTO anchor={o3_OrderSchemaPydanticDTO} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default One2ManySchemaMain;
