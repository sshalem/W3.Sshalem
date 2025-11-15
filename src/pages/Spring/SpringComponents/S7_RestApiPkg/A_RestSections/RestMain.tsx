import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_RestIntro from "./O1_RestApiIntro";
import O2_RequestMapping from "./O2_RequestMapping";
import O3_IndependentAnnotations from "./O3_IndependentAnnotations";
import O4_RestCodeSnippets from "./O6_ResponseEntity";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_RestIntro = "1. Rest API Intro";
const o2_RequestMapping = "2. @RequestMapping";
const o3_IndependentAnnotations = "3. Methods Parameter Independent Annotations";
const o4_RestCodeSnippets = "4. Rest Code Snippets";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_RestIntro, o2_RequestMapping, o3_IndependentAnnotations, o4_RestCodeSnippets];

// ============================================
// ============================================

const RestMain = () => {
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

      <O1_RestIntro anchor={o1_RestIntro}></O1_RestIntro>
      <O2_RequestMapping anchor={o2_RequestMapping}></O2_RequestMapping>
      <O3_IndependentAnnotations anchor={o3_IndependentAnnotations}></O3_IndependentAnnotations>
      <O4_RestCodeSnippets anchor={o4_RestCodeSnippets}></O4_RestCodeSnippets>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default RestMain;
