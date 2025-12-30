import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_DifferenceArchitecture from "./O1_DifferenceArchitecture";
import O2_JarBehindNginx from "./O2_JarBehindNginx";
import O3_DeployJarNginx from "./O3_DeployJarNginx";
import O4_Systemd from "./O4_Systemd";
import O5_ConfigSystemdJournalctl from "./O5_ConfigSystemdJournalctl";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DifferenceArchitecture = "1. two Different Architectures";
const o2_JarBehindNginx = "2. JAR Behind Nginx";
const o3_DeployJarNginx = "3. Deploy Jar on Nginx";
const o4_Systemd = "4. What is Systemd service";
const o5_ConfigSystemdJournalctl = "5. Config systemd service with journalctl";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_DifferenceArchitecture, o2_JarBehindNginx, o3_DeployJarNginx, o4_Systemd, o5_ConfigSystemdJournalctl];

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
      <O4_Systemd anchor={o4_Systemd} />
      <O5_ConfigSystemdJournalctl anchor={o5_ConfigSystemdJournalctl} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default DeployJarNginxMain;
