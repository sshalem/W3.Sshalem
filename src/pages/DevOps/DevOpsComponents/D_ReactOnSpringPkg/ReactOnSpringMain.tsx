import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../components";
import O2_ReactOnSpringUnloadZforce from "./O2_ReactOnSpringUnloadZforce";
import O1_ReactOnSpring from "./O1_ReactOnSpring";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ReactOnSpring = "1. react on spring";
const o2_ReactOnSpringUnloadZforce = "2. Config filter see Unliad Z force";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_ReactOnSpring, o2_ReactOnSpringUnloadZforce];

// ============================================
// ============================================

const ReactOnSpringMain = () => {
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
    <section className="ml-2 md:ml-10">
      {/* Start Contents */}
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}

      <O1_ReactOnSpring anchor={o1_ReactOnSpring} />
      <O2_ReactOnSpringUnloadZforce anchor={o2_ReactOnSpringUnloadZforce} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default ReactOnSpringMain;
