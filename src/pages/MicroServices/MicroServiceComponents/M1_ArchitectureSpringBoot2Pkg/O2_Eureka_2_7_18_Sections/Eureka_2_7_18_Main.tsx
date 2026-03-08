import { useEffect, useRef, useState } from "react";
import { ContentMenu, Loading } from "../../../../../components";
import O3_EurekaServer2718 from "./O3_EurekaServer2718";
import O4_EurekaClient2718 from "./O4_EurekaClient2718";
import O2_IntroLoadBalace2718 from "./O2_IntroLoadBalace2718";
import O1_IntroEureka2718 from "./O1_IntroEureka2718";

// =============================================================================================================

const o1_IntroEureka2718 = "1. Intro Eureka";
const o2_IntroLoadBalace2718 = "2. Intro LoadBalancer";
const o3_EurekaServer2718 = "3. Create Eureka Server";
const o4_EurekaClient2718 = "4. Create Eureka Client";
// const o3_EurekaServer2718 = "3. Create Eureka Server";

// =============================================================================================================

const anchorList: string[] = [o1_IntroEureka2718, o2_IntroLoadBalace2718, o3_EurekaServer2718, o4_EurekaClient2718];

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
      <O3_EurekaServer2718 anchor={o3_EurekaServer2718} />
      <O4_EurekaClient2718 anchor={o4_EurekaClient2718} />

      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default Eureka_2_7_18_Main;
