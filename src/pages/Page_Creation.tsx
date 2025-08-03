import { Link, Outlet } from "react-router-dom";
import { GridLayout } from "../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import DropDownAppTree from "../DropDown/DropPageCreation/DropDownAppTree";
import DropDownComponentTree from "../DropDown/DropPageCreation/DropDownComponentTree";

const Page_Creation = () => {
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
            <DropDownAppTree />
            <DropDownComponentTree />

            {/* <Link to="/page_creation/app-tree">
              <div className="text-[15px] text-base leading-[1.65]">
                {location.pathname.includes("/page_creation/app-tree") ? (
                  <div className="bg-gray-300 pl-8 font-medium text-black">App Tree</div>
                ) : (
                  <div className="pl-8 hover:bg-gray-300">App Tree</div>
                )}
              </div>
            </Link> */}

            {/*  */}

            {/* <Link to="/page_creation/component-tree">
              <div className="text-[15px] text-base leading-[1.65]">
                {location.pathname.includes("/page_creation/component-tree") ? (
                  <div className="bg-gray-300 pl-8 font-medium text-black">Component Tree</div>
                ) : (
                  <div className="pl-8 hover:bg-gray-300">Component Tree</div>
                )}
              </div>
            </Link> */}

            {/*  */}
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Page_Creation;
