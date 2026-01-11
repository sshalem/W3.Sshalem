import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_CreatePythonProject from "./O1_CreatePythonProject";
import O2_InstallFastAPI from "./O2_InstallFastAPI";
import O3_RequirementsFile from "./O3_RequirementsFile";
import O4_RunFastApi from "./O4_RunFastApi";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CreatePythonProject = "1. Create Pure Python Project";
const o2_InstallFastAPI = "2. Install Fast API";
const o3_RequirementsFile = "3. requirements.txt File";
const o4_RunFastApi = "4. Run FastApi (uvicorn)";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_CreatePythonProject, o2_InstallFastAPI, o3_RequirementsFile, o4_RunFastApi];

// ============================================
// ============================================

const CreateFastApiProjectMain = () => {
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

      <O1_CreatePythonProject anchor={o1_CreatePythonProject} />
      <O2_InstallFastAPI anchor={o2_InstallFastAPI} />
      <O3_RequirementsFile anchor={o3_RequirementsFile} />
      <O4_RunFastApi anchor={o4_RunFastApi} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CreateFastApiProjectMain;
