/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_InstallTailwindcss from "./O1_InstallTailwindcss";
import O2_ConfigTemplatePath from "./O2_ConfigTemplatePath";
import O3_CssDirectives from "./O3_CssDirectives";
import O4_PrettierForTailwincss from "./O4_PrettierForTailwincss";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_InstallTailwindcss = "1. Install Tailwindcss";
const o2_ConfigTemplatePath = "2. Config Template Path";
const o3_CssDirectives = "3. CSS Directives";
const o4_PrettierForTailwincss = "4. Prettier For Tailwincss";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_InstallTailwindcss, o2_ConfigTemplatePath, o3_CssDirectives, o4_PrettierForTailwincss];

// ============================================
// ============================================

const TailwindcssMain = () => {
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

      <O1_InstallTailwindcss anchor={o1_InstallTailwindcss} />
      <O2_ConfigTemplatePath anchor={o2_ConfigTemplatePath} />
      <O3_CssDirectives anchor={o3_CssDirectives} />
      <O4_PrettierForTailwincss anchor={o4_PrettierForTailwincss} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default TailwindcssMain;
