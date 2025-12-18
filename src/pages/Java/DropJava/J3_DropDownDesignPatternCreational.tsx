import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const J3_DropDownDesignPatternCreational = () => {
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
    if (location.pathname.includes("java/design-patterns-creational")) {
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
        showList={showList}
        handleOpenList={handleOpenList}
        internalLink="/java/design-patterns-creational"
        topicName="3. Design Patterns Creational"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="Singleton" internalLink="/java/design-patterns-creational/singleton" />
        <SideDropdownLink sideDropDownNavName="Prototype" internalLink="/java/design-patterns-creational/prototype" />
        <SideDropdownLink sideDropDownNavName="Builder" internalLink="/java/design-patterns-creational/builder" />
        <SideDropdownLink sideDropDownNavName="Factory" internalLink="/java/design-patterns-creational/factory" />
        <SideDropdownLink sideDropDownNavName="Abstract Factory" internalLink="/java/design-patterns-creational/abstract-factory" />
      </div>
    </section>
  );
};

export default J3_DropDownDesignPatternCreational;
