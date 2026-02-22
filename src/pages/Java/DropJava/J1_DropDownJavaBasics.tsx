import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const J1_DropDownJavaBasics = () => {
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
    if (location.pathname.includes("java/basics")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/java/basics" topicName="1. Java Basics" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Java Fundamental" internalLink="/java/basics/java-fundamental" />
        <SideDropdownLink sideDropDownNavName="2. Array" internalLink="/java/basics/array" />
        <SideDropdownLink sideDropDownNavName="3. Enum" internalLink="/java/basics/enum" />
        <SideDropdownLink sideDropDownNavName="4. Comparable & Comparator" internalLink="/java/basics/comparable-comparator" />
        <SideDropdownLink sideDropDownNavName="5. Exceptions" internalLink="/java/basics/exceptions" />
        <SideDropdownLink sideDropDownNavName="6. Java Object Class" internalLink="/java/basics/object-class" />
        <SideDropdownLink sideDropDownNavName="7. Random" internalLink="/java/basics/random" />
        <SideDropdownLink sideDropDownNavName="8. OOP" internalLink="/java/basics/oop" />
        <SideDropdownLink sideDropDownNavName="9. Generics" internalLink="/java/basics/generics" />
        <SideDropdownLink sideDropDownNavName="9. Collections" internalLink="/java/basics/collections" />
        <SideDropdownLink sideDropDownNavName="10. I/O" internalLink="/java/basics/io" />
        <SideDropdownLink sideDropDownNavName="11. Multithreading" internalLink="/java/basics/multithreading" />
        <SideDropdownLink sideDropDownNavName="12. Stack, Heap, GC" internalLink="/java/basics/gc-heap-stack" />
        <SideDropdownLink sideDropDownNavName="13. JAVA 8" internalLink="/java/basics/java8" />
      </div>
    </section>
  );
};

export default J1_DropDownJavaBasics;
