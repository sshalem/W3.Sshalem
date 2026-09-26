/*


*/
import { Outlet } from "react-router-dom";
import { AsideWrapperLayout, FlexLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import J1_DropDownJavaBasics from "./DropJava/J1_DropDownJavaBasics";
import J3_DropDownDataStructure from "./DropJava/J3_DropDownDataStructure";
import J4_DropDownDesignPatternCreational from "./DropJava/J4_DropDownDesignPatternCreational";
import J5_DropDownDesignPatternStructural from "./DropJava/J5_DropDownDesignPatternStructural";
import J6_DropDownDesignPatternBehavioral from "./DropJava/J6_DropDownDesignPatternBehavioral";
import J9_DropDownJavaInterviewQuestions from "./DropJava/J9_DropDownJavaInterviewQuestions";
import J2_DropDownConcurrency from "./DropJava/J2_DropDownConcurrency";

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
          <J2_DropDownConcurrency />
          <J3_DropDownDataStructure />
          <J4_DropDownDesignPatternCreational />
          <J5_DropDownDesignPatternStructural />
          <J6_DropDownDesignPatternBehavioral />
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
