import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_InstallTomcat from "./O1_InstallTomcat";
import O2_ConfigUsers from "./O2_ConfigUsers";
import O3_ConfigTomcatService from "./O3_ConfigTomcatService";
import O4_StartTomcat from "./O4_StartTomcat";
import O5_BrowseTomcat from "./O5_BrowseTomcat";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const O1_tomcat_install = "O1_Install_tomcat_on_linux";
const O2_config_users = "O2_config_users";
const O3_config_tomcat_service = "O3_config_tomcat_service";
const O4_start_tomcat = `O4_start_tomcat`;
const O5_browse_tomcat = `O5_browse_tomcat`;

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [O1_tomcat_install, O2_config_users, O3_config_tomcat_service, O4_start_tomcat, O5_browse_tomcat];

// ============================================
// ============================================

const TomcatInstallMain = () => {
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
      <O1_InstallTomcat anchor={O1_tomcat_install}></O1_InstallTomcat>
      <O2_ConfigUsers anchor={O2_config_users}></O2_ConfigUsers>
      <O3_ConfigTomcatService anchor={O3_config_tomcat_service}></O3_ConfigTomcatService>
      <O4_StartTomcat anchor={O4_start_tomcat}></O4_StartTomcat>
      <O5_BrowseTomcat anchor={O5_browse_tomcat}></O5_BrowseTomcat>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default TomcatInstallMain;
