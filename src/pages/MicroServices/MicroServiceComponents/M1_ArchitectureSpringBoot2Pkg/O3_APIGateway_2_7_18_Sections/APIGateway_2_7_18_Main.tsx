import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O1_APIGateway2718 from "./O1_APIGateway2718";
import O2_DependecyAPIGateway2718 from "./O2_DependecyAPIGateway2718";
import O3_ApplicationPropertiesAPIGateway2718 from "./O3_ApplicationPropertiesAPIGateway2718";
import O1_O_DiagramAPIGateway2718 from "./O1_O_DiagramAPIGateway2718";
import O4_TestAPIGateway2718 from "./O4_TestAPIGateway2718";
import O5_RandomPortTestAPIGateway2718 from "./O5_RandomPortTestAPIGateway2718";

// =============================================================================================================

const o1_APIGateway2718 = "1. Intro API gateway";
const o1_O_DiagramAPIGateway2718 = "Diagram Architecture";
const o2_DependecyAPIGateway2718 = "2. Create APIGateway app";
const o3_ApplicationPropertiesAPIGateway2718 = "3. application.roperties";
const o4_TestAPIGateway2718 = "4. Test APIGateway";
const o5_RandomPortTestAPIGateway2718 = "5. Test Random Port APIGateway";

// =============================================================================================================

const anchorList: string[] = [
  o1_APIGateway2718,
  o1_O_DiagramAPIGateway2718,
  o2_DependecyAPIGateway2718,
  o3_ApplicationPropertiesAPIGateway2718,
  o4_TestAPIGateway2718,
  o5_RandomPortTestAPIGateway2718,
];

// =============================================================================================================

const APIGateway_2_7_18_Main = () => {
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

      <O1_APIGateway2718 anchor={o1_APIGateway2718} />
      <O1_O_DiagramAPIGateway2718 anchor={o1_O_DiagramAPIGateway2718} />
      <O2_DependecyAPIGateway2718 anchor={o2_DependecyAPIGateway2718} />
      <O3_ApplicationPropertiesAPIGateway2718 anchor={o3_ApplicationPropertiesAPIGateway2718} />
      <O4_TestAPIGateway2718 anchor={o4_TestAPIGateway2718} />
      <O5_RandomPortTestAPIGateway2718 anchor={o5_RandomPortTestAPIGateway2718} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default APIGateway_2_7_18_Main;
