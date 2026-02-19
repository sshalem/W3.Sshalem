/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_SingletonIntro from "./O1_SingletonIntro";
import O2_SingletonBasicImpl from "./O2_SingletonBasicImpl";
import O3_SingletonLazyImpl from "./O3_SingletonLazyImpl";
import O4_SingletonSynchronized from "./O4_SingletonSynchronized";
import O5_SingletonBestPerfromance from "./O5_SingletonBestPerfromance";
import O6_SingletonRecommended from "./O6_SingletonRecommended";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_SingletonIntro = "1- Singleton intro";
const o2_SingletonBasicImpl = "2- Singleton Basic Impl";
const o3_SingletonLazyImpl = "3- Singleton Lazy Impl";
const o4_SingletonSynchronized = "4- Singleton Synchronized";
const o5_SingletonBestPerfromance = "5- Singleton Best Performance";
const o6_SingletonRecommended = "6- Singleton Recommended";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_SingletonIntro,
  o2_SingletonBasicImpl,
  o3_SingletonLazyImpl,
  o4_SingletonSynchronized,
  o5_SingletonBestPerfromance,
  o6_SingletonRecommended,
];

// ============================================
// ============================================

const SingletonMain = () => {
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

      <O1_SingletonIntro anchor={o1_SingletonIntro} />
      <O2_SingletonBasicImpl anchor={o2_SingletonBasicImpl} />
      <O3_SingletonLazyImpl anchor={o3_SingletonLazyImpl} />
      <O4_SingletonSynchronized anchor={o4_SingletonSynchronized} />
      <O5_SingletonBestPerfromance anchor={o5_SingletonBestPerfromance} />
      <O6_SingletonRecommended anchor={o6_SingletonRecommended} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default SingletonMain;
