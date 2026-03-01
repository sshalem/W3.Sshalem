/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroArchitecture from "./O1_IntroArchitecture";
import O2_SpringBoot2Architecture from "./O2_SpringBoot2Architecture";
import O3_BuildPhaseBoot2 from "./O3_BuildPhaseBoot2";

// =============================================================================================================

const o1_IntroArchitecture = "1. Intro Architecture";
const o2_SpringBoot2Architecture = "2. Architecture 2.7.18 (Old Netflix stack)";
const o3_BuildPhaseBoot2 = "3. Build Phases structure";

// =============================================================================================================

const anchorList: string[] = [o1_IntroArchitecture, o2_SpringBoot2Architecture, o3_BuildPhaseBoot2];

// =============================================================================================================

const ArchitectureOptionsMain = () => {
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

      <O1_IntroArchitecture anchor={o1_IntroArchitecture} />
      <O2_SpringBoot2Architecture anchor={o2_SpringBoot2Architecture} />
      <O3_BuildPhaseBoot2 anchor={o3_BuildPhaseBoot2} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default ArchitectureOptionsMain;
