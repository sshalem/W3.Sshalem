import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const J4_DropDownDesignPatternStructural = () => {
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
    if (location.pathname.includes("java/design-patterns-structural")) {
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
        internalLink="/java/design-patterns-structural"
        topicName="4. Design Patterns Structural"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Adapter" internalLink="/java/design-patterns-structural/adapter" />
        <SideDropdownLink sideDropDownNavName="2. Decorator" internalLink="/java/design-patterns-structural/decorator" />
        <SideDropdownLink sideDropDownNavName="3. Facade" internalLink="/java/design-patterns-structural/facade" />
        <SideDropdownLink sideDropDownNavName="4. Composite" internalLink="/java/design-patterns-structural/composite" />
        <SideDropdownLink sideDropDownNavName="5. Proxy" internalLink="/java/design-patterns-structural/proxy" />
        <SideDropdownLink sideDropDownNavName="6. Bridge" internalLink="/java/design-patterns-structural/bridge" />
        <SideDropdownLink sideDropDownNavName="7. Flyweight" internalLink="/java/design-patterns-structural/flyweight" />
      </div>
    </section>
  );
};

export default J4_DropDownDesignPatternStructural;
