/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_InputOutputIntro from "./O0_InputOutputIntro";
import O1_CreateDirectory from "./O1_CreateDirectory";
import O2_CreateFile from "./O2_CreateFile";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_InputOutputIntro = "Java I/O Intro";
const o1_CreateDirectory = "1. Create Directory";
const o2_CreateFile = "2. Create File";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_InputOutputIntro, o1_CreateDirectory, o2_CreateFile];

// ============================================
// ============================================

const InputOutputMain = () => {
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

      <O0_InputOutputIntro anchor={o0_InputOutputIntro} />
      <O1_CreateDirectory anchor={o1_CreateDirectory} />
      <O2_CreateFile anchor={o2_CreateFile} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default InputOutputMain;
