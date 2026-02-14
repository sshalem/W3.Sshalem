import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_PostgreSqlalchemyIntro from "./O1_PostgreSqlalchemyIntro";
import O2_InstallPackage from "./O2_InstallPackage";
import O3_CorePackage from "./O3_CorePackage";
import O4_Database_Py from "./O4_Database_Py";
import O5_ConfigPy from "./O5_ConfigPy";
import O6_EnvFastApi from "./O6_EnvFastApi";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_PostgreSqlalchemyIntro = "1. Postgresql Sqlalchemy Intro";
const o2_InstallPackage = "2. Install Package";
const o3_CorePackage = "3. Core Package Layout";
const o4_Database_Py = "4. database.py";
const o5_ConfigPy = "5. config.py";
const o6_EnvFastApi = "6. (.env)";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_PostgreSqlalchemyIntro, o2_InstallPackage, o3_CorePackage, o4_Database_Py, o5_ConfigPy, o6_EnvFastApi];

// ============================================
// ============================================

const PostgresqlalchemyMain = () => {
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

      <O1_PostgreSqlalchemyIntro anchor={o1_PostgreSqlalchemyIntro} />
      <O2_InstallPackage anchor={o2_InstallPackage} />
      <O3_CorePackage anchor={o3_CorePackage} />
      <O4_Database_Py anchor={o4_Database_Py} />
      <O5_ConfigPy anchor={o5_ConfigPy} />
      <O6_EnvFastApi anchor={o6_EnvFastApi} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PostgresqlalchemyMain;
