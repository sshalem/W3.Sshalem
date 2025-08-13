import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../components";
import ReactOnSpringMain from "./ReactOnSpringMain";
import ReactOnSpringUnloadZforce from "./ReactOnSpringUnloadZforce";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const react_on_spring = "react on spring";
const unload_z_force_example = "Config filter see Unliad Z force";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [react_on_spring, unload_z_force_example];

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
      <ReactOnSpringUnloadZforce anchor={unload_z_force_example} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default ReactOnSpring;
