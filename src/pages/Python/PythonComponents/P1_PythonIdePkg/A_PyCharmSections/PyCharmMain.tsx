import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_NewProjectSetup from "./O1_NewProjectSetup";
import O2_CreateNewProject from "./O2_CreateNewProject";
import O3_ProjectFolderStructureLayout from "./O3_ProjectFOlderStructureLayout";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_NewProjectSetup = "1. New Project Setup";
const o2_CreateNewProject = "2. Create Pure Python Project";
const o3_ProjectFolderStructureLayout = "3. Folder Structure Layout";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_NewProjectSetup, o2_CreateNewProject, o3_ProjectFolderStructureLayout];

// ============================================
// ============================================

const PyCharmMain = () => {
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

      <O1_NewProjectSetup anchor={o1_NewProjectSetup} />
      <O2_CreateNewProject anchor={o2_CreateNewProject} />
      <O3_ProjectFolderStructureLayout anchor={o3_ProjectFolderStructureLayout} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PyCharmMain;
