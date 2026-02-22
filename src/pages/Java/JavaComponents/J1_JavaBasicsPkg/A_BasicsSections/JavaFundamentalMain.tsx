/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DataTypesOperators from "./O1_DataTypesOperators";
import O2_IfElseForWhile from "./O2_IfElseForWhile";
import O3_Methods from "./O3_Methods";
import O4_String from "./O4_String";
import O5_ConstructionOverload from "./O5_ConstructionOverload";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DataTypesOperators = "1. Data Types & Operators";
const o2_IfElseForWhile = "2. if/else/for/while/do/switch";
const o3_Methods = "3. Methods";
const o4_String = "4. String";
const o5_ConstructionOverload = "5. Construction Overload";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_DataTypesOperators, o2_IfElseForWhile, o3_Methods, o4_String, o5_ConstructionOverload];

// ============================================
// ============================================

const JavaFundamentalMain = () => {
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

      <O1_DataTypesOperators anchor={o1_DataTypesOperators} />
      <O2_IfElseForWhile anchor={o2_IfElseForWhile} />
      <O3_Methods anchor={o3_Methods} />
      <O4_String anchor={o4_String} />
      <O5_ConstructionOverload anchor={o5_ConstructionOverload} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default JavaFundamentalMain;
