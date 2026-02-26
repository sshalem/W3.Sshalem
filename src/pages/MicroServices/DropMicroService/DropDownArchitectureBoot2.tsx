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
    if (location.pathname.includes("microservices/architecture-springboot-2")) {
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
        internalLink="/microservices/architecture-springboot-2"
        topicName="Architecture Spring boot 2.xx"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="Architecture Options" internalLink="/microservices/architecture-springboot-2/architecture-options" />
        <SideDropdownLink sideDropDownNavName="Service Discovery" internalLink="/microservices/architecture-springboot-2/service-discovery" />
        <SideDropdownLink sideDropDownNavName="API Gateway" internalLink="/microservices/architecture-springboot-2/api-gateway" />
        <SideDropdownLink sideDropDownNavName="Config Management" internalLink="/microservices/architecture-springboot-2/config-management" />
        <SideDropdownLink
          sideDropDownNavName="Microservice Communication"
          internalLink="/microservices/architecture-springboot-2/inter-service-communication"
        />
        <SideDropdownLink sideDropDownNavName="Load Balancing" internalLink="/microservices/architecture-springboot-2/load-balancing" />
        <SideDropdownLink
          sideDropDownNavName="Resilience & Fault Tolerance"
          internalLink="/microservices/architecture-springboot-2/resilience-fault-tolerance"
        />
        <SideDropdownLink sideDropDownNavName="Distributed Tracing" internalLink="/microservices/architecture-springboot-2/distributed-tracing" />
        <SideDropdownLink sideDropDownNavName="Data Management" internalLink="/microservices/architecture-springboot-2/data-management" />
      </div>
    </section>
  );
};

export default DropDownArchitectureBoot2;
