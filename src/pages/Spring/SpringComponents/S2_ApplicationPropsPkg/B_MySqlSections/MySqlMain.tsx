import { useEffect, useRef, useState } from "react";
import O1_MysqlDialect from "./O1_MysqlDialect";
import O2_MySqlOSIV from "./O2_MySqlOSIV";
import O3_MysqlBasicConfig from "./O3_MysqlBasicConfig";
import O4_MySqlDetailedConfig from "./O4_MySqlDetailedConfig";
import O5_MySqlComprehansivePropertiesConfig from "./O5_MySqlComprehansivePropertiesConfig";
import O6_MySqlGitHub from "./O6_MySqlGitHub";
import { ContentMenu, Loading } from "../../../../../components";

// =============================================================================================================

const o1_mysql_dialect = "1. Mysql Dialect";
const o2_osiv = "2. Osiv";
const o3_mysql_basic_config = "3. Mysql Basic";
const o4_mysql_detailed_config = "4. Mysql Detailed";
const o5_mysql_comprehansive_properties_config = "5. Mysql Comprehansive Properties";
const o6_mysql_github = "6. Mysql git hub";

// =============================================================================================================

const anchorList: string[] = [
  o1_mysql_dialect,
  o2_osiv,
  o3_mysql_basic_config,
  o4_mysql_detailed_config,
  o5_mysql_comprehansive_properties_config,
  o6_mysql_github,
];

// =============================================================================================================

const MySqlMain = () => {
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

      <O1_MysqlDialect anchor={o1_mysql_dialect} />
      <O2_MySqlOSIV anchor={o2_osiv} />
      <O3_MysqlBasicConfig anchor={o3_mysql_basic_config} />
      <O4_MySqlDetailedConfig anchor={o4_mysql_detailed_config} />
      <O5_MySqlComprehansivePropertiesConfig anchor={o5_mysql_comprehansive_properties_config} />
      <O6_MySqlGitHub anchor={o6_mysql_github} />
      {/* {this div is only for dividing} */}
      <div className="my-8 h-4" />
    </section>
  );
};

export default MySqlMain;
