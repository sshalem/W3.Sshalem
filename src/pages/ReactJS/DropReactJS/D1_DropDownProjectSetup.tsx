import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D1_DropDownProjectSetup = () => {
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
    if (location.pathname.includes("reactJS/project-setup")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/reactJS/project-setup" topicName="1. Project Setup" />
      {/*  */}
      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="1. Create VITE project" internalLink="/reactJS/project-setup/vite-create" />
        <SideDropdownLink sideDropDownNavName="2. Favicon" internalLink="/reactJS/project-setup/favicon" />
        <SideDropdownLink sideDropDownNavName="3. React Icons" internalLink="/reactJS/project-setup/reacticons" />
        <SideDropdownLink sideDropDownNavName="4. Tailwindcss" internalLink="/reactJS/project-setup/tailwindcss" />
      </div>
    </section>
  );
};

export default D1_DropDownProjectSetup;
