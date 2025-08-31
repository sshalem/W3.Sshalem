import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_Introduction from "./O1_Introduction";
import O2_Variables from "./O2_Variables";
import O3_UnknownNever from "./O3_UnknownNever";
import O4_Type from "./O4_Type";
import O6_Interface from "./O6_Interface";
import O5_Union from "./O5_Union";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_introduction = "1. Introduction";
const o2_variables = "2. Variables";
const o3_unknown_never = "3. Unknown , never";
const o4_type = "4. type";
const o5_union = "5. union";
const o6_interface = "6. interface ";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_introduction, o2_variables, o3_unknown_never, o4_type, o5_union, o6_interface];

// ============================================
// ============================================

const IntroMain = () => {
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

      <O1_Introduction anchor={o1_introduction}></O1_Introduction>
      <O2_Variables anchor={o2_variables}></O2_Variables>
      <O3_UnknownNever anchor={o3_unknown_never}></O3_UnknownNever>
      <O4_Type anchor={o4_type}></O4_Type>
      <O5_Union anchor={o5_union}></O5_Union>
      <O6_Interface anchor={o6_interface}></O6_Interface>

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default IntroMain;
