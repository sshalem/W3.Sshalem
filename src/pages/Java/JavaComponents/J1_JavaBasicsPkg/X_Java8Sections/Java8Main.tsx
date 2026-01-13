/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_Java8Intro from "./O0_Java8Intro";
import O2_LambdaExpression from "./O2_LambdaExpression";
import O1_FunctionalInterfaces from "./O1_FunctionalInterfaces";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_Java8Intro = "Intro Java 8";
const o1_FunctionalInterfaces = "1. Functional Interfaces";
const o2_LambdaExpression = "2. Lambda Expression";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_Java8Intro, o1_FunctionalInterfaces, o2_LambdaExpression];

// ============================================
// ============================================

const Java8Main = () => {
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

      <O0_Java8Intro anchor={o0_Java8Intro} />
      <O1_FunctionalInterfaces anchor={o1_FunctionalInterfaces} />
      <O2_LambdaExpression anchor={o2_LambdaExpression} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default Java8Main;
