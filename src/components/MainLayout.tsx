import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { SiStudyverse } from "react-icons/si";

const MainLayout = () => {
  return (
    <section>
      <article className="sticky top-0 bg-white">
        <div className="mx-auto w-11/12">
          <Link to={"/"}>
            <div className="my-2 inline-flex select-none gap-2 rounded-md bg-blue-600 p-2 text-white hover:bg-blue-400">
              <SiStudyverse className="self-center" /> s.shalem tutorials
            </div>
          </Link>
        </div>
        <Navbar />
      </article>
      <Outlet />
    </section>
  );
};

export default MainLayout;
