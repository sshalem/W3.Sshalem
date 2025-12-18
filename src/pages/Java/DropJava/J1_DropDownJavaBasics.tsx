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
        <SideDropdownLink sideDropDownNavName="Java Fundamental" internalLink="/java/basics/java-fundamental" />
        <SideDropdownLink sideDropDownNavName="Array" internalLink="/java/basics/array" />
        <SideDropdownLink sideDropDownNavName="String" internalLink="/java/basics/string" />
        <SideDropdownLink sideDropDownNavName="Methods" internalLink="/java/basics/methods" />
        <SideDropdownLink sideDropDownNavName="OOP" internalLink="/java/basics/oop" />
        <SideDropdownLink sideDropDownNavName="Collections" internalLink="/java/basics/collections" />
        <SideDropdownLink sideDropDownNavName="I/O" internalLink="/java/basics/io" />
        <SideDropdownLink sideDropDownNavName="Multithreading" internalLink="/java/basics/multithreading" />
        <SideDropdownLink sideDropDownNavName="GC, Heap, Stack" internalLink="/java/basics/gc-heap-stack" />
        <SideDropdownLink sideDropDownNavName="JAVA 8" internalLink="/java/basics/java8" />
      </div>
    </section>
  );
};

export default J1_DropDownJavaBasics;
