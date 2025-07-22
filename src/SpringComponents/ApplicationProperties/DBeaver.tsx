import { useEffect, useRef, useState } from "react";
import DBeaverMySql from "./DBeaverSections/DBeaverMySql";
import DBeaverMySqlOnLinode from "./DBeaverSections/DBeaverMySqlOnLinode";
import DBeaverPostgresql from "./DBeaverSections/DBeaverPostgresql";
import DBeaverVersion from "./DBeaverSections/DBeaverVersion";
import { ContentMenu } from "../../components";

// =============================================================================================================

const dbeaver_version = "DBeaver Version";
const dbeaver_mysql = "DBeaver With Mysql";
const dbeaver_mysql_on_linode = "DBeaver With Mysql On Linode Server";
const dbeaver_postgresql = "DBeaver With Postgresql";

// =============================================================================================================

const anchorList: string[] = [dbeaver_version, dbeaver_mysql, dbeaver_mysql_on_linode, dbeaver_postgresql];

// =============================================================================================================

const DBeaver = () => {
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
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight + 16));
      setContentHeight(ulRef.current.scrollHeight + 16);
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

      <DBeaverVersion anchor={dbeaver_version} />
      <DBeaverMySql anchor={dbeaver_mysql} />
      <DBeaverMySqlOnLinode anchor={dbeaver_mysql_on_linode} />
      <DBeaverPostgresql anchor={dbeaver_postgresql} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBeaver;
