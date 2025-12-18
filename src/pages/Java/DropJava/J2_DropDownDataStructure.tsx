import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const J2_DropDownDataStructure = () => {
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
    if (location.pathname.includes("java/data-structures")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/java/data-structures" topicName="2. Data Structures" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="Array" internalLink="/java/data-structures/arrays" />
        <SideDropdownLink sideDropDownNavName="List" internalLink="/java/data-structures/list" />
        <SideDropdownLink sideDropDownNavName="Set" internalLink="/java/data-structures/set" />
        <SideDropdownLink sideDropDownNavName="Map" internalLink="/java/data-structures/map" />
        <SideDropdownLink sideDropDownNavName="Queue" internalLink="/java/data-structures/queue" />
        <SideDropdownLink sideDropDownNavName="Concurent" internalLink="/java/data-structures/concurent" />
      </div>
    </section>
  );
};

export default J2_DropDownDataStructure;
