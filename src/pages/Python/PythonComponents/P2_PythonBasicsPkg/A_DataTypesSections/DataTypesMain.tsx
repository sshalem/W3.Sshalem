/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DataTypes from "./O1_DataTypes";
import O3_Numeric from "./O3_Numeric";
import O2_CheckDataType from "./O2_CheckDataType";
import O4_RandomNumber from "./O4_RandomNumber";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DataTypes = "1. Data Types";
const o2_CheckDataType = "2. Check Data Type";
const o3_Numeric = "3. Numeric Types";
const o4_RandomNumber = "4. Random Number";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_DataTypes, o2_CheckDataType, o3_Numeric, o4_RandomNumber];

// ============================================
// ============================================

const DataTypesMain = () => {
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
      <O1_DataTypes anchor={o1_DataTypes} />
      <O2_CheckDataType anchor={o2_CheckDataType} />
      <O3_Numeric anchor={o3_Numeric} />
      <O4_RandomNumber anchor={o4_RandomNumber} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DataTypesMain;
