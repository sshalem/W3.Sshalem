/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O0_DataStructures from "./O0_DataStructures";
import O1_List from "./O1_List";
import O2_Tuple from "./O2_Tuple";
import O3_Set from "./O3_Set";
import O4_Dictionay from "./O4_Dictionay";
import O5_Deque from "./O5_Deque";
import O6_DefaultDict from "./O6_DefaultDict";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o0_DataStructures = "Intro Data Structures";
const o1_List = "1. List";
const o2_Tuple = "2. Tuple";
const o3_Set = "3. Set";
const o4_Dictionay = "4. Dictionay";
const o5_Deque = "5. Deque";
const o6_DefaultDict = "6. DefaultDict";
// const o2_Tuple = "2. Tuple";
// const o2_Tuple = "2. Tuple";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [o0_DataStructures, o1_List, o2_Tuple, o3_Set, o4_Dictionay, o5_Deque, o6_DefaultDict];

// ============================================
// ============================================

const PythonDataStructuresMain = () => {
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
      <O0_DataStructures anchor={o0_DataStructures} />
      <O1_List anchor={o1_List} />
      <O2_Tuple anchor={o2_Tuple} />
      <O3_Set anchor={o3_Set} />
      <O4_Dictionay anchor={o4_Dictionay} />
      <O5_Deque anchor={o5_Deque} />
      <O6_DefaultDict anchor={o6_DefaultDict} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};
export default PythonDataStructuresMain;
