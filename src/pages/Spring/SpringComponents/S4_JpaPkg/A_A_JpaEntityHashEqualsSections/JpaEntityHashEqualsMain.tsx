import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroHashEquals from "./O1_IntroHashEquals";
import O3_PojoHashEquals from "./O3_PojoHashEquals";
import O2_JpaEntityHashEquals from "./O2_JpaEntityHashEquals";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroHashEquals = "1. Intro hashcode() equals()";
const o2_JpaEntityHashEquals = "2. JPA Entity hashcode() equals() implementation";
const o3_PojoHashEquals = "3. POJO hashcode() equals() implementation";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_IntroHashEquals, o2_JpaEntityHashEquals, o3_PojoHashEquals];

// ============================================
// ============================================

const JpaEntityHashEqualsMain = () => {
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

      <O1_IntroHashEquals anchor={o1_IntroHashEquals} />
      <O2_JpaEntityHashEquals anchor={o2_JpaEntityHashEquals} />
      <O3_PojoHashEquals anchor={o3_PojoHashEquals} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default JpaEntityHashEqualsMain;
