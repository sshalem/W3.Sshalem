import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownArchitectureBoot3 = () => {
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
    if (location.pathname.includes("microservices/architecture-springboot-3")) {
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
        internalLink="/microservices/architecture-springboot-3"
        topicName="Architecture Spring boot 3.xx"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="Architecture Options" internalLink="/microservices/architecture-springboot-3/architecture-options" />
        <SideDropdownLink sideDropDownNavName="Service Discovery" internalLink="/microservices/architecture-springboot-3/service-discovery" />
        <SideDropdownLink sideDropDownNavName="API Gateway" internalLink="/microservices/architecture-springboot-3/api-gateway" />
        <SideDropdownLink sideDropDownNavName="Config Management" internalLink="/microservices/architecture-springboot-3/config-management" />
        <SideDropdownLink
          sideDropDownNavName="Microservice Communication"
          internalLink="/microservices/architecture-springboot-3/inter-service-communication"
        />
        <SideDropdownLink sideDropDownNavName="Load Balancing" internalLink="/microservices/architecture-springboot-3/load-balancing" />
        <SideDropdownLink
          sideDropDownNavName="Resilience & Fault Tolerance"
          internalLink="/microservices/architecture-springboot-3/resilience-fault-tolerance"
        />
        <SideDropdownLink sideDropDownNavName="Distributed Tracing" internalLink="/microservices/architecture-springboot-3/distributed-tracing" />
        <SideDropdownLink sideDropDownNavName="Data Management" internalLink="/microservices/architecture-springboot-3/data-management" />
      </div>
    </section>
  );
};

export default DropDownArchitectureBoot3;
