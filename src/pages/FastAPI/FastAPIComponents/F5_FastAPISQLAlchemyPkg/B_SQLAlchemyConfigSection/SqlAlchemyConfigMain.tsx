import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_SpringVsSqlAlchemy from "./O1_SpringVsSqlAlchemy";
import O2_InstallSqlAlchemy from "./O2_InstallSqlAlchemy";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_SpringVsSqlAlchemy = "1. Spring Like Structure";
const o2_InstallSqlAlchemy = "2. Install SqlAlchemy";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_SpringVsSqlAlchemy, o2_InstallSqlAlchemy];

// ============================================
// ============================================

const SqlAlchemyConfigMain = () => {
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

      <O1_SpringVsSqlAlchemy anchor={o1_SpringVsSqlAlchemy} />
      <O2_InstallSqlAlchemy anchor={o2_InstallSqlAlchemy} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default SqlAlchemyConfigMain;
