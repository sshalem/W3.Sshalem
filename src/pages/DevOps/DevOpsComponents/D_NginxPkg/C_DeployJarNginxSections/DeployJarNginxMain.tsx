import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_DifferenceArchitecture from "./O1_DifferenceArchitecture";
import O2_DeployJarLinux from "./O2_DeployJarLinux";
import O3_DeployJarNginx from "./O3_DeployJarNginx";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DifferenceArchitecture = "1. two Different Architectures";
const o2_DeployJarLinux = "2. Deploy Jar on Linux";
const o3_DeployJarNginx = "3. Deploy Jar on Nginx";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_DifferenceArchitecture, o2_DeployJarLinux, o3_DeployJarNginx];

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
      <O2_DeployJarLinux anchor={o2_DeployJarLinux} />
      <O3_DeployJarNginx anchor={o3_DeployJarNginx} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default DeployJarNginxMain;
