/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_BuilderIntro from "./O1_BuilderIntro";
import O2_BuilderImpl from "./O2_BuilderImpl";
import O3_BuilderCreataeImpl from "./O3_BuilderCreataeImpl";
import O4_BuilderBestImpl from "./O4_BuilderBestImpl";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_BuilderIntro = "1. Builder Intro";
const o2_BuilderImpl = "2. Builder Implementation";
const o3_BuilderCreataeImpl = "3. How to Add Builder to Class";
const o4_BuilderBestImpl = "4. Builder Best Impl";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_BuilderIntro, o2_BuilderImpl, o3_BuilderCreataeImpl, o4_BuilderBestImpl];

// ============================================
// ============================================

const BuilderMain = () => {
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

      <O1_BuilderIntro anchor={o1_BuilderIntro} />
      <O2_BuilderImpl anchor={o2_BuilderImpl} />
      <O3_BuilderCreataeImpl anchor={o3_BuilderCreataeImpl} />
      <O4_BuilderBestImpl anchor={o4_BuilderBestImpl} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default BuilderMain;
