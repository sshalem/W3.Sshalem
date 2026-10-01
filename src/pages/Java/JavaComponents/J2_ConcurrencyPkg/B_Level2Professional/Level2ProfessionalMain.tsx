/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O12_ExecutorFramework from "./O12_ExecutorFramework";
import O13_ThreadPools from "./O13_ThreadPools";
import O14_ExecutorServiceLifecycle from "./O14_ExecutorServiceLifecycle";
import O15_Future from "./O15_Future";
import O16_CompletableFuture from "./O16_CompletableFuture";
import O17_ConcurrentCollections from "./O17_ConcurrentCollections";
import O18_BlockingQueue from "./O18_BlockingQueue";
import O19_ProducerConsumer from "./O19_ProducerConsumer";
import O20_LockReentrantLock from "./O20_LockReentrantLock";
import O21_ReadWriteLock from "./O21_ReadWriteLock";
import O22_SynchronizationUtilities from "./O22_SynchronizationUtilities";
import O12_1_RunnableCallable from "./O12_1_RunnableCallable";
import O12_2_ExecutorsClass from "./O12_2_ExecutorsClass";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o12_ExecutorFramework = "12. Executor Framework";
const o12_1_RunnableCallable = "12.1. Runnable Vs Callable";
const o12_2_ExecutorsClass = "12.2. Executors Class";
const o13_ThreadPools = "13. Thread Pools";
const o14_ExecutorServiceLifecycle = "14. ExecutorService Lifecycle";
const o15_Future = "15. Future";
const o16_CompletableFuture = "16. CompletableFuture";
const o17_ConcurrentCollections = "17. Concurrent Collections";
const o18_BlockingQueue = "18. Blocking Queue";
const o19_ProducerConsumer = "19. Producer Consumer";
const o20_LockReentrantLock = "20. LockReentrant Lock";
const o21_ReadWriteLock = "21. ReadWriteLock";
const o22_SynchronizationUtilities = "22. Synchronization Utilities";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o12_ExecutorFramework,
  o12_1_RunnableCallable,
  o12_2_ExecutorsClass,
  o13_ThreadPools,
  o14_ExecutorServiceLifecycle,
  o15_Future,
  o16_CompletableFuture,
  o17_ConcurrentCollections,
  o18_BlockingQueue,
  o19_ProducerConsumer,
  o20_LockReentrantLock,
  o21_ReadWriteLock,
  o22_SynchronizationUtilities,
];

// ============================================
// ============================================

const Level2ProfessionalMain = () => {
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
      <O12_ExecutorFramework anchor={o12_ExecutorFramework} />
      <O12_1_RunnableCallable anchor={o12_1_RunnableCallable} />
      <O12_2_ExecutorsClass anchor={o12_2_ExecutorsClass} />
      <O13_ThreadPools anchor={o13_ThreadPools} />
      <O14_ExecutorServiceLifecycle anchor={o14_ExecutorServiceLifecycle} />
      <O15_Future anchor={o15_Future} />
      <O16_CompletableFuture anchor={o16_CompletableFuture} />
      <O17_ConcurrentCollections anchor={o17_ConcurrentCollections} />
      <O18_BlockingQueue anchor={o18_BlockingQueue} />
      <O19_ProducerConsumer anchor={o19_ProducerConsumer} />
      <O20_LockReentrantLock anchor={o20_LockReentrantLock} />
      <O21_ReadWriteLock anchor={o21_ReadWriteLock} />
      <O22_SynchronizationUtilities anchor={o22_SynchronizationUtilities} />
      {/* <O13_ThreadPools anchor={o13_ThreadPools} /> */}

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default Level2ProfessionalMain;
