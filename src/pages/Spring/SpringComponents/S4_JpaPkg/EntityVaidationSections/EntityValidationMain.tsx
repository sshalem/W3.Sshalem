import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_BasicConstraints from "./O1_BasicConstraints";
import O2_SizeRangeConstraints from "./O2_SizeRangeConstraints";
import O3_PatternFormatConstraints from "./O3_PatternFormatConstraints";
import O4_CompositeAdvanced from "./O4_CompositeAdvanced";
import O5_ExampleDtoBeanValidation from "./O5_ExampleDtoBeanValidation";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_BasicConstraints = "1. Basic Constraints";
const o2_SizeRangeConstraints = "2. Size Range Constraints";
const o3_PatternFormatConstraints = "3. Pattern Format Constraints";
const o4_CompositeAdvanced = "4. Composite Advanced";
const o5_ExampleDtoBeanValidation = "5. Example Dto Bean Validation";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_BasicConstraints,
  o2_SizeRangeConstraints,
  o3_PatternFormatConstraints,
  o4_CompositeAdvanced,
  o5_ExampleDtoBeanValidation,
];

// ============================================
// ============================================

const EntityValidationMain = () => {
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

      <O1_BasicConstraints anchor={o1_BasicConstraints}></O1_BasicConstraints>
      <O2_SizeRangeConstraints anchor={o2_SizeRangeConstraints}></O2_SizeRangeConstraints>
      <O3_PatternFormatConstraints anchor={o3_PatternFormatConstraints}></O3_PatternFormatConstraints>
      <O4_CompositeAdvanced anchor={o4_CompositeAdvanced}></O4_CompositeAdvanced>
      <O5_ExampleDtoBeanValidation anchor={o5_ExampleDtoBeanValidation}></O5_ExampleDtoBeanValidation>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default EntityValidationMain;
