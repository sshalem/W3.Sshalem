/*


*/
import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import D0_DropDownFastAPIIde from "./DropFastAPI/D0_DropDownFastAPIIde";
import D1_DropDownFastApiConfigEnvProfiles from "./DropFastAPI/D1_DropDownFastApiConfigEnvProfiles";

const FastAPI_page = () => {
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
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="FastAPI Home" internalLink="/fastapi" />
            <D0_DropDownFastAPIIde />
            <D1_DropDownFastApiConfigEnvProfiles />
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default FastAPI_page;
