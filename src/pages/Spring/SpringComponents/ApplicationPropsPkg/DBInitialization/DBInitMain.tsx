import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import DBInitIntro from "./DBInitIntro";
import DBSchemaSql from "./DBInitSchemaSql";
import DBDataSql from "./DBInitDataSql";
import DBInitPlatform from "./DBInitPlatform";
import DBInitH2 from "./DBInitH2";
import DBInitMySql from "./DBInitMySql";
import DBInitPostgresql from "./DBInitPostgresql";
import DBInitMultipleProfiles from "./DBInitMultipleProfiles";
import DBInitGit from "./DBInitGit";

// =============================================================================================================

const db_init_intro = "DB init intro";
const db_schema_sql = "DB schema sql";
const db_data_sql = "DB data sql";
const db_init_platform = "DB platform";
const db_h2_data_sql = "DB H2 data sql";
const db_mysql_data_sql = "DB mysql data sql";
const db_postgres_data_sql = "DB postgres data sql";
const db_multiple_profiles_and_data_sql = "DB multiple profiles and data sql";
const db_init_git = "DB init git";

// =============================================================================================================

const anchorList: string[] = [
  db_init_intro,
  db_schema_sql,
  db_data_sql,
  db_init_platform,
  db_h2_data_sql,
  db_mysql_data_sql,
  db_postgres_data_sql,
  db_multiple_profiles_and_data_sql,
  db_init_git,
];

// =============================================================================================================

const DBInitMain = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();

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
  }, []);

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
      <DBInitIntro anchor={db_init_intro} />
      <DBSchemaSql anchor={db_schema_sql} />
      <DBDataSql anchor={db_data_sql} />
      <DBInitPlatform anchor={db_init_platform}></DBInitPlatform>
      <DBInitH2 anchor={db_h2_data_sql}></DBInitH2>
      <DBInitMySql anchor={db_mysql_data_sql}></DBInitMySql>
      <DBInitPostgresql anchor={db_postgres_data_sql}></DBInitPostgresql>
      <DBInitMultipleProfiles anchor={db_multiple_profiles_and_data_sql}></DBInitMultipleProfiles>
      <DBInitGit anchor={db_init_git}></DBInitGit>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBInitMain;
