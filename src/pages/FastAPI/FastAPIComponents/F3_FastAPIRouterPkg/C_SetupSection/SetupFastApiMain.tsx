import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_CreatePythonProject from "./O1_CreatePythonProject";
import O2_InstallFastAPI from "./O2_InstallFastAPI";
import O3_RequirementsFile from "./O3_RequirementsFile";
import O4_HowToRunFastApi from "./O4_HowToRunFastApi";
import O5_GitConfig from "./O5_GitConfig";
import O6_FastAPIInstance from "./O6_FastAPIInstance";
import O7_RouterSetup from "./O7_RouterSetup";
import O8_Schemas from "./O8_Schemas";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CreatePythonProject = "1. Create Pure Python Project";
const o2_InstallFastAPI = "2. Install Fast API";
const o3_RequirementsFile = "3. requirements.txt File";
const o4_HowToRunFastApi = "5. Two options To Run FastAPI";
const o5_GitConfig = "5. Git ignore Config";
const o6_FastAPIInstance = "6. new Instance of FastAPI ";
const o7_RouterSetup = "7. router.py  (RestController)";
const o8_Schemas = "8. Schemas (DTO)";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_CreatePythonProject,
  o2_InstallFastAPI,
  o3_RequirementsFile,
  o4_HowToRunFastApi,
  o5_GitConfig,
  o6_FastAPIInstance,
  o7_RouterSetup,
  o8_Schemas,
];

// ============================================
// ============================================

const SetupFastApiMain = () => {
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
      <O4_HowToRunFastApi anchor={o4_HowToRunFastApi} />
      <O5_GitConfig anchor={o5_GitConfig} />
      <O6_FastAPIInstance anchor={o6_FastAPIInstance} />
      <O7_RouterSetup anchor={o7_RouterSetup} />
      <O8_Schemas anchor={o8_Schemas} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default SetupFastApiMain;
