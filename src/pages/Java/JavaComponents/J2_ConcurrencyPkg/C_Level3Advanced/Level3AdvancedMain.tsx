/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O23_Deadlocks from "./O23_Deadlocks";
import O24_Livelocks from "./O24_Livelocks";
import O25_Starvation from "./O25_Starvation";
import O26_ThreadSafety from "./O26_ThreadSafety";
import O27_Immutability from "./O27_Immutability";
import O28_ThreadLocal from "./O28_ThreadLocal";
import O29_ForkJoin from "./O29_ForkJoin";
import O30_ParallelStreams from "./O30_ParallelStreams";
import O31_AdvancedAtomicOperations from "./O31_AdvancedAtomicOperations";
import O32_ConcurrencyPatterns from "./O32_ConcurrencyPatterns";
import O33_CPUvsIO_Bound from "./O33_CPUvsIO_Bound";
import O34_DatabaseConcurrency from "./O34_DatabaseConcurrency";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o23_Deadlocks = "o23_Deadlocks";
const o24_Livelocks = "o24_Livelocks";
const o25_Starvation = "o25_Starvation";
const o26_ThreadSafety = "o26_ThreadSafety";
const o27_Immutability = "O27_Immutability";
const o28_ThreadLocal = "o28_ThreadLocal";
const o29_ForkJoin = "o29_ForkJoin";
const p30_ParallelStreams = "p30_ParallelStreams";
const o31_AdvancedAtomicOperations = "o31_AdvancedAtomicOperations";
const o32_ConcurrencyPatterns = "o32_ConcurrencyPatterns";
const o33_CPUvsIO_Bound = "O33_CPUvsIO_Bound";
const o34_DatabaseConcurrency = "o34_DatabaseConcurrency";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o23_Deadlocks,
  o24_Livelocks,
  o25_Starvation,
  o26_ThreadSafety,
  o27_Immutability,
  o28_ThreadLocal,
  o29_ForkJoin,
  p30_ParallelStreams,
  o31_AdvancedAtomicOperations,
  o32_ConcurrencyPatterns,
  o33_CPUvsIO_Bound,
  o34_DatabaseConcurrency,
];

// ============================================
// ============================================

const Level3AdvancedMain = () => {
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
      <O23_Deadlocks anchor={o23_Deadlocks} />
      <O24_Livelocks anchor={o24_Livelocks} />
      <O25_Starvation anchor={o25_Starvation} />
      <O26_ThreadSafety anchor={o26_ThreadSafety} />
      <O27_Immutability anchor={o27_Immutability} />
      <O28_ThreadLocal anchor={o28_ThreadLocal} />
      <O29_ForkJoin anchor={o29_ForkJoin} />
      <O30_ParallelStreams anchor={p30_ParallelStreams} />
      <O31_AdvancedAtomicOperations anchor={o31_AdvancedAtomicOperations} />
      <O32_ConcurrencyPatterns anchor={o32_ConcurrencyPatterns} />
      <O33_CPUvsIO_Bound anchor={o33_CPUvsIO_Bound} />
      <O34_DatabaseConcurrency anchor={o34_DatabaseConcurrency} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default Level3AdvancedMain;
