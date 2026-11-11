import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ProjectFolderStructure from "./O1_ProjectFolderStructure";
import O2_EntitySqlalchemyModel from "./O2_EntitySqlalchemyModel";
import O3_RegisterModelImports from "./O3_RegisterModelImports";
import O4_TestModelRegistered from "./O4_TestModelRegistered";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ProjectFolderStructure = "1. Project Folder Structure";
const o2_EntitySqlalchemyModel = "2. Entity - Sqlalchemy Model";
const o3_RegisterModelImports = "3. Register Model in main.py";
const o4_TestModelRegistered = "4. Test Model Registered";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_ProjectFolderStructure, o2_EntitySqlalchemyModel, o3_RegisterModelImports, o4_TestModelRegistered];

// ============================================
// ============================================

const EntityMain = () => {
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
      <O2_EntitySqlalchemyModel anchor={o2_EntitySqlalchemyModel} />
      <O3_RegisterModelImports anchor={o3_RegisterModelImports} />
      <O4_TestModelRegistered anchor={o4_TestModelRegistered} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default EntityMain;
