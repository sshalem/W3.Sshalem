import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../components";
import O1_Variations from "./O1_Variations";
import O2_EmotionalChord from "./O2_EmotionalChord";
import O3_BosaNova from "./O3_BosaNova";
import O4_Classics from "./O4_Classics";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_Variations = "1. Variations";
const o2_EmotionalChord = "2. Emotional Chord";
const o3_BosaNova = "3. Bosa Nova";
const o4_Classics = "4. Classics";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o1_Variations, o2_EmotionalChord, o3_BosaNova, o4_Classics];

// ============================================
// ============================================

const GeneralMain = () => {
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

      <O1_Variations anchor={o1_Variations} />
      <O2_EmotionalChord anchor={o2_EmotionalChord} />
      <O3_BosaNova anchor={o3_BosaNova} />
      <O4_Classics anchor={o4_Classics} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default GeneralMain;
