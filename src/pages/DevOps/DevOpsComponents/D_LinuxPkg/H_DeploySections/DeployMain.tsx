import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_DeploySpringJar from "./O1_DeploySpringJar";
import O2_JdkRemove from "./O2_DeploySpringNginx";
import O3_Jdk21Install from "./O3_DeployReactJsNginx";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_DeploySpringJar = "1. Deploy Spring Jar file";
const o2_JdkRemove = "2. Deploy Spring on NGINX";
const o3_Jdk21Install = "3. Deploy React on NGINX";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_DeploySpringJar, o2_JdkRemove, o3_Jdk21Install];

// ============================================
// ============================================

const DeployMain = () => {
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
      <O1_DeploySpringJar anchor={o1_DeploySpringJar} />
      <O2_JdkRemove anchor={o2_JdkRemove} />
      <O3_Jdk21Install anchor={o3_Jdk21Install} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default DeployMain;
