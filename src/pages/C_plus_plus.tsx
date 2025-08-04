import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GridLayout } from "../components";

const C_plus_plus = () => {
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

            {/* Example of SideBarLink & DropDownSubPage */}
            {/* <SideBarLink pageName="MicroService Home" internalLink="/microservices" /> */}
            {/* <DropDownEureka /> */}
            <Link to={"/c++"}>
              <div>C++ Home</div>
            </Link>
            <Link to={"/c++/fundamental-concepts"}>
              <div>Fundamental Concepts</div>
            </Link>
            <Link to={"/c++/oop"}>
              <div>OOP</div>
            </Link>
            <Link to={"/c++/standard-template-lib"}>
              <div>Standard Template Lib</div>
            </Link>
            <Link to={"/c++/advanced-topics"}>
              <div>Advanced Topics</div>
            </Link>
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default C_plus_plus;
