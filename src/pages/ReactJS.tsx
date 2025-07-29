import { Link, Outlet, useLocation } from "react-router-dom";
import { GridLayout } from "../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const ReactJS = () => {
  // const { openList, handleOpenList } = useAppContext();
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  let location = useLocation();

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

  // useEffect(() => {
  // Only run when pathname changes
  //  Maybe I should do it with useState , to control the state of location.path?????
  //   console.log("ReactJS :", location.pathname);
  // }, [location.pathname]);

  return (
    <GridLayout>
      <FaBars className="fixed left-5 top-16 z-50 cursor-pointer bg-blue-950 text-white md:hidden" onClick={toggleSideNavbar} />

      <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
        <div className="relative h-full w-full">
          <div className="h-3"></div>
          {/* <SideBarLink pageName="React Home" internalLink="." />
          <SideBarLink pageName="React Router" internalLink="reactRouter" />
          <SideBarLink pageName="React Jsx" internalLink="reactJsx" /> */}

          {/*  */}
          <div>
            <Link to={"."}>
              <div className="text-[15px] text-base leading-[1.65]">
                {location.pathname === "/reactJS" ? (
                  <div className="bg-gray-300 pl-8 font-medium text-black">React Home</div>
                ) : (
                  <div className="pl-8 hover:bg-gray-300">React Home</div>
                )}
              </div>
            </Link>
          </div>

          <div>
            <Link to={"reactRouter"}>
              <div className="text-[15px] text-base leading-[1.65]">
                {location.pathname === "/reactJS/reactRouter" ? (
                  <div className="bg-gray-300 pl-8 font-medium text-black">React Router</div>
                ) : (
                  <div className="pl-8 hover:bg-gray-300">React Router</div>
                )}
              </div>
            </Link>
          </div>

          <div>
            <Link to={"reactJsx"}>
              <div className="text-[15px] text-base leading-[1.65]">
                {location.pathname === "/reactJS/reactJsx" ? (
                  <div className="bg-gray-300 pl-8 font-medium text-black">React Jsx</div>
                ) : (
                  <div className="pl-8 hover:bg-gray-300">React Jsx</div>
                )}
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </article>

      <main className="ml-0 max-h-[750px] w-[1200px] min-w-[400px] overflow-auto border-r-[1px] border-solid border-zinc-300 px-8 py-4 pt-1 sm:ml-0 md:ml-64">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default ReactJS;
