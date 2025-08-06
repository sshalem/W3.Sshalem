import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../components";
import PointersIntro from "./PointersIntro";
import PointersTwo from "./PointersTwo";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const pointers_intro = "pointers intro";
const pointers_two = "pointers two";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [pointers_intro, pointers_two];

// ============================================
// ============================================
const PointersMain = () => {
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

      <PointersIntro anchor={pointers_intro}></PointersIntro>
      <PointersTwo anchor={pointers_two}></PointersTwo>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PointersMain;
