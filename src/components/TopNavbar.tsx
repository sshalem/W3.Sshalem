import { useState } from "react";
import { SiStudyverse } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
  const [showTopNavbar, setshowTopNavbar] = useState<boolean>(true);

  const location = useLocation();

  const handleShowContent = () => {
    setshowTopNavbar(!showTopNavbar);
  };
  return (
    <section className="fixed left-0 top-0 -z-[100] mx-auto block h-0 w-full bg-white">
      <article className="top-nav-font absolute left-0 right-0 top-0 z-[4] mx-auto h-14 w-full min-w-[330px] max-w-[1750px] p-0 text-[16px]">
        <nav className="inline-block">
          <Link to={"/"} onClick={handleShowContent}>
            <div className="my-2 inline-flex select-none gap-2 rounded-md bg-white p-2 align-middle text-blue-600 hover:text-blue-600/50">
              <SiStudyverse className="self-center" />
              <div>
                W<sup>3</sup> Sshalem
              </div>
            </div>
          </Link>
          {showTopNavbar && (
            <div className="inline-block">
              <a href="/#about" className="h-full px-4 py-5 align-middle hover:bg-blue-600 hover:text-white">
                about
              </a>
              <a href="/#MyProjects" className="h-full px-4 py-5 align-middle hover:bg-blue-600 hover:text-white">
                MyProjects
              </a>
            </div>
          )}
        </nav>
      </article>
    </section>
  );
};

export default TopNavbar;
