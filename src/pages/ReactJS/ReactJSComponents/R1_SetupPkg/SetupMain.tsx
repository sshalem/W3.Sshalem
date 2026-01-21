/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../components";
import O1_CreateViteProject from "./O1_CreateViteProject";
import O2_Favicon from "./O2_Favicon";
import O3_ReactIcons from "./O3_ReactIcons";
import O4_InstallAxios from "./O4_InstallAxios";
import O5_Tailwindcss from "./O5_Tailwindcss";
import O6_LoadingSpinner from "./O6_LoadingSpinner";
import O7_InstallReactRouter from "./O7_InstallReactRouter";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_CreateViteProject = "1. Create Vite Project";
const o2_Favicon = "2. Favicon";
const o3_ReactIcons = "3. React Icons";
const o4_InstallAxios = "4. axios";
const o5_Tailwindcss = "5. tailwindcss";
const o6_LoadingSpinner = "6. Loading Spinner";
const o7_InstallReactRouter = "7. Router";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_CreateViteProject,
  o2_Favicon,
  o3_ReactIcons,
  o4_InstallAxios,
  o5_Tailwindcss,
  o6_LoadingSpinner,
  o7_InstallReactRouter,
];

// ============================================
// ============================================

const SetupMain = () => {
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
    <section className="ml-2 md:ml-10">
      {/* Start Contents */}
      <ContentMenu
        anchorList={anchorList}
        contentHeight={contentHeight}
        handleShowContent={handleShowContent}
        showContent={showContent}
        ulRef={ulRef}
      />
      {/* End Contents */}
      <O1_CreateViteProject anchor={o1_CreateViteProject}></O1_CreateViteProject>
      <O2_Favicon anchor={o2_Favicon}></O2_Favicon>
      <O3_ReactIcons anchor={o3_ReactIcons}></O3_ReactIcons>
      <O4_InstallAxios anchor={o4_InstallAxios}></O4_InstallAxios>
      <O5_Tailwindcss anchor={o5_Tailwindcss}></O5_Tailwindcss>
      <O6_LoadingSpinner anchor={o6_LoadingSpinner}></O6_LoadingSpinner>
      <O7_InstallReactRouter anchor={o7_InstallReactRouter}></O7_InstallReactRouter>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default SetupMain;
