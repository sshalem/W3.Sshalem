import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_AddProjectToExistingGitRepo from "./O1_AddProjectToExistingGitRepo";
import O2_CloneGitPythonProject from "./O2_CloneGitPythonProject";
import O3_GitIgnore from "./O3_GitIgnore";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_AddProjectToExistingGitRepo = "1. Add Project To My Python Git Repo";
const o2_CloneGitPythonProject = "2. Clone Git Python Project";
const o3_GitIgnore = "3. (.gitignore) file";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_AddProjectToExistingGitRepo, o2_CloneGitPythonProject, o3_GitIgnore];

// ============================================
// ============================================

const PythonGitMain = () => {
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

      <O1_AddProjectToExistingGitRepo anchor={o1_AddProjectToExistingGitRepo} />
      <O2_CloneGitPythonProject anchor={o2_CloneGitPythonProject} />
      <O3_GitIgnore anchor={o3_GitIgnore} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PythonGitMain;
