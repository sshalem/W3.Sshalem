import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O3_Service from "./O3_Service";
import O1_IntroRepoAdv from "./O1_IntroRepoAdv";
import O2_Repository from "./O2_Repository";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroRepoAdv = "1. Intro";
const o2_Repository = "2. Repository";
const o3_Service = "3. Service";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroRepoAdv, o2_Repository, o3_Service];

// ============================================
// ============================================

const RepoAdvancedMain = () => {
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
      <O1_IntroRepoAdv anchor={o1_IntroRepoAdv} />
      <O2_Repository anchor={o2_Repository} />
      <O3_Service anchor={o3_Service} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default RepoAdvancedMain;
