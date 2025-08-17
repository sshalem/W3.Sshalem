import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../components";
import O2_PortCheck from "./O2_PortCheck";
import O1_Git from "./O1_Git";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_git = "O1_git";
const o2_port_check = "O2_port_check";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_git, o2_port_check];

// ============================================
// ============================================

const PortCheckMain = () => {
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
      <O1_Git anchor={o1_git}></O1_Git>
      <O2_PortCheck anchor={o2_port_check}></O2_PortCheck>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default PortCheckMain;
