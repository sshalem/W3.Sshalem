import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D1_DropDownFastApiConfigEnvProfiles = () => {
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
    if (location.pathname.includes("fastapi/database-env-profiles")) {
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
        internalLink="/fastapi/database-env-profiles"
        topicName="DataBase Env Profiles"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="Sqlite3" internalLink="/fastapi/database-env-profiles/sqlite3" />
        <SideDropdownLink sideDropDownNavName="MySql" internalLink="/fastapi/database-env-profiles/mysql" />
        <SideDropdownLink sideDropDownNavName="PostgreSql" internalLink="/fastapi/database-env-profiles/postgresql" />
        <SideDropdownLink sideDropDownNavName="Env" internalLink="/fastapi/database-env-profiles/env" />
        <SideDropdownLink sideDropDownNavName="Profiles" internalLink="/fastapi/database-env-profiles/profiles" />
      </div>
    </section>
  );
};

export default D1_DropDownFastApiConfigEnvProfiles;
