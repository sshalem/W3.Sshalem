/*


*/
import { Outlet } from "react-router-dom";
import { FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import D0_DropDownFastAPIIde from "./DropFastAPI/D0_DropDownFastAPIIde";
import D1_DropDownFastApiConfigEnvProfiles from "./DropFastAPI/D1_DropDownFastApiConfigEnvProfiles";
import D2_DropDownFastApiLogging from "./DropFastAPI/D2_DropDownFastApiLogging";
import D3_DropDownFastApiRouter from "./DropFastAPI/D3_DropDownFastApiRouter";
import D4_DropDownFastApiExceptions from "./DropFastAPI/D4_DropDownFastApiExceptions";
import D5_DropDownFastApiSQLAlchemy from "./DropFastAPI/D5_DropDownFastApiSQLAlchemy";
import D6_DropDownFastApiAuditing from "./DropFastAPI/D6_DropDownFastApiAuditing";
import D7_DropDownFastApiSecurity from "./DropFastAPI/D7_DropDownFastApiSecurity";
import D8_DropDownFastApiCaching from "./DropFastAPI/D8_DropDownFastApiCaching";

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
    <FlexLayout>
      <FaBars className="css-fa-bars" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="FastAPI Home" internalLink="/fastapi" />
            <D0_DropDownFastAPIIde />
            <D1_DropDownFastApiConfigEnvProfiles />
            <D2_DropDownFastApiLogging />
            <D3_DropDownFastApiRouter />
            <D4_DropDownFastApiExceptions />
            <D5_DropDownFastApiSQLAlchemy />
            <D6_DropDownFastApiAuditing />
            <D7_DropDownFastApiSecurity />
            <D8_DropDownFastApiCaching />
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default FastAPI_page;
