import { useEffect, useRef, useState } from "react";
import MysqlDialect from "./MysqlDialect";
import MySqlOSIV from "./MySqlOSIV";
import MysqlBasicConfig from "./MysqlBasicConfig";
import MySqlDetailedConfig from "./MySqlDetailedConfig";
import MySqlComprehansivePropertiesConfig from "./MySqlComprehansivePropertiesConfig";
import { ContentMenu } from "../../../../../components";
import MySqlGitHub from "./MySqlGitHub";

// =============================================================================================================

const mysql_dialect = "Mysql Dialect";
const osiv = "Osiv";
const mysql_basic_config = "Mysql Basic";
const mysql_detailed_config = "Mysql Detailed";
const mysql_comprehansive_properties_config = "Mysql Comprehansive Properties";
const mysql_github = `Mysql git hub`;

// =============================================================================================================

const anchorList: string[] = [mysql_dialect, osiv, mysql_basic_config, mysql_detailed_config, mysql_comprehansive_properties_config, mysql_github];

// =============================================================================================================

const MySqlMain = () => {
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
      // console.log(ulRef.current.scrollHeight);
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

      <MysqlDialect anchor={mysql_dialect} />
      <MySqlOSIV anchor={osiv} />
      <MysqlBasicConfig anchor={mysql_basic_config} />
      <MySqlDetailedConfig anchor={mysql_detailed_config} />
      <MySqlComprehansivePropertiesConfig anchor={mysql_comprehansive_properties_config} />
      <MySqlGitHub anchor={mysql_github} />
      {/* {this div is only for dividing} */}
      <div className="my-8 h-4" />
    </section>
  );
};

export default MySqlMain;
