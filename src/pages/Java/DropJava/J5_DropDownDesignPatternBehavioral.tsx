import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const J5_DropDownDesignPatternBehavioral = () => {
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
    if (location.pathname.includes("java/design-patterns-behavioral")) {
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
        internalLink="/java/design-patterns-behavioral"
        topicName="5. Design Patterns Behavioral"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Observer" internalLink="/java/design-patterns-behavioral/observer" />
        <SideDropdownLink sideDropDownNavName="2. Strategy" internalLink="/java/design-patterns-behavioral/strategy" />
        <SideDropdownLink sideDropDownNavName="3. Template Method" internalLink="/java/design-patterns-behavioral/template-method" />
        <SideDropdownLink sideDropDownNavName="4. Command" internalLink="/java/design-patterns-behavioral/command" />
        <SideDropdownLink sideDropDownNavName="5. State" internalLink="/java/design-patterns-behavioral/state" />
        <SideDropdownLink sideDropDownNavName="6. Chain Of Responsibility" internalLink="/java/design-patterns-behavioral/chain-of-responsibility" />
        <SideDropdownLink sideDropDownNavName="7. Iterator" internalLink="/java/design-patterns-behavioral/iterator" />
        <SideDropdownLink sideDropDownNavName="8. Mediator" internalLink="/java/design-patterns-behavioral/mediator" />
        <SideDropdownLink sideDropDownNavName="9. Memento" internalLink="/java/design-patterns-behavioral/memento" />
        <SideDropdownLink sideDropDownNavName="10. Visitor" internalLink="/java/design-patterns-behavioral/visitor" />
      </div>
    </section>
  );
};

export default J5_DropDownDesignPatternBehavioral;
