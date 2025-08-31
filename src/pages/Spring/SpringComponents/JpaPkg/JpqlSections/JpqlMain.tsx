import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import O1_IntroJpql from "./O1_IntroJpql";
import O2_JpqlNameVsPositionParam from "./O2_JpqlNameVsPositionParam";
import O3_JpqlSingleEntityTable from "./O3_JpqlSingleEntityTable";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroJpql = "1. Intro";
const o2_JpqlNameVsPositionParam = "2. Name Params Vs Position Param";
const o3_JpqlSingleEntityTable = "3. Jpql Single Entity/Table";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroJpql, o2_JpqlNameVsPositionParam, o3_JpqlSingleEntityTable];

// ============================================
// ============================================

const JpqlMain = () => {
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

      <O1_IntroJpql anchor={o1_IntroJpql}></O1_IntroJpql>
      <O2_JpqlNameVsPositionParam anchor={o2_JpqlNameVsPositionParam}></O2_JpqlNameVsPositionParam>
      <O3_JpqlSingleEntityTable anchor={o3_JpqlSingleEntityTable}></O3_JpqlSingleEntityTable>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JpqlMain;
