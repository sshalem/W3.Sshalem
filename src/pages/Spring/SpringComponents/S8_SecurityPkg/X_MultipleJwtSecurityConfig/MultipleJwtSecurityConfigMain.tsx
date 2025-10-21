import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_linksMultipleJwt from "./O0_linksMultipleJwt";
import O1_MultipleUserTypeAuthentication from "./O1_MultipleUserTypeAuthentication";
import O2_MultipleAuthProvider from "./O2_MultipleAuthProvider";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_linksMultipleJwt = "Intro Multiple Jwt config";
const o1_MultipleUserTypeAuthentication = "1. Multiple User Type Authentication";
const o2_MultipleAuthProvider = "2. Multiple Auth Provider";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_linksMultipleJwt, o1_MultipleUserTypeAuthentication, o2_MultipleAuthProvider];

// ============================================
// ============================================

const MultipleJwtSecurityConfigMain = () => {
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

      <O0_linksMultipleJwt anchor={o0_linksMultipleJwt}></O0_linksMultipleJwt>
      <O1_MultipleUserTypeAuthentication anchor={o1_MultipleUserTypeAuthentication}></O1_MultipleUserTypeAuthentication>
      <O2_MultipleAuthProvider anchor={o2_MultipleAuthProvider}></O2_MultipleAuthProvider>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default MultipleJwtSecurityConfigMain;
