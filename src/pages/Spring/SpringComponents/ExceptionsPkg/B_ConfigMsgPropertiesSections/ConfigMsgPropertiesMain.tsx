import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroConfigMsgProps from "./O1_IntroConfigMsgProps";
import O3_TestConfigMsgProps from "./O3_TestConfigMsgProps";
import O2_CodeMsgProperties from "./O2_CodeMsgProperties";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroConfigMsgProps = "1. Intro Config Msg Props";
const o2_CodeMsgProperties = "2. Code snippet";
const o3_TestConfigMsgProps = "3. Test Config Msg Props";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroConfigMsgProps, o2_CodeMsgProperties, o3_TestConfigMsgProps];

// ============================================
// ============================================

const ConfigMsgPropertiesMain = () => {
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
      <O1_IntroConfigMsgProps anchor={o1_IntroConfigMsgProps}></O1_IntroConfigMsgProps>
      <O2_CodeMsgProperties anchor={o2_CodeMsgProperties}></O2_CodeMsgProperties>
      <O3_TestConfigMsgProps anchor={o3_TestConfigMsgProps}></O3_TestConfigMsgProps>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ConfigMsgPropertiesMain;
