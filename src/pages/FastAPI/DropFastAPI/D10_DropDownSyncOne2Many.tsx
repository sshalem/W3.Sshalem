import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D10_DropDownSyncOne2Many = () => {
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
    if (location.pathname.includes("fastapi/sync-one2many")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/fastapi/sync-one2many" topicName="2. Sync One2Many" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Intro" internalLink="/fastapi/sync-one2many/projectFolderStructure" />
        <SideDropdownLink sideDropDownNavName="2. Create FastAPI" internalLink="/fastapi/sync-one2many/createFastApi" />
        <SideDropdownLink sideDropDownNavName="3. Config SQLAlchemy" internalLink="/fastapi/sync-one2many/configSqlAlchemy" />
        <SideDropdownLink sideDropDownNavName="4. Model (Entity)" internalLink="/fastapi/sync-one2many/entity" />
        <SideDropdownLink sideDropDownNavName="5. Repository" internalLink="/fastapi/sync-one2many/repository" />
        <SideDropdownLink sideDropDownNavName="6. Create DB session" internalLink="/fastapi/sync-one2many/dbsession" />
        <SideDropdownLink sideDropDownNavName="7. Schema (DTO)" internalLink="/fastapi/sync-one2many/schema" />
        <SideDropdownLink sideDropDownNavName="8. Exceptions" internalLink="/fastapi/sync-one2many/exceptions" />
        <SideDropdownLink sideDropDownNavName="9. Dependency Injection" internalLink="/fastapi/sync-one2many/dependencyinjection" />
        <SideDropdownLink sideDropDownNavName="10. Service" internalLink="/fastapi/sync-one2many/service" />
        <SideDropdownLink sideDropDownNavName="11. Controller" internalLink="/fastapi/sync-one2many/controller" />
        <SideDropdownLink sideDropDownNavName="12. main.py" internalLink="/fastapi/sync-one2many/main" />
        <SideDropdownLink sideDropDownNavName="13. Init DB" internalLink="/fastapi/sync-one2many/initDB" />
        <SideDropdownLink sideDropDownNavName="14. Pagination" internalLink="/fastapi/sync-one2many/pagination" />
        <SideDropdownLink sideDropDownNavName="15. Sorting" internalLink="/fastapi/sync-one2many/sorting" />
        <SideDropdownLink sideDropDownNavName="16. Dynamic Filtering" internalLink="/fastapi/sync-one2many/dynamic-filtering" />
      </div>
    </section>
  );
};

export default D10_DropDownSyncOne2Many;
