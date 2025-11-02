import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroGlobalSearch from "./O1_IntroGlobalSearch";
import O2_InstallFlexSearch from "./O2_InstallFlexSearch";
import O3_IndexScript from "./O3_IndexScript";
import O4_CreateIndexScript from "./O5_WriteIndexScriptCode";
import O5_WriteIndexScriptCode from "./O5_WriteIndexScriptCode";
import O6_RunScriptDev from "./O6_RunScriptDev";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroGlobalSearch = "1. Intro global search";
const o2_InstallFlexSearch = "2. Install FlexSearch";
const o3_IndexScript = "3. Index Script";
const o4_CreateIndexScript = "4. Create Index Script";
const o5_WriteIndexScriptCode = "5. Write Index Script Code";
const o6_RunScriptDev = "6. Run Script with npm run dev";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_IntroGlobalSearch,
  o2_InstallFlexSearch,
  o3_IndexScript,
  o4_CreateIndexScript,
  o5_WriteIndexScriptCode,
  o6_RunScriptDev,
];

// ============================================
// ============================================

const GlobalSearchMain = () => {
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

      <O1_IntroGlobalSearch anchor={o1_IntroGlobalSearch}></O1_IntroGlobalSearch>
      <O2_InstallFlexSearch anchor={o2_InstallFlexSearch}></O2_InstallFlexSearch>
      <O3_IndexScript anchor={o3_IndexScript}></O3_IndexScript>
      <O4_CreateIndexScript anchor={o4_CreateIndexScript}></O4_CreateIndexScript>
      <O5_WriteIndexScriptCode anchor={o5_WriteIndexScriptCode}></O5_WriteIndexScriptCode>
      <O6_RunScriptDev anchor={o6_RunScriptDev}></O6_RunScriptDev>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default GlobalSearchMain;
