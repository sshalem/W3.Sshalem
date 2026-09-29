/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ConcurrencyFundamentals from "./O1_ConcurrencyFundamentals";
import O2_ProcessAndThreads from "./O2_ProcessAndThreads";
import O3_CreateThread from "./O3_CreateThread";
import O4_ThreadLifecycle from "./O4_ThreadLifecycle";
import O5_RunnableCallable from "./O5_RunnableCallable";
import O6_RaceConditions from "./O6_RaceConditions";
import O7_CriticalSections from "./O7_CriticalSections";
import O8_Synchronized from "./O8_Synchronized";
import O9_VolatileVisibility from "./O9_VolatileVisibility";
import O10_Atomicity from "./O10_Atomicity";
import O11_JavaMemoryModel from "./O11_JavaMemoryModel";
import O8_1_SynchronizedMethod from "./O8_1_SynchronizedMethod";
import O8_2_SynchronizedBlock from "./O8_2_SynchronizedBlock";
import O8_3_StaticSynchronization from "./O8_3_StaticSynchronization";
import O8_4_IntrinsicLock from "./O8_4_IntrinsicLock";
import O8_5_monitor from "./O8_5_monitor";
import O8_6_MutualExclusion from "./O8_6_MutualExclusion";
import O8_7_ObjectLock from "./O8_7_ObjectLock";
import O8_8_ClassLock from "./O8_8_ClassLock";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ConcurrencyFundamentals = "1. Concurrency Fundamentals";
const o2_ProcessAndThreads = "2. Processes and Threads";
const o3_CreateThread = "3. Create Thread";
const o4_ThreadLifecycle = "4. Thread Lifecycle";
const o5_RunnableCallable = "5. Runnable vs Callable";
const o6_RaceConditions = "6. Race Conditions";
const o7_CriticalSections = "7. Critical Sections";
const o8_Synchronized = "8. Synchronized";
const o8_1_SynchronizedMethod = "8.1. Synchronized Method";
const o8_2_SynchronizedBlock = "8.2. Synchronized Block";
const o8_3_StaticSynchronization = "8.3. Static Synchronization";
const o8_4_IntrinsicLock = "8.4. Intrinsic Lock";
const o8_5_monitor = "8.5. monitor";
const o8_6_MutualExclusion = "8.6. Mutual Exclusion";
const o8_7_ObjectLock = "8.7. Object Lock";
const o8_8_ClassLock = "8.8. Class Lock";
const o9_VolatileVisibility = "9. Volatile & Visibility";
const o10_Atomicity = "10. Atomicity & Atomic Classes";
const o11_JavaMemoryModel = "11. Java Memory Model";
// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_ConcurrencyFundamentals,
  o2_ProcessAndThreads,
  o3_CreateThread,
  o4_ThreadLifecycle,
  o5_RunnableCallable,
  o6_RaceConditions,
  o7_CriticalSections,
  o8_Synchronized,
  o8_1_SynchronizedMethod,
  o8_2_SynchronizedBlock,
  o8_3_StaticSynchronization,
  o8_4_IntrinsicLock,
  o8_5_monitor,
  o8_6_MutualExclusion,
  o8_7_ObjectLock,
  o8_8_ClassLock,
  o9_VolatileVisibility,
  o10_Atomicity,
  o11_JavaMemoryModel,
];

// ============================================
// ============================================

const Level1CoreMain = () => {
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
      <O1_ConcurrencyFundamentals anchor={o1_ConcurrencyFundamentals} />
      <O2_ProcessAndThreads anchor={o2_ProcessAndThreads} />
      <O3_CreateThread anchor={o3_CreateThread} />
      <O4_ThreadLifecycle anchor={o4_ThreadLifecycle} />
      <O5_RunnableCallable anchor={o5_RunnableCallable} />
      <O6_RaceConditions anchor={o6_RaceConditions} />
      <O7_CriticalSections anchor={o7_CriticalSections} />
      <O8_Synchronized anchor={o8_Synchronized} />
      <O8_1_SynchronizedMethod anchor={o8_1_SynchronizedMethod} />
      <O8_2_SynchronizedBlock anchor={o8_2_SynchronizedBlock} />
      <O8_3_StaticSynchronization anchor={o8_3_StaticSynchronization} />
      <O8_4_IntrinsicLock anchor={o8_4_IntrinsicLock} />
      <O8_5_monitor anchor={o8_5_monitor} />
      <O8_6_MutualExclusion anchor={o8_6_MutualExclusion} />
      <O8_7_ObjectLock anchor={o8_7_ObjectLock} />
      <O8_8_ClassLock anchor={o8_8_ClassLock} />
      <O9_VolatileVisibility anchor={o9_VolatileVisibility} />
      <O10_Atomicity anchor={o10_Atomicity} />
      <O11_JavaMemoryModel anchor={o11_JavaMemoryModel} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default Level1CoreMain;
