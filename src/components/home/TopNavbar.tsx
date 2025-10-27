import { useEffect } from "react";
import { SiStudyverse } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  const handleTopOfPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 'smooth' for smooth scroll
  };

  useEffect(() => {
    console.log(hash);

    // Checks if url with hash is present
    if (hash) {
      // 1. remove '#' from hash
      // 2. find the element with assigned hash , for example
      // id="about",
      // id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <section className="fixed left-0 top-0 -z-[100] mx-auto block h-0 w-full bg-white">
      <article className="top-nav-font absolute left-0 right-0 top-0 z-[4] mx-auto h-14 w-full min-w-[330px] max-w-[1750px] p-0 text-[16px]">
        <nav className="inline-block">
          <Link to={"/"} onClick={handleTopOfPage}>
            <div className="my-2 inline-flex select-none gap-2 rounded-md bg-white p-2 align-middle text-blue-600 hover:text-blue-600/50">
              <SiStudyverse className="self-center" />
              <div>
                W<sup>3</sup> Sshalem
              </div>
            </div>
          </Link>

          <div className="inline-block">
            <Link to="/#about" className="h-full px-4 py-5 align-middle hover:bg-blue-600 hover:text-white" onClick={handleTopOfPage}>
              about
            </Link>
            <Link to="/#MyProjects" className="h-full px-4 py-5 align-middle hover:bg-blue-600 hover:text-white" onClick={handleTopOfPage}>
              MyProjects
            </Link>
          </div>
          <div className="ml-16 inline-block h-full align-middle">
            <input
              type="text"
              className="rounded-md border-2 border-blue-700 px-2 py-1 tracking-widest text-blue-700 placeholder-blue-200 placeholder:italic focus:outline-none"
              spellCheck="false"
              placeholder="search ..."
            />
          </div>
        </nav>
      </article>
    </section>
  );
};

export default TopNavbar;
