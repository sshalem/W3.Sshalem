import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../components";
import O1_CreateViteProject from "./O1_CreateViteProject";
import O2_Favicon from "./O2_Favicon";
import O3_ReactIcons from "./O3_ReactIcons";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CreateViteProject = "1. Create Vite Project";
const o2_Favicon = "2. Favicon";
const o3_ReactIcons = "3. React Icons";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_CreateViteProject, o2_Favicon, o3_ReactIcons];

// ============================================
// ============================================

const Setup = () => {
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

      <O1_CreateViteProject anchor={o1_CreateViteProject}></O1_CreateViteProject>
      <O2_Favicon anchor={o2_Favicon}></O2_Favicon>
      <O3_ReactIcons anchor={o3_ReactIcons}></O3_ReactIcons>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Setup;
