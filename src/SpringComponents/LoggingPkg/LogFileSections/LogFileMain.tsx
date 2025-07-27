import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../components";
import LogFileIntro from "./LogFileIntro";
import LogFileLinux from "./LogFileLinux";
import LogFileDevWindows from "./LogFileDevWindows";

// =============================================================================================================

const log_file_intro = "log file intro";
const log_file_linux = "log file linux";
const log_file_dev_windows = "log file dev windows";

// =============================================================================================================

const anchorList: string[] = [log_file_intro, log_file_dev_windows, log_file_linux];

// =============================================================================================================

const LogFileMain = () => {
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

  // // Why I have 2 useEffect functions?
  // // 1. useEffect with setTimeout
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
      <LogFileIntro anchor={log_file_intro} />
      <LogFileDevWindows anchor={log_file_dev_windows} />
      <LogFileLinux anchor={log_file_linux} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default LogFileMain;
