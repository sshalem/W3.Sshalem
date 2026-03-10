import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O2_IntroLoadBalace2718 from "./O2_IntroLoadBalace2718";
import O1_IntroEureka2718 from "./O1_IntroEureka2718";
import O3_DiagramEureka2718 from "./O3_DiagramEureka2718";
import O4_EurekaServer2718 from "./O4_EurekaServer2718";
import O5_EurekaClient2718 from "./O5_EurekaClient2718";
import O6_LoadBalancer2718 from "./O6_LoadBalancer2718";
import O7_TestEureka2718 from "./O7_TestEureka2718";
import O8_OpenFeignCommunication from "./O8_OpenFeignCommunication";

// =============================================================================================================

const o1_IntroEureka2718 = "1. Intro Eureka";
const o2_IntroLoadBalace2718 = "2. Intro LoadBalancer";
const o3_DiagramEureka2718 = "3. Diagram Architecture";
const o4_EurekaServer2718 = "4. Eureka Server 2.7.18";
const o5_EurekaClient2718 = "5. Eureka Client 2.7.18";
const o6_LoadBalancer2718 = "6. @LoadBalancer With RestTamplate";
const o7_TestEureka2718 = "7. Test Eureka With LoadBalanced 2.7.18";
const o8_OpenFeignCommunication = "8. OpenFeign Communication";

// =============================================================================================================

const anchorList: string[] = [
  o1_IntroEureka2718,
  o2_IntroLoadBalace2718,
  o3_DiagramEureka2718,
  o4_EurekaServer2718,
  o5_EurekaClient2718,
  o6_LoadBalancer2718,
  o7_TestEureka2718,
  o8_OpenFeignCommunication,
];

// =============================================================================================================

const Eureka_2_7_18_Main = () => {
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

      <O1_IntroEureka2718 anchor={o1_IntroEureka2718} />
      <O2_IntroLoadBalace2718 anchor={o2_IntroLoadBalace2718} />
      <O3_DiagramEureka2718 anchor={o3_DiagramEureka2718} />
      <O4_EurekaServer2718 anchor={o4_EurekaServer2718} />
      <O5_EurekaClient2718 anchor={o5_EurekaClient2718} />
      <O6_LoadBalancer2718 anchor={o6_LoadBalancer2718} />
      <O7_TestEureka2718 anchor={o7_TestEureka2718} />
      <O8_OpenFeignCommunication anchor={o8_OpenFeignCommunication} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Eureka_2_7_18_Main;
