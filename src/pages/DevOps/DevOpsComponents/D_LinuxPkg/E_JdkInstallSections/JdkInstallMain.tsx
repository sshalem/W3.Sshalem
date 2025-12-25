import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_JdkInstall from "./O1_JdkInstall";
import O2_JdkRemove from "./O2_JdkRemove";
import O3_Jdk21Install from "./O3_Jdk21Install";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_jdk_install = "1. JDK 17 Install";
const o2_JdkRemove = "2. JDK Remove";
const o3_Jdk21Install = "3. JDK 21 Install";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_jdk_install, o2_JdkRemove, o3_Jdk21Install];

// ============================================
// ============================================

const JdkInstallMain = () => {
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
      <O1_JdkInstall anchor={o1_jdk_install}></O1_JdkInstall>
      <O2_JdkRemove anchor={o2_JdkRemove} />
      <O3_Jdk21Install anchor={o3_Jdk21Install} />
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default JdkInstallMain;
