import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_CommLineRunnerIntro from "./O1_CommLineRunnerIntro";
import O2_CommLineImpl from "./O2_CommLineIMpl";

// =============================================================================================================

const o1_CommLineRunnerIntro = "1. CommlineRunner Intro";
const o2_CommLineImpl = `2. CommandLineRunner example`;

// =============================================================================================================

const anchorList: string[] = [o1_CommLineRunnerIntro, o2_CommLineImpl];

// =============================================================================================================

const DBInitCommandLineRunnerMain = () => {
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
      <O1_CommLineRunnerIntro anchor={o1_CommLineRunnerIntro} />
      <O2_CommLineImpl anchor={o2_CommLineImpl}></O2_CommLineImpl>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default DBInitCommandLineRunnerMain;
