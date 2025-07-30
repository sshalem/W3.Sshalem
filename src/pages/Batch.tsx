import { Outlet } from "react-router-dom";
import { GridLayout } from "../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Batch = () => {
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
            Drop Down of Page Batch
            {/* Example of SideBarLink & DropDownSubPage */}
            {/* <SideBarLink pageName="MicroService Home" internalLink="/microservices" /> */}
            {/* <DropDownEureka /> */}
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
        text of Page Batch
      </main>
    </GridLayout>
  );
};

export default Batch;
