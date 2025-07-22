import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink } from "../components";
import { DropDownApplicationProperties, DropDownJpa, DropDownRest } from "../DropDown";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Spring = () => {
  // const { openList, handleOpenList } = useAppContext();
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
      <FaBars className="fixed left-5 top-16 z-50 cursor-pointer bg-blue-950 text-white md:hidden" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="Spring Home" internalLink="." />
            <DropDownApplicationProperties />
            <DropDownJpa />
            <DropDownRest />

            {/* <SideBarLink pageName="Rest" internalLink="rest" />
            <SideBarLink pageName="Spring Docs" internalLink="spring-doc" />
            <SideBarLink pageName="Swagger" internalLink="swagger" />
            <SideBarLink pageName="Open AI" internalLink="open-AI" />
            <SideBarLink pageName="Exception Handling" internalLink="exception-handling" />
            <SideBarLink pageName="Transaction Management" internalLink="transaction-management" />
            <SideBarLink pageName="Caching" internalLink="caching" />
            <SideBarLink pageName="Aop" internalLink="aop" />
            <SideBarLink pageName="SpringSecurity" internalLink="spring-security" />
            <SideBarLink pageName="Logging" internalLink="logging" /> */}
          </div>
        </article>
      )}

      {/* I use here max-h-full (And not , 100vh or 100%), so the my SideNavbar won't scroll with the outlet content */}
      {/* there is another solution , to set the Sidebar as fixed  */}
      {/*  */}
      {/*  */}

      {/* several options */}
      {/* <main className="mt-4 max-h-full"> */}
      {/* <main className="ml-64 max-h-full w-[1150px] min-w-[330px] border-r-[1px] border-solid border-zinc-300 px-8 py-4 pt-1"> */}
      <main className="ml-0 max-h-[750px] w-[1200px] min-w-[400px] overflow-auto border-r-[1px] border-solid border-zinc-300 px-8 py-4 pt-1 sm:ml-0 md:ml-64">
        {/* <main className="ml-64 mt-[50px] max-h-[700px] w-[850px] min-w-[330px] overflow-auto border-r-[1px] border-solid border-zinc-300 px-8 py-4"> */}
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Spring;
