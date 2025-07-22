import { useEffect, useRef, useState } from "react";
import DBeaverMySql from "./DBeaverSections/DBeaverMySql";
import DBeaverMySqlOnLinode from "./DBeaverSections/DBeaverMySqlOnLinode";
import DBeaverPostgresql from "./DBeaverSections/DBeaverPostgresql";
import DBeaverVersion from "./DBeaverSections/DBeaverVersion";
import ContentList from "../../ContentList";

// =============================================================================================================

const dbeaver_version = "dbeaver version";
const dbeaver_mysql = "dbeaver with mysql";
const dbeaver_mysql_on_linode = "dbeaver with mysql on linode server";
const dbeaver_postgresql = "dbeaver with postgresql";

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

      <DBeaverVersion anchor={dbeaver_version} />
      <DBeaverMySql anchor={dbeaver_mysql} />
      <DBeaverMySqlOnLinode anchor={dbeaver_mysql_on_linode} />
      <DBeaverPostgresql anchor={dbeaver_postgresql} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBeaver;
