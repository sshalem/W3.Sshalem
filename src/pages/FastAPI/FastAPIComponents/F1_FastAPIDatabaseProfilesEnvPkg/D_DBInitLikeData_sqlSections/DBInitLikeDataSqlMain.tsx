import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DBInitSQLAlchemyIntro from "./O1_DBInitSQLAlchemyIntro";
import O2_PostgresCreateDataSqlFile from "./O2_PostgresCreateDataSqlFile";
import O3_PostgresSetupDbConfig from "./O3_PostgresSetupDbConfig";
import O4_PostgresUserModelClass from "./O4_PostgresUserModelClass";
import O5_PostgresFastAPILifeSpan from "./O5_PostgresFastAPILifeSpan";
import O6_PostgresFastAPILifeSpanWrongWay from "./O6_PostgresFastAPILifeSpanWrongWay";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DBInitSQLAlchemyIntro = "1. DB Init (data.sql style)";
const o2_PostgresCreateDataSqlFile = "2. (Postgres) Create data.sql";
const o3_PostgresSetupDbConfig = "3. (Postgres) setup db.py";
const o4_PostgresUserModelClass = "4. (Postgres) Create User Model Class";
const o5_PostgresFastAPILifeSpan = "5. (Postgres) Load in FastAPI using lifespan";
const o6_PostgresFastAPILifeSpanWrongWay = "6. (Postgres) Load in FastAPI Wrong Way";
// const o2_DBInitDataSqlPostgres = "2. DB Init Postgres";
// const o2_DBInitDataSqlPostgres = "2. DB Init Postgres";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_DBInitSQLAlchemyIntro,
  o2_PostgresCreateDataSqlFile,
  o3_PostgresSetupDbConfig,
  o4_PostgresUserModelClass,
  o5_PostgresFastAPILifeSpan,
  o6_PostgresFastAPILifeSpanWrongWay,
];

// ============================================
// ============================================

const DBInitLikeDataSqlMain = () => {
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

      <O1_DBInitSQLAlchemyIntro anchor={o1_DBInitSQLAlchemyIntro} />
      <O2_PostgresCreateDataSqlFile anchor={o2_PostgresCreateDataSqlFile} />
      <O3_PostgresSetupDbConfig anchor={o3_PostgresSetupDbConfig} />
      <O4_PostgresUserModelClass anchor={o4_PostgresUserModelClass} />
      <O5_PostgresFastAPILifeSpan anchor={o5_PostgresFastAPILifeSpan} />
      <O6_PostgresFastAPILifeSpanWrongWay anchor={o6_PostgresFastAPILifeSpanWrongWay} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBInitLikeDataSqlMain;
