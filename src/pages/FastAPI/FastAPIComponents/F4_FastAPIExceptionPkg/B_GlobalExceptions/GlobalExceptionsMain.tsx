import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_GlobalExceptionIntro from "./O1_GlobalExceptionIntro";
import O2_PackageStructure from "./O2_PackageStructure";
import O3_CreateCustomExceptions from "./O3_CreateCustomExceptions";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_GlobalExceptionIntro = "1. Intro Global Exception";
const o2_PackageStructure = "2. Package Structure";
const o3_CreateCustomExceptions = "3. Create Custom Exceptions";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_GlobalExceptionIntro, o2_PackageStructure, o3_CreateCustomExceptions];

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

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default GlobalExceptionsMain;
