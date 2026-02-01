import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_GlobalExceptionIntro from "./O1_GlobalExceptionIntro";
import O2_PackageStructure from "./O2_PackageStructure";
import O3_CreateCustomExceptions from "./O3_CreateCustomExceptions";
import O4_CreateGlobalHTTPExceptionHandler from "./O4_CreateGlobalHTTPExceptionHandler";
import O5_RaiseExceptionInService from "./O5_RaiseExceptionInService";
import O6_RouterWithouExceptions from "./O6_RouterWithouExceptions";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_GlobalExceptionIntro = "1. Intro Global Exception";
const o2_PackageStructure = "2. Package Structure";
const o3_CreateCustomExceptions = "3. Create Custom Exceptions";
const o4_CreateGlobalHTTPExceptionHandler = "4. Create Global HTTPException Handler";
const o5_RaiseExceptionInService = "5. Raise Exception In Service";
const o6_RouterWithouExceptions = "6. Router w/o HTTPException";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_GlobalExceptionIntro,
  o2_PackageStructure,
  o3_CreateCustomExceptions,
  o4_CreateGlobalHTTPExceptionHandler,
  o5_RaiseExceptionInService,
  o6_RouterWithouExceptions,
];

// ============================================
// ============================================

const GlobalExceptionsMain = () => {
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

      <O1_GlobalExceptionIntro anchor={o1_GlobalExceptionIntro} />
      <O2_PackageStructure anchor={o2_PackageStructure} />
      <O3_CreateCustomExceptions anchor={o3_CreateCustomExceptions} />
      <O4_CreateGlobalHTTPExceptionHandler anchor={o4_CreateGlobalHTTPExceptionHandler} />
      <O5_RaiseExceptionInService anchor={o5_RaiseExceptionInService} />
      <O6_RouterWithouExceptions anchor={o6_RouterWithouExceptions} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default GlobalExceptionsMain;
