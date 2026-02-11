import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_SqliteIntro from "./O1_SqliteIntro";
import O2_CorePackage from "./O2_CorePackage";
import O3_Database_Py from "./O3_Database_Py";
import O6_Database_AllTogether from "./O6_Database_AllTogether";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_SqliteIntro = "1. Sqlite Intro";
const o2_CorePackage = "2. create Core package";
const o3_Database_Py = "3. create database.py";
const o6_Database_AllTogether = "6. database.py -> All Together";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_SqliteIntro, o2_CorePackage, o3_Database_Py, o6_Database_AllTogether];

// ============================================
// ============================================

const Sqlite3Main = () => {
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

      <O1_SqliteIntro anchor={o1_SqliteIntro} />
      <O2_CorePackage anchor={o2_CorePackage} />
      <O3_Database_Py anchor={o3_Database_Py} />
      <O6_Database_AllTogether anchor={o6_Database_AllTogether} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Sqlite3Main;
