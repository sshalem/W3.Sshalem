import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_CreatePostgresDB from "./O1_CreatePostgresDB";
import O2_ProjectFolderStructure from "./O2_ProjectFolderStructure";
import O3_ConfigDataBaseCredentials from "./O3_ConfigDataBaseCredentials";
import O4_ConfigSqlAlchemy from "./O4_ConfigSqlAlchemy";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CreatePostgresDB = "1. Create PostgresDB";
const o2_ProjectFolderStructure = "2. Project Folder Structure";
const o3_ConfigDataBaseCredentials = "3. Config Database Credentials";
const o4_ConfigSqlAlchemy = "4. Config SqlAlchemy";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_CreatePostgresDB, o2_ProjectFolderStructure, o3_ConfigDataBaseCredentials, o4_ConfigSqlAlchemy];

// ============================================
// ============================================

const ConfigSQLAlchemyMain = () => {
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

      <O1_CreatePostgresDB anchor={o1_CreatePostgresDB} />
      <O2_ProjectFolderStructure anchor={o2_ProjectFolderStructure} />
      <O3_ConfigDataBaseCredentials anchor={o3_ConfigDataBaseCredentials} />
      <O4_ConfigSqlAlchemy anchor={o4_ConfigSqlAlchemy} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ConfigSQLAlchemyMain;
