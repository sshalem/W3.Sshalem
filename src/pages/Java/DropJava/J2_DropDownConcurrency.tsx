import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const J2_DropDownConcurrency = () => {
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
    if (location.pathname.includes("java/concurrency")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/java/concurrency" topicName="2. Concurrency" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Core" internalLink="/java/concurrency/core" />
        <SideDropdownLink sideDropDownNavName="2. Professional" internalLink="/java/concurrency/professional" />
        <SideDropdownLink sideDropDownNavName="3. Advanced" internalLink="/java/concurrency/advanced" />
        <SideDropdownLink sideDropDownNavName="4. Modern JAVA & Spring" internalLink="/java/concurrency/java-spring" />
        <SideDropdownLink sideDropDownNavName="5. Test & Debug" internalLink="/java/concurrency/testing-debugging" />
      </div>
    </section>
  );
};

export default J2_DropDownConcurrency;
