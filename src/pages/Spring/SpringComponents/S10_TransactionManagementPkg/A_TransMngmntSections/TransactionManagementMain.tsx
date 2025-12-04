import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O2_InMemoryVsDB from "./O2_InMemoryVsDB";
import O3_SaveFlushCommit from "./O3_SaveFlushCommit";
import O4_HibernateSession from "./O4_HibernateSession";
import O1_IntroTxMngmt from "./O1_IntroTxMngmt";
import O5_TransactionMngmnt from "./O5_TransactionMngmnt";
import O6_WhatIsTransaction from "./O6_WhatIsTransaction";
import O7_TransactionalRepositoryMethods from "./O7_TransactionalRepositoryMethods";
import O8_AtomicOperations from "./O8_AtomicOperations";
import O9_TransactionalWithException from "./O9_TransactionalWithException";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroTxMngmt = "1. Intro TX Mangmnt";
const o2_InMemoryVsDB = "2. InMemory Vs Persistent Context Vs DB";
const o3_SaveFlushCommit = "3. Save, Flush, Commit";
const o4_HibernateSession = "4. Hibernate Session";
const o5_TransactionMngmnt = "5. Transaction Management";
const o6_WhatIsTransaction = "6. What is Transaction (ACID)";
const o7_TransactionalRepositoryMethods = "7. Transactional Repository Methods";
const o8_AtomicOperations = "8. Atomic Operations";
const o9_TransactionalWithException = "9. Exception thrown in @Transactional";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_IntroTxMngmt,
  o2_InMemoryVsDB,
  o3_SaveFlushCommit,
  o4_HibernateSession,
  o5_TransactionMngmnt,
  o6_WhatIsTransaction,
  o7_TransactionalRepositoryMethods,
  o8_AtomicOperations,
  o9_TransactionalWithException,
];

// ============================================
// ============================================

const TransactionManagementMain = () => {
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
      <O1_IntroTxMngmt anchor={o1_IntroTxMngmt}></O1_IntroTxMngmt>
      <O2_InMemoryVsDB anchor={o2_InMemoryVsDB}></O2_InMemoryVsDB>
      <O3_SaveFlushCommit anchor={o3_SaveFlushCommit}></O3_SaveFlushCommit>
      <O4_HibernateSession anchor={o4_HibernateSession}></O4_HibernateSession>
      <O5_TransactionMngmnt anchor={o5_TransactionMngmnt}></O5_TransactionMngmnt>
      <O6_WhatIsTransaction anchor={o6_WhatIsTransaction}></O6_WhatIsTransaction>
      <O7_TransactionalRepositoryMethods anchor={o7_TransactionalRepositoryMethods} />
      <O8_AtomicOperations anchor={o8_AtomicOperations}></O8_AtomicOperations>
      <O9_TransactionalWithException anchor={o9_TransactionalWithException}></O9_TransactionalWithException>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default TransactionManagementMain;
