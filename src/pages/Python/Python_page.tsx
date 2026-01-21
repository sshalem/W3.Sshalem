/*


*/
import { Outlet } from "react-router-dom";
import { AsideWrapperLayout, FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import D0_DropDownPythonIde from "./DropPython/D0_DropDownPythonIde";
import D1_DropDownPythonGeneral from "./DropPython/D1_DropDownPythonGeneral";
import D2_DropDownPythonBasics from "./DropPython/D2_DropDownPythonBasics";
import D3_DropDownPythonDataStructure from "./DropPython/D3_DropDownPythonDataStructure";
import D4_DropDownPythonFastApi from "./DropPython/D4_DropDownPythonFastApi";
import D5_DropDownPythonDjango from "./DropPython/D5_DropDownPythonDjango";

const Python_page = () => {
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
          <SideBarLink pageName="Python Home" internalLink="/python" />
          <D0_DropDownPythonIde />
          <D1_DropDownPythonGeneral />
          <D2_DropDownPythonBasics />
          <D3_DropDownPythonDataStructure />
          <D4_DropDownPythonFastApi />
          <D5_DropDownPythonDjango />
        </AsideWrapperLayout>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default Python_page;
