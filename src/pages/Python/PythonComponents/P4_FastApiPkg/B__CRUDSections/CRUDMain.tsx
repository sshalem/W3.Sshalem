import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_ApiSetup from "./O0_ApiSetup";
import O0_Pydantic from "./O0_Pydantic";
import O1_GetApi from "./O1_GetApi";
import O2_PostApi from "./O2_PostApi";
import O3_PutApi from "./O3_PutApi";
import O4_DeleteApi from "./O4_DeleteApi";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_Pydantic = "Pydantic";
const o0_ApiSetup = "API (Controller) Setup";
const o1_GetApi = "1. GET";
const o2_PostApi = "2. POST";
const o3_PutApi = "3. PUT";
const o4_DeleteApi = "4. DELETE";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_Pydantic, o0_ApiSetup, o1_GetApi, o2_PostApi, o3_PutApi, o4_DeleteApi];

// ============================================
// ============================================

const CRUDMain = () => {
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

      <O0_ApiSetup anchor={o0_ApiSetup} />
      <O0_Pydantic anchor={o0_Pydantic} />
      <O1_GetApi anchor={o1_GetApi} />
      <O2_PostApi anchor={o2_PostApi} />
      <O3_PutApi anchor={o3_PutApi} />
      <O4_DeleteApi anchor={o4_DeleteApi} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CRUDMain;
