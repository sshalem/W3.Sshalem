import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink } from "../../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import D1_DropDownIDE from "./DropSpringPage/D1_DropDownIDE";
import D2_DropDownApplicationProperties from "./DropSpringPage/D2_DropDownApplicationProperties";
import D3_DropDownLogging from "./DropSpringPage/D3_DropDownLogging";
import D4_DropDownJpa from "./DropSpringPage/D4_DropDownJpa";
import D5_DropDownAudit from "./DropSpringPage/D5_DropDownAudit";
import D6_DropDownExceptionHandling from "./DropSpringPage/D6_DropDownExceptionHandling";
import D7_DropDownRest from "./DropSpringPage/D7_DropDownRest";
import D8_DropDownSecurity from "./DropSpringPage/D8_DropDownSecurity";
import D9_DropDownAop from "./DropSpringPage/D9_DropDownAop";
import D10_DropDownTransactionManagement from "./DropSpringPage/D10_DropDownTransactionManagement";
import D11_DropDownSpringBatch from "./DropSpringPage/D11_DropDownSpringBatch";
import D12_DropDownCaching from "./DropSpringPage/D12_DropDownCaching";
import D13_DropDownSpringIO from "./DropSpringPage/D13_DropDownSpringIO";
import D14_DropDownJUnit from "./DropSpringPage/D14_DropDownJUnit";
import D15_DropDownJenkins from "./DropSpringPage/D15_DropDownJenkins";
import D16_DropDownInterviewQuestions from "./DropSpringPage/D16_DropDownInterviewQuestions";

const Spring_page = () => {
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
        <article className="fixed bottom-0 top-[89px] z-50 w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="Spring Home" internalLink="/spring" />
            <D1_DropDownIDE />
            <D2_DropDownApplicationProperties />
            <D3_DropDownLogging />
            <D4_DropDownJpa />
            <D5_DropDownAudit />
            <D6_DropDownExceptionHandling />
            <D7_DropDownRest />
            <D8_DropDownSecurity />
            <D9_DropDownAop />
            <D10_DropDownTransactionManagement />
            <D11_DropDownSpringBatch />
            <D12_DropDownCaching />
            <D13_DropDownSpringIO />
            <D14_DropDownJUnit />
            <D15_DropDownJenkins />
            <D16_DropDownInterviewQuestions />
          </div>
        </article>
      )}

      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Spring_page;
