import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownApplicationProperties = () => {
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
    // if (location.pathname.substring(8).includes("application-properties")) {
    if (location.pathname.includes("spring/application-properties")) {
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
        internalLink="/spring/application-properties"
        topicName="Application properties"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
        {/* <div className={`${showList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
        <SideDropdownLink sideDropDownNavName="H2" internalLink="/spring/application-properties/h2" />
        <SideDropdownLink sideDropDownNavName="MySql" internalLink="/spring/application-properties/mysql" />
        <SideDropdownLink sideDropDownNavName="Postgresql" internalLink="/spring/application-properties/postgresql" />
        <SideDropdownLink sideDropDownNavName="MongoDB" internalLink="/spring/application-properties/mongodb" />
        <SideDropdownLink sideDropDownNavName="DBeaver" internalLink="/spring/application-properties/dbeaver" />
        <SideDropdownLink sideDropDownNavName="Profiles" internalLink="/spring/application-properties/profiles" />
        <SideDropdownLink sideDropDownNavName="DB Initialization" internalLink="/spring/application-properties/db-initialization" />
      </div>
    </section>
  );
};

export default DropDownApplicationProperties;
