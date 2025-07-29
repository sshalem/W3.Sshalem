import { Link, Outlet, useLocation } from "react-router-dom";
import { CaretDown, CaretUp, GridLayout } from "../components";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
// import { DropDownEureka } from "../DropDown";

const ReactJS = () => {
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
        // setListHeight(divRef.current.scrollHeight);
      }
    } else {
      setShowList(false);
    }
  }, [location.pathname]);

  return (
    <GridLayout>
      <FaBars className="fixed left-5 top-16 z-50 cursor-pointer bg-blue-950 text-white md:hidden" onClick={toggleSideNavbar} />

      {showSidebar && (
        // <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
        //   <div className="relative h-full w-full">
        //     <div className="h-3"></div>

        //   {/* <div>
        //     <Link to={"."}>
        //       <div className="text-[15px] text-base leading-[1.65]">
        //         {location.pathname === "/reactJS" ? (
        //           <div className="bg-gray-300 pl-8 font-medium text-black">React Home</div>
        //         ) : (
        //           <div className="pl-8 hover:bg-gray-300">React Home</div>
        //         )}
        //       </div>
        //     </Link>
        //   </div>

        //   <div>
        //     <Link to={"reactRouter"}>
        //       <div className="text-[15px] text-base leading-[1.65]">
        //         {location.pathname === "/reactJS/reactRouter" ? (
        //           <div className="bg-gray-300 pl-8 font-medium text-black">React Router</div>
        //         ) : (
        //           <div className="pl-8 hover:bg-gray-300">React Router</div>
        //         )}
        //       </div>
        //     </Link>
        //   </div>

        //   <div>
        //     <Link to={"reactJsx"}>
        //       <div className="text-[15px] text-base leading-[1.65]">
        //         {location.pathname === "/reactJS/reactJsx" ? (
        //           <div className="bg-gray-300 pl-8 font-medium text-black">React Jsx</div>
        //         ) : (
        //           <div className="pl-8 hover:bg-gray-300">React Jsx</div>
        //         )}
        //       </div>
        //     </Link>
        //   </div>
        // </div> */}
        // </article>
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            {/* for the home page instead of '.' I set as string dot, so in  */}
            {/* the logic in SideBarLink will work */}
            {/* <SideBarLink pageName="Microservice Home" internalLink="." /> */}
            <div>
              <Link to={"."}>
                <div className="text-[15px] text-base leading-[1.65]">
                  {location.pathname === "/reactJS" ? (
                    <div className="bg-gray-300 pl-8 font-medium text-black">ReactJS Home</div>
                  ) : (
                    <div className="pl-8 hover:bg-gray-300">ReactJS Home</div>
                  )}
                </div>
              </Link>
            </div>
            {/* ====================================== */}
            {/* =====  React Router DropDown ========= */}
            {/* ====================================== */}
            <section className="relative">
              <article className="pointer-events-none">
                {location.pathname === "/reactJS/reactRouter" ? (
                  <div>{showList ? <CaretUp /> : <CaretDown />}</div>
                ) : (
                  <div className="opacity-20">
                    <CaretDown />
                  </div>
                )}
              </article>
              <article onClick={handleOpenList} className="select-none">
                {/* SideDropDownTopic */}
                <Link to={"reactRouter"}>
                  <div className="text-[15px] text-base leading-[1.65]">
                    {location.pathname === "/reactJS/reactRouter" ? (
                      <div className="bg-gray-300 pl-8 font-medium text-black">React Router</div>
                    ) : (
                      <div className="pl-8 hover:bg-gray-300">React Router</div>
                    )}
                  </div>
                </Link>

                {/* DropDown Item  */}
                <div
                  style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
                  className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
                  ref={divRef}
                >
                  {/* <SideDropdownLink pageName="Eureka Server" internalLink="eureka/eureka-server" /> */}
                  <Link to={"eureka/eureka-server"}>
                    <div className="text-[15px] text-base leading-[1.65]">
                      {location.pathname === "/microservices/eureka/eureka-server" ? (
                        <div className="bg-gray-300 pl-8 font-medium text-black">Eureka</div>
                      ) : (
                        <div className="pl-8 hover:bg-gray-300">Eureka</div>
                      )}
                    </div>
                    {/* <div className="text-[15px] text-base leading-[1.65]">
                      {location.pathname.substring(8).length === 0 && internalLink === "." ? (
                        <div className="bg-blue-600 pl-12 text-white">Eureka Server</div>
                      ) : location.pathname.substring(8) === internalLink ? (
                        <div className="bg-blue-600 pl-12 text-white">Eureka Server</div>
                      ) : (
                        <div className="pl-12 hover:bg-gray-300">Eureka Server</div>
                      )}
                    </div> */}
                  </Link>
                </div>
                {/*End DropDown Item  */}
                {/*Start DropDown Item  */}
                <div
                  style={showList ? { height: `${listHeight}px` } : { height: "0px" }}
                  className={`overflow-hidden bg-white transition-[height] duration-100 ease-in-out`}
                  ref={divRef}
                >
                  {/* <SideDropdownLink pageName="Eureka Server" internalLink="eureka/eureka-server" /> */}
                  <Link to={"eureka/eureka-server"}>
                    <div className="text-[15px] text-base leading-[1.65]">
                      {location.pathname === "/microservices/eureka/eureka-server" ? (
                        <div className="bg-gray-300 pl-8 font-medium text-black">Eureka</div>
                      ) : (
                        <div className="pl-8 hover:bg-gray-300">Eureka</div>
                      )}
                    </div>
                    {/* <div className="text-[15px] text-base leading-[1.65]">
                      {location.pathname.substring(8).length === 0 && internalLink === "." ? (
                        <div className="bg-blue-600 pl-12 text-white">Eureka Server</div>
                      ) : location.pathname.substring(8) === internalLink ? (
                        <div className="bg-blue-600 pl-12 text-white">Eureka Server</div>
                      ) : (
                        <div className="pl-12 hover:bg-gray-300">Eureka Server</div>
                      )}
                    </div> */}
                  </Link>
                </div>
                {/*End DropDown Item  */}
              </article>
            </section>
          </div>
        </article>
      )}

      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default ReactJS;
