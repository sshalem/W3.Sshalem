import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const D8_DropDownSecurity = () => {
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
    if (location.pathname.includes("spring/security")) {
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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/spring/security" topicName="8. Security" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        {/*  */}
        <SideDropdownLink sideDropDownNavName="Spring Security" internalLink="/spring/security/spring-security" />
        <SideDropdownLink sideDropDownNavName="JWT Introduction" internalLink="/spring/security/jwt" />
        <SideDropdownLink sideDropDownNavName="JWT Spring v2.6.11" internalLink="/spring/security/jwt-implementation" />
        <SideDropdownLink sideDropDownNavName="JWT Spring v3.5.6" internalLink="/spring/security/jwt-impl-jdk21-spring-boot-v3-5-6" />
        <SideDropdownLink sideDropDownNavName="JWT Multiple Config" internalLink="/spring/security/jwt-multiple-config" />
        {/*  */}
        <SideDropdownLink sideDropDownNavName="OAuth2" internalLink="/spring/security/oauth2" />
      </div>
    </section>
  );
};

export default D8_DropDownSecurity;
