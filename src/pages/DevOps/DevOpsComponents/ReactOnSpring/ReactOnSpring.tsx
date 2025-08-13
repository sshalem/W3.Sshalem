import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../components";
import ReactOnSpringMain from "./ReactOnSpringMain";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const react_on_spring = "react on spring";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [react_on_spring];

// ============================================
// ============================================

const ReactOnSpring = () => {
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

      <ReactOnSpringMain anchor={react_on_spring} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default ReactOnSpring;
