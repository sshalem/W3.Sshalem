import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../components";
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
  }, []);

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
      <SpringTopics anchor={spring_topics} />
      <StsVersions anchor={sts_versions} />
      <SpringGuideRefrence anchor={spring_guide_refrence}></SpringGuideRefrence>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default SpringHome;
