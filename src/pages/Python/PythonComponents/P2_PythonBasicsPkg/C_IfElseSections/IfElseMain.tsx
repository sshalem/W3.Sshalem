/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IfElseIntro from "./O1_IfElseIntro";
import O2_IfStatement from "./O2_IfStatement";
import O3_elifStatement from "./O3_elifStatement";
import O4_elseStatement from "./O4_elseStatement";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IfElseIntro = "1. intro";
const o2_IfStatement = "2. if ";
const o3_elifStatement = "3. elif";
const o4_elseStatement = "4. else";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IfElseIntro, o2_IfStatement, o3_elifStatement, o4_elseStatement];

// ============================================
// ============================================

const IfElseMain = () => {
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

      <O1_IfElseIntro anchor={o1_IfElseIntro} />
      <O2_IfStatement anchor={o2_IfStatement} />
      <O3_elifStatement anchor={o3_elifStatement} />
      <O4_elseStatement anchor={o4_elseStatement} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default IfElseMain;
