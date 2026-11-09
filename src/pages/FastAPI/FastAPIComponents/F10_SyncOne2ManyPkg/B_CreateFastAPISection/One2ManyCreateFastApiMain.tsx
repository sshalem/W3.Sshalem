import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_CreateFastAPI from "./O1_CreateFastAPI";
import O2_InstallDependencies from "./O2_InstallDependencies";
import O3_RequirementsTxtFile from "./O3_RequirementsTxtFile";
import O4_scriptsTxtfile from "./O4_scriptsTxtfile";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CreateFastAPI = "1. Create FastAPI";
const o2_InstallDependencies = "2. Install Dependencies";
const o3_RequirementsTxtFile = "3. requirements.txt";
const o4_scriptsTxtfile = "4. scripts.txt";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_CreateFastAPI, o2_InstallDependencies, o3_RequirementsTxtFile, o4_scriptsTxtfile];

// ============================================
// ============================================

const One2ManyCreateFastApiMain = () => {
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

      <O1_CreateFastAPI anchor={o1_CreateFastAPI} />
      <O2_InstallDependencies anchor={o2_InstallDependencies} />
      <O3_RequirementsTxtFile anchor={o3_RequirementsTxtFile} />
      <O4_scriptsTxtfile anchor={o4_scriptsTxtfile} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default One2ManyCreateFastApiMain;
