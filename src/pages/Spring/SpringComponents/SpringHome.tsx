import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../components";
import StsVersions from "./SpringHomePkg/StsVersions";
import SpringTopics from "./SpringHomePkg/SpringTopics";
import SpringGuideRefrence from "./SpringHomePkg/SpringGuideRefrence";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const sts_versions = "sts versions";
const spring_topics = "spring topics";
const spring_guide_refrence = "spring guide refrence";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [spring_topics, sts_versions];

// ============================================
// ============================================

const SpringHome = () => {
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
      <div className="bg-teal-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Spring Home</div>
      <SpringTopics anchor={spring_topics} />
      <StsVersions anchor={sts_versions} />
      <SpringGuideRefrence anchor={spring_guide_refrence}></SpringGuideRefrence>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default SpringHome;
