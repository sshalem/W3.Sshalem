/*


*/
import { Outlet } from "react-router-dom";
import { AsideWrapperLayout, FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import DropDownEureka from "./DropMicroService/DropDownEureka";
import DropDownKafka from "./DropMicroService/DropDownKafka";
import DropDownRabbitMQ from "./DropMicroService/DropDownRabbitMQ";
import DropDownDocker from "./DropMicroService/DropDownDocker";
import DropDownMicroServSecurity from "./DropMicroService/DropDownMicroServSecurity";
import DropDownArchitecture from "./DropMicroService/DropDownArchitecture";

const MicroServices_page = () => {
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
          <SideBarLink pageName="MicroService Home" internalLink="/microservices" />
          <DropDownArchitecture />
          <DropDownDocker />
          <DropDownKafka />
          <DropDownRabbitMQ />
          <DropDownEureka />
          <DropDownMicroServSecurity />
        </AsideWrapperLayout>
      )}

      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default MicroServices_page;
