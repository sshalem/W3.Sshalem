/*


*/
import { Outlet } from "react-router-dom";
import { FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import D1_DropDownGuitarGeneral from "./DropGuitar/D1_DropDownGuitarGeneral";
import D2_DropDownGipsyKings from "./DropGuitar/D2_DropDownGipsyKings";
import D3_DropDownFlamenco from "./DropGuitar/D3_DropDownFlamenco";
import D4_DropDownAntonGlushkin from "./DropGuitar/D4_DropDownAntonGlushkin";
import AsideWrapperLayout from "../../components/AsideWrapperLayout";

const Guitar_page = () => {
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
          <SideBarLink pageName="Guitar Home" internalLink="/guitar" />
          <D1_DropDownGuitarGeneral />
          <D2_DropDownGipsyKings />
          <D3_DropDownFlamenco />
          <D4_DropDownAntonGlushkin />
        </AsideWrapperLayout>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default Guitar_page;
