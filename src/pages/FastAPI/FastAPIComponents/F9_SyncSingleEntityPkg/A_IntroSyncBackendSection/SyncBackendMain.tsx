import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroSycnBackend from "./O1_IntroSycnBackend";
import O2_SpringVsFastApi from "./O2_SpringVsFastApi";
import O3_FolderStructure from "./O3_FolderStructure";
import O4_TopicsToCover from "./O4_TopicsToCover";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroSycnBackend = "1. Intro Synchronus Backend";
const o2_SpringVsFastApi = "2. Spring Vs FastApi";
const o3_FolderStructure = "3. Project Folder Structure";
const o4_TopicsToCover = "4. Topics to cover";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroSycnBackend, o2_SpringVsFastApi, o3_FolderStructure, o4_TopicsToCover];

// ============================================
// ============================================

const SyncBackendMain = () => {
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

      <O1_IntroSycnBackend anchor={o1_IntroSycnBackend} />
      <O2_SpringVsFastApi anchor={o2_SpringVsFastApi} />
      <O3_FolderStructure anchor={o3_FolderStructure} />
      <O4_TopicsToCover anchor={o4_TopicsToCover} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default SyncBackendMain;
