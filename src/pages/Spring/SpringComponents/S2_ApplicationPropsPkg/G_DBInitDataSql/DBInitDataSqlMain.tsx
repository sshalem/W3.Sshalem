import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DBInitIntro from "./O1_DBInitIntro";
import O2_DBInitSchemaSql from "./O2_DBInitSchemaSql";
import O3_DBInitDataSql from "./O3_DBInitDataSql";
import O4_DBInitPlatform from "./O4_DBInitPlatform";
import O5_DBInitH2 from "./O5_DBInitH2";
import O6_DBInitMySql from "./O6_DBInitMySql";
import O7_DBInitPostgresql from "./O7_DBInitPostgresql";
import O8_DBInitMultipleProfiles from "./O8_DBInitMultipleProfiles";
import O9_DBInitGit from "./O9_DBInitGit";

// =============================================================================================================

const o1_DBInitIntro = "1. Data Sql intro";
const o2_DBInitSchemaSql = "2. Schema sql";
const o3_DBInitDataSql = "3. Data sql";
const o4_DBInitPlatform = "4. platform";
const o5_DBInitH2 = "5. H2 data sql";
const o6_DBInitMySql = "6. Mysql data sql";
const o7_DBInitPostgresql = "7. Postgres data sql";
const o8_DBInitMultipleProfiles = "8. Multiple profiles and data sql";
const o9_DBInitGit = "9. DB init git";

// =============================================================================================================

const anchorList: string[] = [
  o1_DBInitIntro,
  o2_DBInitSchemaSql,
  o3_DBInitDataSql,
  o4_DBInitPlatform,
  o5_DBInitH2,
  o6_DBInitMySql,
  o7_DBInitPostgresql,
  o8_DBInitMultipleProfiles,
  o9_DBInitGit,
];

// =============================================================================================================

const DBInitDataSqlMain = () => {
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
      <O1_DBInitIntro anchor={o1_DBInitIntro} />
      <O2_DBInitSchemaSql anchor={o2_DBInitSchemaSql} />
      <O3_DBInitDataSql anchor={o3_DBInitDataSql} />
      <O4_DBInitPlatform anchor={o4_DBInitPlatform}></O4_DBInitPlatform>
      <O5_DBInitH2 anchor={o5_DBInitH2}></O5_DBInitH2>
      <O6_DBInitMySql anchor={o6_DBInitMySql}></O6_DBInitMySql>
      <O7_DBInitPostgresql anchor={o7_DBInitPostgresql}></O7_DBInitPostgresql>
      <O8_DBInitMultipleProfiles anchor={o8_DBInitMultipleProfiles}></O8_DBInitMultipleProfiles>
      <O9_DBInitGit anchor={o9_DBInitGit}></O9_DBInitGit>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBInitDataSqlMain;
