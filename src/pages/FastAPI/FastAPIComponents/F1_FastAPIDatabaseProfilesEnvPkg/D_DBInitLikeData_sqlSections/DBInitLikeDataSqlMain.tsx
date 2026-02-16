import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DBInitSQLAlchemyIntro from "./O1_DBInitSQLAlchemyIntro";
import O2_DBInitDataSqlPostgres from "./O2_DBInitDataSqlPostgres";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DBInitSQLAlchemyIntro = "1. DB Init (data.sql style)";
const o2_DBInitDataSqlPostgres = "2. DB Init Postgres";
// const o2_DBInitDataSqlPostgres = "2. DB Init Postgres";
// const o2_DBInitDataSqlPostgres = "2. DB Init Postgres";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_DBInitSQLAlchemyIntro, o2_DBInitDataSqlPostgres];

// ============================================
// ============================================

const DBInitLikeDataSqlMain = () => {
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

      <O1_DBInitSQLAlchemyIntro anchor={o1_DBInitSQLAlchemyIntro} />
      <O2_DBInitDataSqlPostgres anchor={o2_DBInitDataSqlPostgres} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBInitLikeDataSqlMain;
