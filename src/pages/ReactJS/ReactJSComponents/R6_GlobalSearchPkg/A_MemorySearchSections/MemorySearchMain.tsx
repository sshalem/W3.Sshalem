/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroGlobalSearch from "./O1_IntroMemorySearch";
import O2_IndexScript from "./O2_IndexScript";
import O3_CreateScriptsFolder from "./O3_CreateScriptsFolder";
import O4_WriteIndexScriptCode from "./O4_WriteIndexScriptCode";
import O5_RunScriptDev from "./O5_RunScriptDev";
import O6_SearchComponent from "./O6_SearchComponent";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroGlobalSearch = "1. Intro global search";
const o2_IndexScript = "2. Index Script";
const o3_CreateScriptsFolder = "3. Create Scripts Folder";
const o4_WriteIndexScriptCode = "4. Write Index Script Code";
const o5_RunScriptDev = "5. Run Script with npm run dev";
const o6_SearchComponent = "6. Search Component";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_IntroGlobalSearch,
  o2_IndexScript,
  o3_CreateScriptsFolder,
  o4_WriteIndexScriptCode,
  o5_RunScriptDev,
  o6_SearchComponent,
];

// ============================================
// ============================================

const MemorySearchMain = () => {
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
      <O2_IndexScript anchor={o2_IndexScript}></O2_IndexScript>
      <O3_CreateScriptsFolder anchor={o3_CreateScriptsFolder}></O3_CreateScriptsFolder>
      <O4_WriteIndexScriptCode anchor={o4_WriteIndexScriptCode}></O4_WriteIndexScriptCode>
      <O5_RunScriptDev anchor={o5_RunScriptDev}></O5_RunScriptDev>
      <O6_SearchComponent anchor={o6_SearchComponent}></O6_SearchComponent>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default MemorySearchMain;
