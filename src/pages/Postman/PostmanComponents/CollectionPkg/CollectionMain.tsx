import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../components";
import O1_IntroCollection from "./O1_IntroCollection";
import O2_CreateCollection from "./O2_CreateCollection";
import O3_CollectionVariables from "./O3_CollectionVariables";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroCollection = "1. Intro Collection";
const o2_CreateCollection = "2. Create Collection";
const o3_CollectionVariables = "3. Collection Variables";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroCollection, o2_CreateCollection, o3_CollectionVariables];

// ============================================
// ============================================

const CollectionMain = () => {
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

      <O1_IntroCollection anchor={o1_IntroCollection} />
      <O2_CreateCollection anchor={o2_CreateCollection}></O2_CreateCollection>
      <O3_CollectionVariables anchor={o3_CollectionVariables}></O3_CollectionVariables>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default CollectionMain;
