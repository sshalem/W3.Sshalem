import { useEffect, useRef, useState } from "react";

import O1_Value from "./O1_Value";
import { ContentMenu, Loading } from "../../../../../components";
import O2_Environment from "./O2_Environment";
import O3_ConfigurationProperties from "./O3_ConfigurationProperties";

// =============================================================================================================

const o1_Value = "1. Value";
const o2_Environment = "2. Environment";
const o3_ConfigurationProperties = "3. Configuration Properties";

// =============================================================================================================

const anchorList: string[] = [o1_Value, o2_Environment, o3_ConfigurationProperties];

// =============================================================================================================

const ReadFromPropertiesMain = () => {
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

      <O1_Value anchor={o1_Value} />
      <O2_Environment anchor={o2_Environment} />
      <O3_ConfigurationProperties anchor={o3_ConfigurationProperties} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ReadFromPropertiesMain;
