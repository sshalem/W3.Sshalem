import { useEffect, useRef, useState } from "react";
import InstallPostgresStandalone from "./InstallPostgresStandalone";
import PostgresqlOsiv from "./PostgresqlOsiv";
import PostgresqlDetailedConfig from "./PostgresqlDetailedConfig";
import { ContentMenu } from "../../../components";

// =============================================================================================================

const postgresql_detailed_config = "Postgresql Detailed Config";
const osiv = "Osiv";
const install_postgresql_standalone_on_windows = "Install Postgresql Standalone On Windows";

// =============================================================================================================

const anchorList: string[] = [postgresql_detailed_config, osiv, install_postgresql_standalone_on_windows];

// =============================================================================================================

const PostgresqlMain = () => {
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

      <PostgresqlDetailedConfig anchor={postgresql_detailed_config} />
      <PostgresqlOsiv anchor={osiv} />
      <InstallPostgresStandalone anchor={install_postgresql_standalone_on_windows} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PostgresqlMain;
