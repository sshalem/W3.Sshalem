/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_IntroFunctions from "./O0_IntroFunctions";
import O1_LambdaAnonymosFunctions from "./O1_LambdaAnonymosFunctions";
import O2_LambdaUsage from "./O2_LambdaUsage";
import O3_PythonComprehension from "./O3_PythonComprehension";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_IntroFunctions = "Intro Functions";
const o1_LambdaAnonymosFunctions = "1. Lambda Anonymos Functions";
const o2_LambdaUsage = "2. Lambda Usage";
const o3_PythonComprehension = "3. Comprehension";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_IntroFunctions, o1_LambdaAnonymosFunctions, o2_LambdaUsage, o3_PythonComprehension];

// ============================================
// ============================================

const PythonFunctionsMain = () => {
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

      <O0_IntroFunctions anchor={o0_IntroFunctions} />
      <O1_LambdaAnonymosFunctions anchor={o1_LambdaAnonymosFunctions} />
      <O2_LambdaUsage anchor={o2_LambdaUsage} />
      <O3_PythonComprehension anchor={o3_PythonComprehension} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default PythonFunctionsMain;
