/*


*/
import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import J1_DropDownJavaBasics from "./DropJava/J1_DropDownJavaBasics";
import J9_DropDownJavaInterviewQuestions from "./DropJava/J9_DropDownJavaInterviewQuestions";
import J2_DropDownDesignPatternCreational from "./DropJava/J2_DropDownDesignPatternCreational";

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
    <GridLayout>
      <FaBars className="css-fa-bars" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="Java Home" internalLink="/java" />
            <J1_DropDownJavaBasics />
            <J2_DropDownDesignPatternCreational />
            <J9_DropDownJavaInterviewQuestions />
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Java_page;
