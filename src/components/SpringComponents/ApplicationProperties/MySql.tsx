import { useEffect, useRef, useState } from "react";
import MysqlDialect from "./MySqlSections/MysqlDialect";
import MySqlOSIV from "./MySqlSections/MySqlOSIV";
import MysqlBasicConfig from "./MySqlSections/MysqlBasicConfig";
import MySqlDetailedConfig from "./MySqlSections/MySqlDetailedConfig";
import MySqlComprehansivePropertiesConfig from "./MySqlSections/MySqlComprehansivePropertiesConfig";
import ContentList from "../../ContentList";

// =============================================================================================================

const mysql_dialect = "mysql dialect";
const osiv = "osiv";
const mysql_basic_config = "mysql basic config";
const mysql_detailed_config = "mysql detailed config";
const mysql_comprehansive_properties_config = "mysql comprehansive properties config";

// =============================================================================================================

const anchorList: string[] = [mysql_dialect, osiv, mysql_basic_config, mysql_detailed_config, mysql_comprehansive_properties_config];

// =============================================================================================================

const MySql = () => {
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
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight + 16));
      setContentHeight(ulRef.current.scrollHeight + 16);
    }
  }, []);

  return (
    <section>
      {/* Start Contents */}
      <article className="content-sm content-md content-lg content-xl content-basic">
        <div className="mb-0 w-[100%] bg-gray-800 px-2 py-1 text-center capitalize">
          <span className="ml-2 text-sm font-semibold tracking-wider text-white">contents </span>
          <span className={`${showContent ? `text-red-400` : `text-teal-400`} cursor-pointer text-xs`} onClick={handleShowContent}>
            [{showContent ? " hide " : " show "}]
          </span>
        </div>

        <ContentList ulRef={ulRef} showContent={showContent} contentHeight={contentHeight} anchorList={anchorList}></ContentList>
      </article>
      {/* End Contents */}

      <MysqlDialect anchor={mysql_dialect} />
      <MySqlOSIV anchor={osiv} />
      <MysqlBasicConfig anchor={mysql_basic_config} />
      <MySqlDetailedConfig anchor={mysql_detailed_config} />
      <MySqlComprehansivePropertiesConfig anchor={mysql_comprehansive_properties_config} />

      {/* {this div is only for dividing} */}
      <div className="my-8 h-4" />
    </section>
  );
};

export default MySql;
