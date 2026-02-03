import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_RawResponse from "./O1_RawResponse";
import O2_ResponseModelWithHeaders from "./O2_ResponseModelWithHeaders";
import O3_ReturnVoid from "./O3_ReturnVoid";
import O4_ReturnPlainCls from "./O4_ReturnPlainCls";
import O5_PathParameter from "./O5_PathParameter";
import O6_QueryParameters from "./O6_QueryParameters";
import O7_QueryEnumParameters from "./O7_QueryEnumParameters";
import O8_ListOfObjects from "./O8_ListOfObjects";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_RawResponse = "1. Return Raw Response";
const o2_ResponseModelWithHeaders = "2. Return Pydantic response_model + Headers + Status";
const o3_ReturnVoid = "3. Return Void";
const o4_ReturnPlainCls = "4. Return JSONRespnsoe Plain Class";
const o5_PathParameter = "5. Path Parameter";
const o6_QueryParameters = "6. Query Parameters";
const o7_QueryEnumParameters = "7. Query Enum Parameters";
const o8_ListOfObjects = "8. Return List Of Objects";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_RawResponse,
  o2_ResponseModelWithHeaders,
  o3_ReturnVoid,
  o4_ReturnPlainCls,
  o5_PathParameter,
  o6_QueryParameters,
  o7_QueryEnumParameters,
  o8_ListOfObjects,
];

// ============================================
// ============================================

const GetRequestMain = () => {
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

      <O1_RawResponse anchor={o1_RawResponse} />
      <O2_ResponseModelWithHeaders anchor={o2_ResponseModelWithHeaders} />
      <O3_ReturnVoid anchor={o3_ReturnVoid} />
      <O4_ReturnPlainCls anchor={o4_ReturnPlainCls} />
      <O5_PathParameter anchor={o5_PathParameter} />
      <O6_QueryParameters anchor={o6_QueryParameters} />
      <O7_QueryEnumParameters anchor={o7_QueryEnumParameters} />
      <O8_ListOfObjects anchor={o8_ListOfObjects} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default GetRequestMain;
