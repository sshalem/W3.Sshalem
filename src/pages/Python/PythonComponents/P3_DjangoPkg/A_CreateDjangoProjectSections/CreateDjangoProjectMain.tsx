import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_CreatePythonProject from "./O1_CreatePythonProject";
import O2_InstallDjango from "./O2_InstallDjango";
import O3_SetupDjangoProject from "./O3_SetupDjangoProject";
import OX_SetupDjangoApp from "./OX_SetupDjangoApp";
import OX_SpringVsDjango from "./OX_SpringVsDjango";
import O4_RunDjangoProject from "./O4_RunDjangoProject";
import O5_MigrateSQLiteDB from "./O5_MigrateSQLiteDB";
import O6_RequirementsFile from "./O6_RequirementsFile";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================
const o1_CreatePythonProject = "1. Create Pure Python Project";
const o2_InstallDjango = "2. Install Django";
const o3_SetupDjangoProject = "3. Setup Django Project";
const o4_RunDjangoProject = "4. Run Django Project";
const o5_MigrateSQLiteDB = "5. Migrate SQLite DB";
const o6_RequirementsFile = "6. create requirements.txt";
const oX_SetupDjangoApp = "x. Setup Django Apps";
const oX_SpringVsDjango = "x. Spring Vs Django Terminology";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_CreatePythonProject,
  o2_InstallDjango,
  o3_SetupDjangoProject,
  o4_RunDjangoProject,
  o5_MigrateSQLiteDB,
  o6_RequirementsFile,
  oX_SetupDjangoApp,
  oX_SpringVsDjango,
];

// ============================================
// ============================================

const CreateDjangoProjectMain = () => {
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
      <O2_InstallDjango anchor={o2_InstallDjango} />
      <O3_SetupDjangoProject anchor={o3_SetupDjangoProject} />
      <O4_RunDjangoProject anchor={o4_RunDjangoProject} />
      <O5_MigrateSQLiteDB anchor={o5_MigrateSQLiteDB} />
      <O6_RequirementsFile anchor={o6_RequirementsFile} />
      <OX_SetupDjangoApp anchor={oX_SetupDjangoApp} />
      <OX_SpringVsDjango anchor={oX_SpringVsDjango} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CreateDjangoProjectMain;
