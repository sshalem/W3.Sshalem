import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../components";
import Slf4jLinks from "./Slf4jLinks";
import Slf4jRollingFileSetup from "./Slf4jRollingFileSetup";
import Slf4jGitHub from "./Slf4jGitHub";
import Slf4jUtil from "./Slf4jUtil";
import Slf4jReProduceLogbackPattern from "./Slf4jReProduceLogbackPattern";

// =============================================================================================================

const slf4j_links = "slf4j links";
const slf4j_rolling_file_setup = "slf4j rolling file setup";
const slf4j_git_hub = "slf4j git hub";
const slf4j_util = "slf4j (Logback) util";
const slf4j_produce_logback_pattern = "slf4j produce logback pattern";

// =============================================================================================================

const anchorList: string[] = [slf4j_links, slf4j_util, slf4j_produce_logback_pattern, slf4j_rolling_file_setup, slf4j_git_hub];

// =============================================================================================================

const Slf4JLogbackMain = () => {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}
      <Slf4jLinks anchor={slf4j_links} />
      <Slf4jUtil anchor={slf4j_util} />
      <Slf4jReProduceLogbackPattern anchor={slf4j_produce_logback_pattern} />
      <Slf4jRollingFileSetup anchor={slf4j_rolling_file_setup} />
      <Slf4jGitHub anchor={slf4j_git_hub} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Slf4JLogbackMain;
