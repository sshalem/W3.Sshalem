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
        <SideDropdownLink sideDropDownNavName="1. create linode server" internalLink="/devops/linux-server/create-server" />
        <SideDropdownLink sideDropDownNavName="2. connect with SSH" internalLink="/devops/linux-server/connect-with-ssh" />
        <SideDropdownLink sideDropDownNavName="3. connect with FileZilla" internalLink="/devops/linux-server/connect-with-filezilla" />
        <SideDropdownLink sideDropDownNavName="4. Linux server setup" internalLink="/devops/linux-server/setup-server" />
        <SideDropdownLink sideDropDownNavName="5. Linux JDK Install" internalLink="/devops/linux-server/jdk-install" />
        <SideDropdownLink sideDropDownNavName="6. Linux NGINX Install" internalLink="/devops/linux-server/nginx-install" />
        <SideDropdownLink sideDropDownNavName="7. Linux Tomcat Install" internalLink="/devops/linux-server/tomcat-install" />
        <SideDropdownLink sideDropDownNavName="8. Linux MySql Install" internalLink="/devops/linux-server/mysql-install" />
        <SideDropdownLink sideDropDownNavName="9. Linux Jenkins Install" internalLink="/devops/linux-server/jenkins-install" />
      </div>
    </section>
  );
};

export default DropDownLinux;
