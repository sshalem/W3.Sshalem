import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownPythonBasics = () => {
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
    if (location.pathname.includes("python/python-basics")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/python/python-basics" topicName="Python Basics" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Data Types" internalLink="/python/python-basics/data-types" />
        <SideDropdownLink sideDropDownNavName="2. Operators" internalLink="/python/python-basics/operators" />
        <SideDropdownLink sideDropDownNavName="3. if/else/elif" internalLink="/python/python-basics/control-flow" />
        <SideDropdownLink sideDropDownNavName="4. loops" internalLink="/python/python-basics/loops" />
        <SideDropdownLink sideDropDownNavName="5. functions" internalLink="/python/python-basics/functions" />
        <SideDropdownLink sideDropDownNavName="6. Exceptions" internalLink="/python/python-basics/exceptions" />
        <SideDropdownLink sideDropDownNavName="7. Data structures" internalLink="/python/python-basics/data-structures" />
        <SideDropdownLink sideDropDownNavName="8. Modules/ Packaging" internalLink="/python/python-basics/modules-packaging" />
        <SideDropdownLink sideDropDownNavName="9. File Handling" internalLink="/python/python-basics/file-handling" />
        <SideDropdownLink sideDropDownNavName="10. OOP" internalLink="/python/python-basics/oop" />
        <SideDropdownLink sideDropDownNavName="10. venv" internalLink="/python/python-basics/venv" />
      </div>
    </section>
  );
};

export default DropDownPythonBasics;
