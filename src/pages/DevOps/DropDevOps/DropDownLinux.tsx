import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SideDropdownLink, SideDropDownTopic } from "../../../components";

const DropDownLinux = () => {
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
    if (location.pathname.includes("devops/linux-server")) {
      console.log(location.pathname);

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
      <SideDropDownTopic showList={showList} handleOpenList={handleOpenList} internalLink="/devops/linux-server" topicName="Linux (Linode Akami)" />

      <div
        style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
        className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
        ref={divRef}
      >
        <SideDropdownLink sideDropDownNavName="create linode server" internalLink="/devops/linux-server/create-server" />
        <SideDropdownLink sideDropDownNavName="connect with SSH" internalLink="/devops/linux-server/connect-with-ssh" />
        <SideDropdownLink sideDropDownNavName="connect with FileZilla" internalLink="/devops/linux-server/connect-with-filezilla" />
        <SideDropdownLink sideDropDownNavName="Linux server setup" internalLink="/devops/linux-server/setup-server" />
        <SideDropdownLink sideDropDownNavName="Linux JDK Install" internalLink="/devops/linux-server/jdk-install" />
        <SideDropdownLink sideDropDownNavName="Linux Tomcat Install" internalLink="/devops/linux-server/tomcat-install" />
        <SideDropdownLink sideDropDownNavName="Linux MySql Install" internalLink="/devops/linux-server/mysql-install" />
        <SideDropdownLink sideDropDownNavName="Linux Jenkins Install" internalLink="/devops/linux-server/jenkins-install" />
      </div>
    </section>
  );
};

export default DropDownLinux;
