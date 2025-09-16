import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_InitialServerSetup from "./O1_InitialServerSetup";
import O2_DateTimeZoneModification from "./O2_DateTimeZoneModification";
import O3_ConfigAccount from "./O3_ConfigAccount";
import O4_FirewallConfig from "./O4_FirewallConfig";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const Initial_Server_Setup = "01_Initial_Server_Setup";
const Date_Time_Zone = `02_Date_Time_Zone`;
const Config_account = `03_Config_account`;
const Firewall_Config = `04_Firewall_Config`;
const JdkInstall = `O5_JDK_Install`;

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [Initial_Server_Setup, Date_Time_Zone, Config_account, Firewall_Config, JdkInstall];

// ============================================
// ============================================

const SetupServerMain = () => {
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
      <O1_InitialServerSetup anchor={Initial_Server_Setup}></O1_InitialServerSetup>
      <O2_DateTimeZoneModification anchor={Date_Time_Zone}></O2_DateTimeZoneModification>
      <O3_ConfigAccount anchor={Config_account}></O3_ConfigAccount>
      <O4_FirewallConfig anchor={Firewall_Config}></O4_FirewallConfig>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default SetupServerMain;
