import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D7_DropDownRest = () => {
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
    if (location.pathname.includes("spring/rest")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/spring/rest" topicName="7. Rest API ,SSE ,WebSocket" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="Rest API" internalLink="/spring/rest/rest-api" />
        <SideDropdownLink sideDropDownNavName="CORS" internalLink="/spring/rest/cors" />
        <SideDropdownLink sideDropDownNavName="OpenAPI (Swagger)" internalLink="/spring/rest/openapi-swagger" />
        <SideDropdownLink sideDropDownNavName="SSE - Server Send Events" internalLink="/spring/rest/sse" />
        <SideDropdownLink sideDropDownNavName="Web Socket" internalLink="/spring/rest/websocket" />
        <SideDropdownLink sideDropDownNavName="Stream Data" internalLink="/spring/rest/stream-data" />
        <SideDropdownLink sideDropDownNavName="Stream Large Response" internalLink="/spring/rest/stream-large-response" />
      </div>
    </section>
  );
};

export default D7_DropDownRest;
