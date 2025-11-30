import { useEffect, useRef, useState } from "react";
import O1_DBeaverVersion from "./O1_DBeaverVersion";
import O2_DBeaverMySqlSingleDB from "./O2_DBeaverMySqlSingleDB";
import O3_DBeaverMySqlAllDB from "./O3_DBeaverMySqlAllDB";
import O4_DBeaverMySqlOnLinode from "./O4_DBeaverMySqlOnLinode";
import O5_DBeaverPostgresqlSingleDB from "./O5_DBeaverPostgresqlSingleDB";
import O6_DBeaverPostgresqlAllDB from "./O6_DBeaverPostgresqlAllDB";
import O7_DBeaverGitHub from "./O7_DBeaverGitHub";
import { ContentMenu, Loading } from "../../../../../components";

// =============================================================================================================

const o1_DBeaverVersion = "1. DBeaver Version";
const o2_DBeaverMySqlSingleDB = "2. DBeaver Mysql";
const o3_DBeaverMySqlAllDB = "3. DBeaver MySql All DB";
const o4_DBeaverMySqlOnLinode = "4. DBeaver Mysql On Linode Server";
const o5_DBeaverPostgresqlSingleDB = "5. DBeaver Postgresql single DB";
const o6_DBeaverPostgresqlAllDB = "6. DBeaver Postgresql All DB";
const o7_DBeaverGitHub = "7. DBeaver git hub";

// =============================================================================================================

const anchorList: string[] = [
  o1_DBeaverVersion,
  o2_DBeaverMySqlSingleDB,
  o3_DBeaverMySqlAllDB,
  o4_DBeaverMySqlOnLinode,
  o5_DBeaverPostgresqlSingleDB,
  o6_DBeaverPostgresqlAllDB,
  o7_DBeaverGitHub,
];

// =============================================================================================================

const DBeaverMain = () => {
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

      <O1_DBeaverVersion anchor={o1_DBeaverVersion} />
      <O2_DBeaverMySqlSingleDB anchor={o2_DBeaverMySqlSingleDB} />
      <O3_DBeaverMySqlAllDB anchor={o3_DBeaverMySqlAllDB} />
      <O4_DBeaverMySqlOnLinode anchor={o4_DBeaverMySqlOnLinode} />
      <O5_DBeaverPostgresqlSingleDB anchor={o5_DBeaverPostgresqlSingleDB} />
      <O6_DBeaverPostgresqlAllDB anchor={o6_DBeaverPostgresqlAllDB} />
      <O7_DBeaverGitHub anchor={o7_DBeaverGitHub} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBeaverMain;
