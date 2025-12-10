import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroJpql from "./O1_IntroJpql";
import O2_JpqlNameVsPositionParam from "./O2_JpqlNameVsPositionParam";
import O3_QuerySingleEntityTable from "./O3_QuerySingleEntityTable";
import O4_QueryJoinedEntityTable from "./O4_QueryJoinedEntityTable";
import O5_QueryJoinFetchDistinct from "./O5_QueryJoinFetchDistinct";
import O6_QueryDates from "./O6_QueryDates";
import O7_QueryReturnEntityFields from "./O7_QueryReturnEntityFields";
import O8_DeleteQuery from "./O8_DeleteQuery";
import O0_SpringDataRepositoryMethods from "./O0_SpringDataRepositoryMethods";
import O9_DeleteQueryDataRepositoryMethod from "./O9_DeleteQueryDataRepositoryMethod";
import O10_DeleteQueryDerivedMethod from "./O10_DeleteQueryDerivedMethod";
import O11_DeleteQueryJPQLMethod from "./O11_DeleteQueryJPQLMethod";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_SpringDataRepositoryMethods = `Spring Data Repository M ethods`;
const o1_IntroJpql = "1. Intro";
const o2_JpqlNameVsPositionParam = "2. Name Params Vs Position Param";
const o3_QuerySingleEntityTable = "3. Query Single Entity/Table";
const o4_QueryJoinedEntityTable = "4. Query Joined Entity/Table";
const o5_QueryJoinFetchDistinct = "5. JOIN FETCH (Distinct)";
const o6_QueryDates = "6. Query Dates";
const o7_QueryReturnEntityFields = "7. Return Specific Entity Fields";
const o8_DeleteQuery = "8. Delete Query";
const o9_DeleteQueryDataRepositoryMethod = "9. Delete Query Repository Method";
const o10_DeleteQueryDerivedMethod = "10. Delete Query Derived Method";
const o11_DeleteQueryJPQLMethod = "11.Delete Query JPQL Method";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o0_SpringDataRepositoryMethods,
  o1_IntroJpql,
  o2_JpqlNameVsPositionParam,
  o3_QuerySingleEntityTable,
  o4_QueryJoinedEntityTable,
  o5_QueryJoinFetchDistinct,
  o6_QueryDates,
  o7_QueryReturnEntityFields,
  o8_DeleteQuery,
  o9_DeleteQueryDataRepositoryMethod,
  o10_DeleteQueryDerivedMethod,
  o11_DeleteQueryJPQLMethod,
];

// ============================================
// ============================================

const JpqlMain = () => {
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

      <O0_SpringDataRepositoryMethods anchor={o0_SpringDataRepositoryMethods}></O0_SpringDataRepositoryMethods>
      <O1_IntroJpql anchor={o1_IntroJpql}></O1_IntroJpql>
      <O2_JpqlNameVsPositionParam anchor={o2_JpqlNameVsPositionParam}></O2_JpqlNameVsPositionParam>
      <O3_QuerySingleEntityTable anchor={o3_QuerySingleEntityTable}></O3_QuerySingleEntityTable>
      <O4_QueryJoinedEntityTable anchor={o4_QueryJoinedEntityTable}></O4_QueryJoinedEntityTable>
      <O5_QueryJoinFetchDistinct anchor={o5_QueryJoinFetchDistinct}></O5_QueryJoinFetchDistinct>
      <O6_QueryDates anchor={o6_QueryDates}></O6_QueryDates>
      <O7_QueryReturnEntityFields anchor={o7_QueryReturnEntityFields}></O7_QueryReturnEntityFields>
      <O8_DeleteQuery anchor={o8_DeleteQuery} />
      <O9_DeleteQueryDataRepositoryMethod anchor={o9_DeleteQueryDataRepositoryMethod} />
      <O10_DeleteQueryDerivedMethod anchor={o10_DeleteQueryDerivedMethod} />
      <O11_DeleteQueryJPQLMethod anchor={o11_DeleteQueryJPQLMethod} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JpqlMain;
