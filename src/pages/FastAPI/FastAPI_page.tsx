/*


*/
import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import D0_DropDownPythonIde from "./DropFastAPI/D0_DropDownFastAPIIde";
import D1_DropDownPythonGeneral from "./DropFastAPI/D1_DropDownPythonGeneral";
import D2_DropDownPythonBasics from "./DropFastAPI/D2_DropDownPythonBasics";
import D3_DropDownPythonDataStructure from "./DropFastAPI/D3_DropDownPythonDataStructure";
import D4_DropDownPythonFastApi from "./DropFastAPI/D4_DropDownPythonFastApi";
import D5_DropDownPythonDjango from "./DropFastAPI/D5_DropDownPythonDjango";

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
            <D0_DropDownPythonIde />
            <D1_DropDownPythonGeneral />
            <D2_DropDownPythonBasics />
            <D3_DropDownPythonDataStructure />
            <D4_DropDownPythonFastApi />
            <D5_DropDownPythonDjango />
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
