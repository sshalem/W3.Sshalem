/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_ExceptionsIntro from "./O1_ExceptionsIntro";
import O2_ExceptionsHierarchy from "./O2_ExceptionsHierarchy";
import O3_CatchExceptions from "./O3_CatchExceptions";
import O4_ElseException from "./O4_ElseException";
import O5_ExceptionMsg from "./O5_ExceptionMsg";
import O6_HandleMultipleExceptions from "./O6_HandleMultipleExceptions";
import O7_Finally from "./O7_Finally";
import O8_RaiseException from "./O8_RaiseException";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_ExceptionsIntro = "1. Exceptions Intro";
const o2_ExceptionsHierarchy = "2. Exceptions Hierarchy";
const o3_CatchExceptions = "3. Catch Exceptions";
const o4_ElseException = "4. Else with Exception";
const o5_ExceptionMsg = "5. Exception Msg";
const o6_HandleMultipleExceptions = "6. Handle Multiple Exceptions";
const o7_Finally = "7. Finally block";
const o8_RaiseException = "8. Raise Exception";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_ExceptionsIntro,
  o2_ExceptionsHierarchy,
  o3_CatchExceptions,
  o4_ElseException,
  o5_ExceptionMsg,
  o6_HandleMultipleExceptions,
  o7_Finally,
  o8_RaiseException,
];

// ============================================
// ============================================

const PythonExceptionsMain = () => {
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

      <O1_ExceptionsIntro anchor={o1_ExceptionsIntro} />
      <O2_ExceptionsHierarchy anchor={o2_ExceptionsHierarchy} />
      <O3_CatchExceptions anchor={o3_CatchExceptions} />
      <O4_ElseException anchor={o4_ElseException} />
      <O5_ExceptionMsg anchor={o5_ExceptionMsg} />
      <O6_HandleMultipleExceptions anchor={o6_HandleMultipleExceptions} />
      <O7_Finally anchor={o7_Finally} />
      <O8_RaiseException anchor={o8_RaiseException} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default PythonExceptionsMain;
