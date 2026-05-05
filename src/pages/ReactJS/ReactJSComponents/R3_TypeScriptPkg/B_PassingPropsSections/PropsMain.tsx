/*


*/
import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_IntroProps from "./O1_IntroProps";
import O2_PassPropsDirectly from "./O2_PassPropsDirectly";
import O3_PassPropsInterfaceType from "./O3_PassPropsInterfaceType";
import O4_OptionalProps from "./O4_OptionalProps";
import O5_DefaultProps from "./O5_DefaultProps";
import O6_PassObjectProps from "./O6_PassObjectProps";
import O7_PassFunctionProps from "./O7_PassFunctionProps";

// ===========================================
// ==     content menu (title name)         ==
// ===========================================

const o1_IntroProps = "1. Introduction";
const o2_PassPropsDirectly = "2. Pass Props Directly";
const o3_PassPropsInterfaceType = "3. Props Interface/Type";
const o4_OptionalProps = "4. Optional Prop (?)";
const o5_DefaultProps = "5. Default Prop";
const o6_PassObjectProps = "6. Pass Object Props";
const o7_PassFunctionProps = "7. Pass Function Props";

// ===========================================
// == Update anchorList with  content menu  ==
// ===========================================

const anchorList: string[] = [
  o1_IntroProps,
  o2_PassPropsDirectly,
  o3_PassPropsInterfaceType,
  o4_OptionalProps,
  o5_DefaultProps,
  o6_PassObjectProps,
  o7_PassFunctionProps,
];

// ============================================
// ============================================

const PropsMain = () => {
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

      <O1_IntroProps anchor={o1_IntroProps}></O1_IntroProps>
      <O2_PassPropsDirectly anchor={o2_PassPropsDirectly} />
      <O3_PassPropsInterfaceType anchor={o3_PassPropsInterfaceType} />
      <O4_OptionalProps anchor={o4_OptionalProps} />
      <O5_DefaultProps anchor={o5_DefaultProps} />
      <O6_PassObjectProps anchor={o6_PassObjectProps} />
      <O7_PassFunctionProps anchor={o7_PassFunctionProps} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default PropsMain;
