import { Outlet } from "react-router-dom";
import { FlexLayout } from "..";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Z_PageTemplate = () => {
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
    <FlexLayout>
      <FaBars className="css-fa-bars" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            Drop Down Page Links
            {/* Example of SideBarLink & DropDownSubPage */}
            {/* <SideBarLink pageName="MicroService Home" internalLink="/microservices" /> */}
            {/* <DropDownEureka /> */}
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </FlexLayout>
  );
};

export default Z_PageTemplate;
