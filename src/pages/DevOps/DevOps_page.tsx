/*


*/
import { Outlet } from "react-router-dom";
import { FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import DropDownNetlify from "./DropDevOps/DropDownNetlify";
import DropDownRender from "./DropDevOps/DropDownRender";
import DropDownTomcat from "./DropDevOps/DropDownTomcat";
import DropDownReactOnSpring from "./DropDevOps/DropDownReactOnSpring";
import DropDownLinux from "./DropDevOps/DropDownLinux";
import DropDownGit from "./DropDevOps/DropDownGit";
import DropDownNginx from "./DropDevOps/DropDownNginx";
import AsideWrapperLayout from "../../components/AsideWrapperLayout";

const DevOps_page = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const toggleSideNavbar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeSidebar);
    return () => window.removeEventListener("resize", closeSidebar);
  }, []);

  return (
    <FlexLayout>
      <FaBars className="css-fa-bars" onClick={toggleSideNavbar} />

      {showSidebar && (
        <AsideWrapperLayout>
          <SideBarLink pageName="DevOps Home" internalLink="/devops" />
          <DropDownGit />
          <DropDownReactOnSpring />
          <DropDownNetlify />
          <DropDownRender />
          <DropDownNginx />
          <DropDownTomcat />
          <DropDownLinux />
        </AsideWrapperLayout>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default DevOps_page;
