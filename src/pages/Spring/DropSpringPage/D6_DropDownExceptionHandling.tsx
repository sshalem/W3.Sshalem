import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D6_DropDownExceptionHandling = () => {
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
    if (location.pathname.includes("spring/exception-handling")) {
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
        internalLink="/spring/exception-handling"
        topicName="Exception Handling"
      />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Runtime Handle" internalLink="/spring/exception-handling/runtime" />
        <SideDropdownLink sideDropDownNavName="2. Config msg at App.props" internalLink="/spring/exception-handling/config-msg-app-props" />
        <SideDropdownLink sideDropDownNavName="3. Config msg at controller" internalLink="/spring/exception-handling/config-msg-at-controller" />
        <SideDropdownLink sideDropDownNavName="4. Custom err msg" internalLink="/spring/exception-handling/custom-error-msg" />
        <SideDropdownLink
          sideDropDownNavName="5. Custom err msg ctrl.advice"
          internalLink="/spring/exception-handling/custom-error-msg-controller-advice"
        />
        <SideDropdownLink sideDropDownNavName="6. (Prod) @RestCtlAdvc" internalLink="/spring/exception-handling/custom-rest-controller-advice" />
        <SideDropdownLink sideDropDownNavName="7. Timestamp error config" internalLink="/spring/exception-handling/timestamp-error-config" />
        {/*  */}
      </div>
    </section>
  );
};

export default D6_DropDownExceptionHandling;
