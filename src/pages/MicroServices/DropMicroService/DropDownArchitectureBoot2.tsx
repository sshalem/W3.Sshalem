import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownArchitectureBoot2 = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>();

  let location = useLocation();

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleOpenList = () => {
    setShowList(!showList);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    if (location.pathname.includes("microservices/architecture-springboot-2-7-18")) {
      if (location.pathname.split("/")[3] === undefined) {
        // do nothing , this way I prevent the re-render of  setShowList(true);
      } else {
        setShowList(true);
      }
      if (divRef.current !== null) {
        setListHeight(divRef.current.scrollHeight);
      }
    } else {
      setShowList(false);
    }
  }, [location.pathname]);

  return (
    <section>
      <SideDropDownTopic
        enableCaret={true}
        showList={showList}
        handleOpenList={handleOpenList}
        internalLink="/microservices/architecture-springboot-2-7-18"
        topicName="Spring-boot 2.7.18"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink
          sideDropDownNavName="Architecture 2.7.18"
          internalLink="/microservices/architecture-springboot-2-7-18/architecture-options"
        />
        <SideDropdownLink sideDropDownNavName="1. Customer & Order" internalLink="/microservices/architecture-springboot-2-7-18/customer-order" />
        <SideDropdownLink sideDropDownNavName="2. Eureka" internalLink="/microservices/architecture-springboot-2-7-18/eureka" />
        <SideDropdownLink sideDropDownNavName="3. API Gateway" internalLink="/microservices/architecture-springboot-2-7-18/apigateway" />
        <SideDropdownLink
          sideDropDownNavName="4. Spring Cloud Config"
          internalLink="/microservices/architecture-springboot-2-7-18/spring-cloud-config"
        />
        <SideDropdownLink sideDropDownNavName="5. Tracing Zipkin/Sleuth" internalLink="/microservices/architecture-springboot-2-7-18/zipkin-sleuth" />
        <SideDropdownLink sideDropDownNavName="6. Resilliance4j" internalLink="/microservices/architecture-springboot-2-7-18/resilliance4j" />
        <SideDropdownLink sideDropDownNavName="7. ELK" internalLink="/microservices/architecture-springboot-2-7-18/elk" />
        <SideDropdownLink sideDropDownNavName="8. KAFKA" internalLink="/microservices/architecture-springboot-2-7-18/kafka" />
        <SideDropdownLink sideDropDownNavName="9. Security" internalLink="/microservices/architecture-springboot-2-7-18/security" />
      </div>
    </section>
  );
};

export default DropDownArchitectureBoot2;
