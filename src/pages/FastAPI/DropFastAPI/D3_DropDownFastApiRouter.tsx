import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D3_DropDownFastApiRouter = () => {
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
    if (location.pathname.includes("fastapi/router")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/fastapi/router" topicName="Router (Controller)" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. main.py" internalLink="/fastapi/router/main-py" />
        <SideDropdownLink sideDropDownNavName="2. Pydantic" internalLink="/fastapi/router/pydantic" />
        <SideDropdownLink sideDropDownNavName="3. Project Setup FastApi" internalLink="/fastapi/router/setup-fastapi" />
        <SideDropdownLink sideDropDownNavName="4. Response MediaType" internalLink="/fastapi/router/request-response" />
        <SideDropdownLink sideDropDownNavName="5. GET" internalLink="/fastapi/router/get-request" />
        <SideDropdownLink sideDropDownNavName="6. POST" internalLink="/fastapi/router/post-request" />
      </div>
    </section>
  );
};

export default D3_DropDownFastApiRouter;
