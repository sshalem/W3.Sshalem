import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_CreateJarWar from "./O1_CreateJarWar";
import O2_DeploySpringJarOnLinux from "./O2_DeploySpringJarOnLinux";
import O3_DeployJarNginx from "./O3_DeployJarNginx";
import O4_DeployReactJsNginx from "./O4_DeployReactJsNginx";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CreateJarWar = "1. Create Jar/War";
const o2_DeploySpringJarOnLinux = "2. Deploy JAR/WAR on Linux";
const o3_DeployJarNginx = "3. Deploy JAR on Nginx";
const o4_DeployReactJsNginx = "4. Deploy ReactJs on Nginx";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_CreateJarWar, o2_DeploySpringJarOnLinux, o3_DeployJarNginx, o4_DeployReactJsNginx];

// ============================================
// ============================================

const DeployLinuxMain = () => {
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
      <O1_CreateJarWar anchor={o1_CreateJarWar} />
      <O2_DeploySpringJarOnLinux anchor={o2_DeploySpringJarOnLinux} />
      <O3_DeployJarNginx anchor={o3_DeployJarNginx} />
      <O4_DeployReactJsNginx anchor={o4_DeployReactJsNginx} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default DeployLinuxMain;
