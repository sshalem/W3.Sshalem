import { useEffect, useRef, useState } from "react";
import { ContentMenu } from "../../../../../components";
import O1_InstallTomcat from "./O1_InstallTomcat";
import O2_ConfigUsers from "./O2_ConfigUsers";
import O3_ModifyPort from "./O3_ModifyPort";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const O1_tomcat_install = "O1_Install_tomcat_on_linux";
const O2_config_users = "O2_config_users";
const O3_modify_port = "O3_modify_port";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [O1_tomcat_install, O2_config_users, O3_modify_port];

// ============================================
// ============================================

const TomcatInstallMain = () => {
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
      <O1_InstallTomcat anchor={O1_tomcat_install}></O1_InstallTomcat>
      <O2_ConfigUsers anchor={O2_config_users}></O2_ConfigUsers>
      <O3_ModifyPort anchor={O3_modify_port}></O3_ModifyPort>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default TomcatInstallMain;
