/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_Loop from "./O1_Loop";
import O2_LoopPrintInSameLine from "./O3_ElseInForLoop";
import O3_ElseInForLoop from "./O3_ElseInForLoop";
import O4_ContinueBreakInFor from "./O4_ContinueBreakInFor";
import O5_NestedForLoop from "./O5_NestedForLoop";
import O6_IterateList from "./O6_IterateList";
import O0_Range from "./O0_Range";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_Range = "range()";
const o1_Loop = "1. Loop";
const o2_LoopPrintInSameLine = "2. Loop Print In Same Line";
const o3_ElseInForLoop = "3. Else In For Loop";
const o4_ContinueBreakInFor = "4. Continue Break In For";
const o5_NestedForLoop = "5. Nested For Loop";
const o6_IterateList = "6. Iterate List";
// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_Range, o1_Loop, o2_LoopPrintInSameLine, o3_ElseInForLoop, o4_ContinueBreakInFor, o5_NestedForLoop, o6_IterateList];

// ============================================
// ============================================

const LoopsMain = () => {
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

      <O0_Range anchor={o0_Range} />
      <O1_Loop anchor={o1_Loop} />
      <O2_LoopPrintInSameLine anchor={o2_LoopPrintInSameLine} />
      <O3_ElseInForLoop anchor={o3_ElseInForLoop} />
      <O4_ContinueBreakInFor anchor={o4_ContinueBreakInFor} />
      <O5_NestedForLoop anchor={o5_NestedForLoop} />
      <O6_IterateList anchor={o6_IterateList} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default LoopsMain;
