import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_DifferenceArchitecture from "./O1_DifferenceArchitecture";
import O2_JarBehindNginx from "./O2_JarBehindNginx";
import O3_DeployJarNginx from "./O3_DeployJarNginx";
import OX_Systemd from "./OX_Systemd";
import O4_BuildJarLocaly from "./O4_BuildJarLocaly";
import O5_ConnectToLinodeServer from "./O5_ConnectToLinodeServer";
import O6_CreateDedicatedFolder from "./O6_CreateDedicatedFolder";
import O7_UploadJarToLinux from "./O7_UploadJarToLinux";
import O8_VerifyJarCanRunLocaly from "./O8_VerifyJarCanRunLocaly";
import O9_CreateSystemdServiceFile from "./O9_CreateSystemdServiceFile";
import O10_ConfigNginxReverseProxy from "./O10_ConfigNginxReverseProxy";
import O11_TestAppViaNginx from "./O11_TestAppViaNginx";
import O12_SecureTheSetup from "./O12_SecureTheSetup";
import O13_EnableHttps from "./O13_EnableHttps";
import O14_FirewallCheck from "./O14_FirewallCheck";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DifferenceArchitecture = "Two Different Architectures";
const o2_JarBehindNginx = "JAR Behind Nginx";
const o3_DeployJarNginx = "Deploy Jar on Nginx";
const o4_BuildJarLocaly = "1. Build Jar Localy";
const o5_ConnectToLinodeServer = "2. Connect to Linode Server";
const o6_CreateDedicatedFolder = "3. Create Dedicated Folder";
const o7_UploadJarToLinux = "4. Upload Jar To Linux";
const o8_VerifyJarCanRunLocaly = "5. Verify Jar Can Run Localy";
const o9_CreateSystemdServiceFile = "6. Create systemd service file";
const o10_ConfigNginxReverseProxy = "7. Config NGINX Reverse Proxy";
const o11_TestAppViaNginx = "8. Test App Via Nginx";
const o12_SecureTheSetup = "9. Secure The Setup (Important)";
const o13_EnableHttps = "10. Enable HTTPS (production-critical)";
const o14_FirewallCheck = "11. Firewall Check";
const oX_Systemd = "X. Systemd service (explanied)";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_DifferenceArchitecture,
  o2_JarBehindNginx,
  o3_DeployJarNginx,
  o4_BuildJarLocaly,
  o5_ConnectToLinodeServer,
  o6_CreateDedicatedFolder,
  o7_UploadJarToLinux,
  o8_VerifyJarCanRunLocaly,
  o9_CreateSystemdServiceFile,
  o10_ConfigNginxReverseProxy,
  o11_TestAppViaNginx,
  o12_SecureTheSetup,
  o13_EnableHttps,
  o14_FirewallCheck,
  oX_Systemd,
];

// ============================================
// ============================================

const DeployJarNginxMain = () => {
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
      <O1_DifferenceArchitecture anchor={o1_DifferenceArchitecture} />
      <O2_JarBehindNginx anchor={o2_JarBehindNginx} />
      <O3_DeployJarNginx anchor={o3_DeployJarNginx} />
      <O4_BuildJarLocaly anchor={o4_BuildJarLocaly} />
      <O5_ConnectToLinodeServer anchor={o5_ConnectToLinodeServer} />
      <O6_CreateDedicatedFolder anchor={o6_CreateDedicatedFolder} />
      <O7_UploadJarToLinux anchor={o7_UploadJarToLinux} />
      <O8_VerifyJarCanRunLocaly anchor={o8_VerifyJarCanRunLocaly} />
      <O9_CreateSystemdServiceFile anchor={o9_CreateSystemdServiceFile} />
      <O10_ConfigNginxReverseProxy anchor={o10_ConfigNginxReverseProxy} />
      <O11_TestAppViaNginx anchor={o11_TestAppViaNginx} />
      <O12_SecureTheSetup anchor={o12_SecureTheSetup} />
      <O13_EnableHttps anchor={o13_EnableHttps} />
      <O14_FirewallCheck anchor={o14_FirewallCheck} />
      <OX_Systemd anchor={oX_Systemd} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default DeployJarNginxMain;
