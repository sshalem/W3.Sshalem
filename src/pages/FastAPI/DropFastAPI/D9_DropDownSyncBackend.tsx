import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D9_DropDownSyncBackend = () => {
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
    if (location.pathname.includes("fastapi/synchronous")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/fastapi/synchronous" topicName="1. Synchronous Backend" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Intro" internalLink="/fastapi/synchronous/projectFolderStructure" />
        <SideDropdownLink sideDropDownNavName="2. Create FastAPI" internalLink="/fastapi/synchronous/createFastApi" />
        <SideDropdownLink sideDropDownNavName="3. Config SQLAlchemy" internalLink="/fastapi/synchronous/configSqlAlchemy" />
        <SideDropdownLink sideDropDownNavName="4. Model (Entity)" internalLink="/fastapi/synchronous/entity" />
        <SideDropdownLink sideDropDownNavName="5. Repository" internalLink="/fastapi/synchronous/repository" />
        <SideDropdownLink sideDropDownNavName="6. Create DB session" internalLink="/fastapi/synchronous/dbsession" />
        <SideDropdownLink sideDropDownNavName="7. Schema (DTO)" internalLink="/fastapi/synchronous/schema" />
        <SideDropdownLink sideDropDownNavName="8. Exceptions" internalLink="/fastapi/synchronous/exceptions" />
        <SideDropdownLink sideDropDownNavName="9. Dependency Injection" internalLink="/fastapi/synchronous/dependencyinjection" />
        <SideDropdownLink sideDropDownNavName="10. Service" internalLink="/fastapi/synchronous/service" />
        <SideDropdownLink sideDropDownNavName="11. Controller" internalLink="/fastapi/synchronous/controller" />
        <SideDropdownLink sideDropDownNavName="12. main.py" internalLink="/fastapi/synchronous/main" />
        <SideDropdownLink sideDropDownNavName="13. Init DB" internalLink="/fastapi/synchronous/initDB" />
        <SideDropdownLink sideDropDownNavName="14. Respository Advanced" internalLink="/fastapi/synchronous/repo-advanced" />
      </div>
    </section>
  );
};

export default D9_DropDownSyncBackend;
