import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_Question from "./O1_Question";
import O2_UnderstandProblem from "./O2_UnderstandProblem";
import O3_makeInventoryUpdatesAtomic from "./O3_makeInventoryUpdatesAtomic";
import O4_PaymentChangesArchitecture from "./O4_PaymentChangesArchitecture";
import O5_ImplementDBlayer from "./O5_ImplementDBlayer";
import O6_DBoperationsInTransaction from "./O6_DBoperationsInTransaction";
import O7_IntegratePaymentProviderSafely from "./O7_IntegratePaymentProviderSafely";
import O8_RecoveryTheHardestFailure from "./O8_RecoveryTheHardestFailure";
import O9_MakeStateTransitionsSafe from "./O9_MakeStateTransitionsSafe";
import O0_Intro from "./O0_Intro";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_Intro = "Intro";
const o1_Question = "1. Question";
const o2_UnderstandProblem = "2. Understand The Problem";
const o3_makeInventoryUpdatesAtomic = "3. make Inventory Updates Atomic";
const o4_PaymentChangesArchitecture = "4. Payment Changes Architecture";
const o5_ImplementDBlayer = "5. Implement DB layer";
const o6_DBoperationsInTransaction = "6. DB Operations In the Transaction";
const o7_IntegratePaymentProviderSafely = "7. Integrate Payment Provider Safely";
const o8_RecoveryTheHardestFailure = "8. Recovery The Hardest Failure";
const o9_MakeStateTransitionsSafe = "9. Make State Transitions Safe";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o0_Intro,
  o1_Question,
  o2_UnderstandProblem,
  o3_makeInventoryUpdatesAtomic,
  o4_PaymentChangesArchitecture,
  o5_ImplementDBlayer,
  o6_DBoperationsInTransaction,
  o7_IntegratePaymentProviderSafely,
  o8_RecoveryTheHardestFailure,
  o9_MakeStateTransitionsSafe,
];

// ============================================
// ============================================

const TransQuestionMain = () => {
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
      <O0_Intro anchor={o0_Intro} />
      <O1_Question anchor={o1_Question} />
      <O2_UnderstandProblem anchor={o2_UnderstandProblem} />
      <O3_makeInventoryUpdatesAtomic anchor={o3_makeInventoryUpdatesAtomic} />
      <O4_PaymentChangesArchitecture anchor={o4_PaymentChangesArchitecture} />
      <O5_ImplementDBlayer anchor={o5_ImplementDBlayer} />
      <O6_DBoperationsInTransaction anchor={o6_DBoperationsInTransaction} />
      <O7_IntegratePaymentProviderSafely anchor={o7_IntegratePaymentProviderSafely} />
      <O8_RecoveryTheHardestFailure anchor={o8_RecoveryTheHardestFailure} />
      <O9_MakeStateTransitionsSafe anchor={o9_MakeStateTransitionsSafe} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default TransQuestionMain;
