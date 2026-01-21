/*


*/
import { Outlet } from "react-router-dom";
import { AsideWrapperLayout, FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import J1_DropDownJavaBasics from "./DropJava/J1_DropDownJavaBasics";
import J3_DropDownDesignPatternCreational from "./DropJava/J3_DropDownDesignPatternCreational";
import J4_DropDownDesignPatternStructural from "./DropJava/J4_DropDownDesignPatternStructural";
import J5_DropDownDesignPatternBehavioral from "./DropJava/J5_DropDownDesignPatternBehavioral";
import J9_DropDownJavaInterviewQuestions from "./DropJava/J9_DropDownJavaInterviewQuestions";
import J2_DropDownDataStructure from "./DropJava/J2_DropDownDataStructure";

const Java_page = () => {
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
          <SideBarLink pageName="Java Home" internalLink="/java" />
          <J1_DropDownJavaBasics />
          <J2_DropDownDataStructure />
          <J3_DropDownDesignPatternCreational />
          <J4_DropDownDesignPatternStructural />
          <J5_DropDownDesignPatternBehavioral />
          <J9_DropDownJavaInterviewQuestions />
        </AsideWrapperLayout>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default Java_page;
