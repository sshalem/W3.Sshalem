import { useEffect, useRef, useState } from "react";
import DBeaverMySql from "./DBeaverMySql";
import DBeaverMySqlOnLinode from "./DBeaverMySqlOnLinode";
import DBeaverPostgresql from "./DBeaverPostgresql";
import DBeaverVersion from "./DBeaverVersion";
import { ContentMenu, Loading } from "../../../components";
import DBeaverGitHub from "./DBeaverGitHub";

// =============================================================================================================

const dbeaver_version = "DBeaver Version";
const dbeaver_mysql = "DBeaver With Mysql";
const dbeaver_mysql_on_linode = "DBeaver With Mysql On Linode Server";
const dbeaver_postgresql = "DBeaver With Postgresql";
const dbeaver_git_hub = "DBeaver git hub";

// =============================================================================================================

const anchorList: string[] = [dbeaver_version, dbeaver_mysql, dbeaver_mysql_on_linode, dbeaver_postgresql, dbeaver_git_hub];

// =============================================================================================================

const DBeaver = () => {
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

  // Why I have 2 useEffect functions?
  // 1. useEffect with setTimeout
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

      <DBeaverVersion anchor={dbeaver_version} />
      <DBeaverMySql anchor={dbeaver_mysql} />
      <DBeaverMySqlOnLinode anchor={dbeaver_mysql_on_linode} />
      <DBeaverPostgresql anchor={dbeaver_postgresql} />
      <DBeaverGitHub anchor={dbeaver_git_hub} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBeaver;
