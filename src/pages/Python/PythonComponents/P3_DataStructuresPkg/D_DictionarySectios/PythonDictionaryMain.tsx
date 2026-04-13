import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_Dictionary from "./O1_Dictionary";
import O0_DataStructures from "./O0_DataStructures";
import O2_CreateDict from "./O2_CreateDict";
import O3_AddRemoveItemDict from "./O3_AddRemoveItemDict";
import O4_AccessItemDict from "./O4_AccessItemDict";
import O5_LoopDictionaries from "./O5_LoopDictionaries";
import O6_NestedDictionaries from "./O6_NestedDictionaries";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================
const o0_DataStructures = "Data Structures";
const o1_Dictionary = "1. Dictionary";
const o2_CreateDict = "2. Create Dictionary";
const o3_AddRemoveItemDict = "3. Add/Remove Item";
const o4_AccessItemDict = "4. Access key/value of Item";
const o5_LoopDictionaries = "5. Loop Dictionary";
const o6_NestedDictionaries = "6. Nested Dictionaries";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o0_DataStructures,
  o1_Dictionary,
  o2_CreateDict,
  o3_AddRemoveItemDict,
  o4_AccessItemDict,
  o5_LoopDictionaries,
  o6_NestedDictionaries,
];

// ============================================
// ============================================

const PythonDictionaryMain = () => {
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
      <O1_Dictionary anchor={o1_Dictionary} />
      <O2_CreateDict anchor={o2_CreateDict} />
      <O3_AddRemoveItemDict anchor={o3_AddRemoveItemDict} />
      <O4_AccessItemDict anchor={o4_AccessItemDict} />
      <O5_LoopDictionaries anchor={o5_LoopDictionaries} />
      <O6_NestedDictionaries anchor={o6_NestedDictionaries} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PythonDictionaryMain;
