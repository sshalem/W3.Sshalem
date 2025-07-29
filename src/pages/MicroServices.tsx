import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink } from "../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { DropDownEureka } from "../DropDown";

const MicroServices = () => {
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
            <SideBarLink pageName="MicroService Home" internalLink="." />
            <DropDownEureka />
          </div>
        </article>
      )}

      <main className="ml-0 max-h-[750px] w-[1200px] min-w-[400px] overflow-auto border-r-[1px] border-solid border-zinc-300 px-8 py-4 pt-1 sm:ml-0 md:ml-64">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default MicroServices;
