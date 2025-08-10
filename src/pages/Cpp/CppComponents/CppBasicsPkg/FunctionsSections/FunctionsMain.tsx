import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
// import FunctionsIntro from "./FunctionsIntro";
// import FunctionsTwo from "./FunctionsTwo";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

// const functions_intro = "functions intro";
// const functions_two = "functions two";

const xxx_intro = "xxx Intro";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

// const anchorList: string[] = [functions_intro, functions_two];
const anchorList: string[] = [xxx_intro];
// ============================================
// ============================================

const FunctionsMain = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();

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
  }, []);

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
      {/* <FunctionsIntro anchor={functions_intro} />
      <FunctionsTwo anchor={functions_two} /> */}
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default FunctionsMain;
