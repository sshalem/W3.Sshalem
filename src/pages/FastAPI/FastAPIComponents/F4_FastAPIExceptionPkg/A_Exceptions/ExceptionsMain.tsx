import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DefaultBehavior from "./O1_DefaultBehavior";
import O2_PackageStructure from "./O2_PackageStructure";
import O3_CreateCustomExceptions from "./O3_CreateCustomExceptions";
import O4_RaiseExceptionInService from "./O4_RaiseExceptionInService";
import O5_TryExceptExceptionInInRouter from "./O5_TryExceptExceptionInInRouter";
import O6_ReturnCustomMessageError from "./O6_ReturnCustomMessageError";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DefaultBehavior = "1. Default Exception Behavior";
const o2_PackageStructure = "2. Package Structure";
const o3_CreateCustomExceptions = "3. Create Custom Exceptions";
const o4_RaiseExceptionInService = "4. Raise Exception in Service";
const o5_TryExceptExceptionInInRouter = "5. Try/Except In In Router";
const o6_ReturnCustomMessageError = "6. Return Custom Message Error";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_DefaultBehavior,
  o2_PackageStructure,
  o3_CreateCustomExceptions,
  o4_RaiseExceptionInService,
  o5_TryExceptExceptionInInRouter,
  o6_ReturnCustomMessageError,
];

// ============================================
// ============================================

const ExceptionsMain = () => {
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

      <O1_DefaultBehavior anchor={o1_DefaultBehavior} />
      <O2_PackageStructure anchor={o2_PackageStructure} />
      <O3_CreateCustomExceptions anchor={o3_CreateCustomExceptions} />
      <O4_RaiseExceptionInService anchor={o4_RaiseExceptionInService} />
      <O5_TryExceptExceptionInInRouter anchor={o5_TryExceptExceptionInInRouter} />
      <O6_ReturnCustomMessageError anchor={o6_ReturnCustomMessageError} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ExceptionsMain;
