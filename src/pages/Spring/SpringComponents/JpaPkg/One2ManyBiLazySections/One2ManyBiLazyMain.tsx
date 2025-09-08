import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O2_SetupEntityO2M from "./O2_SetupEntityO2M";
import O1_IntroO2M from "./O1_IntroO2M";
import O3_LazyCascadePersist from "./O3_LazyCascadePersist";
import O4_LazyCascadeMerge from "./O4_LazyCascadeMerge";
import O5_LazyCascadeRemove from "./O5_LazyCascadeRemove";
import O6_LazyCascadeRefresh from "./O6_LazyCascadeRefresh";
import O7_LazyCascadeDetach from "./O7_LazyCascadeDetach";
import OO_DtoVsEntity from "./OO_DtoVsEntity";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroO2M = "1. Intro";
const o2_SetupEntityO2M = "2. Setup Entities";
const o3_LazyCascadePersist = "3. CascadeType Persist (save)";
const o4_LazyCascadeMerge = "4. CascadeTyep Merge (update)";
const o5_LazyCascadeRemove = "5. CascadeType Remove (delete)";
const o6_LazyCascadeRefresh = "6. CascadeType Refresh";
const o7_LazyCascadeDetach = "7. CascadeType Detach";
const oo_DtovsEntity = "3_1_ DTO vs Entity";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_IntroO2M,
  o2_SetupEntityO2M,
  o3_LazyCascadePersist,
  oo_DtovsEntity,
  o4_LazyCascadeMerge,
  o5_LazyCascadeRemove,
  o6_LazyCascadeRefresh,
  o7_LazyCascadeDetach,
];

// ============================================
// ============================================

const One2ManyBiLazyMain = () => {
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
      <O1_IntroO2M anchor={o1_IntroO2M}></O1_IntroO2M>
      <O2_SetupEntityO2M anchor={o2_SetupEntityO2M}></O2_SetupEntityO2M>
      <O3_LazyCascadePersist anchor={o3_LazyCascadePersist}></O3_LazyCascadePersist>
      <OO_DtoVsEntity anchor={oo_DtovsEntity}></OO_DtoVsEntity>
      <O4_LazyCascadeMerge anchor={o4_LazyCascadeMerge}></O4_LazyCascadeMerge>
      <O5_LazyCascadeRemove anchor={o5_LazyCascadeRemove}></O5_LazyCascadeRemove>
      <O6_LazyCascadeRefresh anchor={o6_LazyCascadeRefresh}></O6_LazyCascadeRefresh>
      <O7_LazyCascadeDetach anchor={o7_LazyCascadeDetach}></O7_LazyCascadeDetach>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default One2ManyBiLazyMain;
