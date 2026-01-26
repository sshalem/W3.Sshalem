import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ReturnResponse from "./O1_Response";
import O3_JSONResponse from "./O3_JSONResponse";
import O2_MediaType from "./O2_MediaType";
import O4_ResponseBestPractice from "./O4_ResponseBestPractice";
import O5_DefaultConvention from "./O5_DefaultConvention";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ReturnResponse = "1. Response";
const o2_MediaType = "2. Media Type";
const o3_JSONResponse = "3. JSONResponse";
const o4_ResponseBestPractice = "4. Response Convention (Pydantic)";
const o5_DefaultConvention = "5. Default Response Convention";
// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_ReturnResponse, o2_MediaType, o3_JSONResponse, o4_ResponseBestPractice, o5_DefaultConvention];

// ============================================
// ============================================

const RequestResponseMain = () => {
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

      <O1_ReturnResponse anchor={o1_ReturnResponse} />
      <O2_MediaType anchor={o2_MediaType} />
      <O3_JSONResponse anchor={o3_JSONResponse} />
      <O4_ResponseBestPractice anchor={o4_ResponseBestPractice} />
      <O5_DefaultConvention anchor={o5_DefaultConvention} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default RequestResponseMain;
