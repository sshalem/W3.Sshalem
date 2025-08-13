import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import DropDownApplicationProperties from "./DropSpringPage/DropDownApplicationProperties";
import DropDownLogging from "./DropSpringPage/DropDownLogging";
import DropDownJpa from "./DropSpringPage/DropDownJpa";
import DropDownRest from "./DropSpringPage/DropDownRest";

const Spring_page = () => {
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
    <GridLayout>
      <FaBars className="css-fa-bars" onClick={toggleSideNavbar} />
      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] z-50 w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="Spring Home" internalLink="/spring" />

            <DropDownApplicationProperties />
            <DropDownLogging />
            <DropDownJpa />
            <DropDownRest />
          </div>
        </article>
      )}

      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Spring_page;
