/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_JavaObjectClassIntro from "./O1_JavaObjectClassIntro";
import O2_toString from "./O2_toString";
import O3_equals from "./O3_equals";
import O4_hashCode from "./O4_hashCode";
import O5_clone from "./O5_clone";
import O6_finalize from "./O6_finalize";
import O7_getClass from "./O7_getClass";
import O8_wait_notify_notifyAll from "./O8_wait_notify_notifyAll";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_JavaObjectClassIntro = "1. Java Object Class Intro";
const o2_toString = "2. toString()";
const o3_equals = "3. equals()";
const o4_hashCode = "4. hashCode()";
const o5_clone = "5. clone()";
const o6_finalize = "6. finalize()";
const o7_getClass = "7. getClass()";
const o8_wait_notify_notifyAll = "8. wait(), notify(), notifyAll()";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_JavaObjectClassIntro,
  o2_toString,
  o3_equals,
  o4_hashCode,
  o5_clone,
  o6_finalize,
  o7_getClass,
  o8_wait_notify_notifyAll,
];

// ============================================
// ============================================

const JavaObjectClassMain = () => {
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

      <O1_JavaObjectClassIntro anchor={o1_JavaObjectClassIntro} />
      <O2_toString anchor={o2_toString} />
      <O3_equals anchor={o3_equals} />
      <O4_hashCode anchor={o4_hashCode} />
      <O5_clone anchor={o5_clone} />
      <O6_finalize anchor={o6_finalize} />
      <O7_getClass anchor={o7_getClass} />
      <O8_wait_notify_notifyAll anchor={o8_wait_notify_notifyAll} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default JavaObjectClassMain;
