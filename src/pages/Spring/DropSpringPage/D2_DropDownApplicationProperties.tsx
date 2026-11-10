import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D2_DropDownApplicationProperties = () => {
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
        topicName="2. Application properties"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        {/* for unknown reason, transition does not work , when I set the Height from refDiv (scrollHeight)  */}
        {/* <div className={`${showList ? `h-[${listHeight}px]` : `h-0`} overflow-hidden bg-white transition-[height] duration-500 ease-in-out`} ref={divRef}> */}
        <SideDropdownLink sideDropDownNavName="1. H2" internalLink="/spring/application-properties/h2" />
        <SideDropdownLink sideDropDownNavName="2. MySql" internalLink="/spring/application-properties/mysql" />
        <SideDropdownLink sideDropDownNavName="3. Postgresql" internalLink="/spring/application-properties/postgresql" />
        <SideDropdownLink sideDropDownNavName="4. MongoDB" internalLink="/spring/application-properties/mongodb" />
        <SideDropdownLink sideDropDownNavName="5. DBeaver" internalLink="/spring/application-properties/dbeaver" />
        <SideDropdownLink sideDropDownNavName="6. Profiles" internalLink="/spring/application-properties/profiles" />
        <SideDropdownLink sideDropDownNavName="7. Init data.sql" internalLink="/spring/application-properties/db-initialization" />
        <SideDropdownLink sideDropDownNavName="8. Init @PostConstruct" internalLink="/spring/application-properties/post-construct-initialization" />
        <SideDropdownLink sideDropDownNavName="9. Init CommandLineRunner" internalLink="/spring/application-properties/command-line-initialization" />
        <SideDropdownLink sideDropDownNavName="10. Read from Properties" internalLink="/spring/application-properties/read-from-properties" />
      </div>
    </section>
  );
};

export default D2_DropDownApplicationProperties;
