/*


*/
import { Outlet } from "react-router-dom";
import { AsideWrapperLayout, FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import DropDownBasics from "./DropReactJS/D2_DropDownReactBasics";
import DropDownRouter from "./DropReactJS/D4_DropDownRouter";
import DropDownTypeScript from "./DropReactJS/D3_DropDownTypeScript";
import DropDownSetup from "./DropReactJS/D1_DropDownSetup";
import DropDownPagination from "./DropReactJS/D5_DropDownPagination";
import DropDownSearch from "./DropReactJS/D6_DropDownSearch";
import DropDownReactInterviewQuestions from "./DropReactJS/D7_DropDownReactInterviewQuestions";

const ReactJS_page = () => {
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
          <SideBarLink pageName="ReactJS Home" internalLink="/reactJS" />
          <DropDownSetup />
          <DropDownBasics />
          <DropDownTypeScript />
          <DropDownRouter />
          <DropDownPagination />
          <DropDownSearch />
          <DropDownReactInterviewQuestions />
        </AsideWrapperLayout>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default ReactJS_page;
