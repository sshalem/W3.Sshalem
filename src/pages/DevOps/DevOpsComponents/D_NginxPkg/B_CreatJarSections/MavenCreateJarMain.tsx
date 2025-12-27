import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";

import O1_Maven from "./O1_Maven";
import O2_BuildJar from "./O2_BuildJar";
import O3_CustomJarName from "./O3_CustomJarName";
import O4_CustomJarViaTerminal from "./O4_CustomJarViaTerminal";
import O5_RunMavenViaGUI from "./O5_RunMavenViaGUI";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_Maven = "1. Maven";
const o2_BuildJar = "2. Build JAR file";
const o3_CustomJarName = "3. Custom JAR name";
const o4_CustomJarViaTerminal = "4. Custom Jar via Terminal";
const o5_RunMavenViaGUI = "5. Run Maven Via GUI";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_Maven, o2_BuildJar, o3_CustomJarName, o4_CustomJarViaTerminal, o5_RunMavenViaGUI];

// ============================================
// ============================================

const MavenCreateJarMain = () => {
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
      <O1_Maven anchor={o1_Maven} />
      <O2_BuildJar anchor={o2_BuildJar} />
      <O3_CustomJarName anchor={o3_CustomJarName} />
      <O4_CustomJarViaTerminal anchor={o4_CustomJarViaTerminal} />
      <O5_RunMavenViaGUI anchor={o5_RunMavenViaGUI} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default MavenCreateJarMain;
