/*


*/
import { Outlet } from "react-router-dom";
import { FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import DropDownBasicConepts from "./DropSql/DropDownBasicConepts";
import DropDownOperatorStatements from "./DropSql/DropDownOperatorStatements";
import AsideWrapperLayout from "../../components/AsideWrapperLayout";

const Sql_page = () => {
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
          <SideBarLink pageName="SQL Home" internalLink="/sql" />
          <DropDownBasicConepts />
          <DropDownOperatorStatements />
        </AsideWrapperLayout>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default Sql_page;
