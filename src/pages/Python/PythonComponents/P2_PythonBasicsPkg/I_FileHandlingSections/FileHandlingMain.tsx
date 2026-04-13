/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ReadTxtFileContent from "./O1_ReadTxtFileContent";
import O2_WriteToTxtFile from "./O2_WriteToTxtFile";
import O3_ListOfFiles from "./O3_ListOfFiles";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ReadTxtFileContent = "1. Read txt File Content";
const o2_WriteToTxtFile = "2. Write To Txt File";
const o3_ListOfFiles = "3. List of Files in directory";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_ReadTxtFileContent, o2_WriteToTxtFile, o3_ListOfFiles];

// ============================================
// ============================================

const FileHandlingMain = () => {
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

      <O1_ReadTxtFileContent anchor={o1_ReadTxtFileContent} />
      <O2_WriteToTxtFile anchor={o2_WriteToTxtFile} />
      <O3_ListOfFiles anchor={o3_ListOfFiles} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default FileHandlingMain;
