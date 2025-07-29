import { Link, Outlet, useLocation } from "react-router-dom";
import { CaretDown, CaretUp, GridLayout } from "../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
// import { DropDownEureka } from "../DropDown";

const MicroServices = () => {
  // const { openList, handleOpenList } = useAppContext();
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [showList, setShowList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>();

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

  let location = useLocation();

  const divRef = useRef<HTMLDivElement | null>(null);

  const handleOpenList = () => {
    setShowList(!showList);
    if (divRef.current !== null) {
      setListHeight(divRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    console.log(location.pathname);

    if (location.pathname.substring(8).includes("eureka")) {
      if (location.pathname.split("/")[3] === undefined) {
        // do nothing , this way I prevent the re-render of  setShowList(true);
      } else {
        setShowList(true);
      }
      if (divRef.current !== null) {
        setListHeight(divRef.current.scrollHeight);
      }
    } else {
      setShowList(false);
    }
  }, [location.pathname]);

  return (
    <GridLayout>
      <FaBars className="fixed left-5 top-16 z-50 cursor-pointer bg-blue-950 text-white md:hidden" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            {/* for the home page instead of '.' I set as string dot, so in  */}
            {/* the logic in SideBarLink will work */}
            {/* <SideBarLink pageName="Microservice Home" internalLink="." /> */}

            <div>
              <Link to={"."}>
                <div className="text-[15px] text-base leading-[1.65]">
                  {location.pathname === "/microservices" ? (
                    <div className="bg-gray-300 pl-8 font-medium text-black">Microservice Home</div>
                  ) : (
                    <div className="pl-8 hover:bg-gray-300">Microservice Home</div>
                  )}
                </div>
              </Link>
            </div>

            <article className="relative">
              <div className="pointer-events-none">
                {location.pathname === "/microservices/eureka" ? (
                  <div>{showList ? <CaretUp /> : <CaretDown />}</div>
                ) : (
                  <div className="opacity-20">
                    <CaretDown />
                  </div>
                )}
              </div>
              <div onClick={handleOpenList} className="select-none">
                <Link to={"eureka"}>
                  <div className="text-[15px] text-base leading-[1.65]">
                    {location.pathname === "/microservices/eureka" ? (
                      <div className="bg-gray-300 pl-8 font-medium text-black">Eureka</div>
                    ) : (
                      <div className="pl-8 hover:bg-gray-300">Eureka</div>
                    )}
                  </div>
                </Link>
              </div>
            </article>
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
