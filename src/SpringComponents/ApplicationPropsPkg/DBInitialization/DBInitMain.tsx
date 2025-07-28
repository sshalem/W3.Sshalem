import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../components";
import DBInitIntro from "./DBInitIntro";
import DBSchemaSql from "./DBInitSchemaSql";
import DBDataSql from "./DBInitDataSql";
import DBInitPlatform from "./DBInitPlatform";

// =============================================================================================================

const db_init_intro = "DB init intro";
const db_schema_sql = "DB schema sql";
const db_data_sql = "DB data sql";
const db_init_platform = "DB platform";

// =============================================================================================================

const anchorList: string[] = [db_init_intro, db_schema_sql, db_data_sql, db_init_platform];

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

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBInitMain;
