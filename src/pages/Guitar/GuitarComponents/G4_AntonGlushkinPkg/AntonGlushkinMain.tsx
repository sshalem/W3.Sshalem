import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../components";
import O1_Variations from "./O1_Variations";
import O2_EmotionalChord from "./O2_EmotionalChord";
import O3_BosaNova from "./O3_BosaNova";
import O0_YouTubeChannel from "./O0_YouTubeChannel";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_YouTubeChannel = "Anton Glushkin YouTubeChannel";
const o1_Variations = "1. Variations";
const o2_EmotionalChord = "2. Emotional Chord";
const o3_BosaNova = "3. Bosa Nova";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_YouTubeChannel, o1_Variations, o2_EmotionalChord, o3_BosaNova];

// ============================================
// ============================================

const AntonGlushkinMain = () => {
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
      <O0_YouTubeChannel anchor={o0_YouTubeChannel} />
      <O1_Variations anchor={o1_Variations} />
      <O2_EmotionalChord anchor={o2_EmotionalChord} />
      <O3_BosaNova anchor={o3_BosaNova} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default AntonGlushkinMain;
