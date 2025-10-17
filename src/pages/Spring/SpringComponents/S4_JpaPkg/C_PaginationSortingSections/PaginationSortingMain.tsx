import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroPaginSort from "./O1_IntroPaginSort";
import O2_PaginationUtilize from "./O2_PaginationUtilize";
import O3_PagableCountQuery from "./O3_PagableCountQuery";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroPaginSort = "1. Intro Pagniation";
const o2_PaginationUtilize = "2. Pagination utilize";
const o3_PagableCountQuery = "3. Pagable countQuery";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroPaginSort, o2_PaginationUtilize, o3_PagableCountQuery];

// ============================================
// ============================================

const PaginationSortingMain = () => {
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

      <O1_IntroPaginSort anchor={o1_IntroPaginSort}></O1_IntroPaginSort>
      <O2_PaginationUtilize anchor={o2_PaginationUtilize}></O2_PaginationUtilize>
      <O3_PagableCountQuery anchor={o3_PagableCountQuery}></O3_PagableCountQuery>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PaginationSortingMain;
