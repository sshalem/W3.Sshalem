import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownCaching = () => {
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
    if (location.pathname.includes("spring/caching")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/spring/caching" topicName="Cache" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="Simple (default)" internalLink="/spring/caching/simple-default" />
        <SideDropdownLink sideDropDownNavName="Caffeine" internalLink="/spring/caching/caffeine" />
        <SideDropdownLink sideDropDownNavName="EhCache" internalLink="/spring/caching/ehCache" />
        <SideDropdownLink sideDropDownNavName="Redis (Distributed)" internalLink="/spring/caching/redis" />
        <SideDropdownLink sideDropDownNavName="Hazelcast (Distributed)" internalLink="/spring/caching/hazelcast" />
        <SideDropdownLink sideDropDownNavName="Infinispan (Distributed)" internalLink="/spring/caching/infinispan" />
      </div>
    </section>
  );
};

export default DropDownCaching;
