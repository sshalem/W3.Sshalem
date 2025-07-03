import { NavLink, useLocation } from "react-router-dom";
import { links } from "../utils/links";

const Navbar = () => {
  let location = useLocation();

  return (
    <div className="fixed top-14 h-[33px] w-full select-none bg-gray-800 uppercase tracking-wider text-white">
      <nav className="fixed left-0 right-0 top-14 z-[3] m-auto h-[33px] w-full max-w-[1750px] align-middle">
        {links.map((subject, index) => {
          // console.log(location);
          return (
            <NavLink to={`${subject}`} key={index}>
              {/* I substring subject from the 1 digit , since I dont want to have the '/' in the navbar for each link */}
              <div className={`${location.pathname === subject ? `bg-blue-600` : `hover:bg-slate-700`} inline-block h-full px-3`}>
                <div className="inline-block align-sub">{subject.substring(1, 50)}</div>
              </div>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
