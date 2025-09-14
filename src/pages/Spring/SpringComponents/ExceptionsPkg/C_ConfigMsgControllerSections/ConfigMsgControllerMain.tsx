import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroConfigMsgController from "./O1_IntroConfigMsgController";
import O2_CodeMsgController from "./O2_CodeMsgController";
import O3_TestConfigMsgController from "./O3_TestConfigMsgController";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroConfigMsgController = "1. Intro";
const o2_CodeMsgController = "2. Code snippet";
const o3_TestConfigMsgController = "3. Test";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroConfigMsgController, o2_CodeMsgController, o3_TestConfigMsgController];

// ============================================
// ============================================

const ConfigMsgControllerMain = () => {
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

      <O1_IntroConfigMsgController anchor={o1_IntroConfigMsgController}></O1_IntroConfigMsgController>
      <O2_CodeMsgController anchor={o2_CodeMsgController}></O2_CodeMsgController>
      <O3_TestConfigMsgController anchor={o3_TestConfigMsgController}></O3_TestConfigMsgController>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ConfigMsgControllerMain;
