import { NavLink, useLocation } from "react-router-dom";
import { links } from "../utils/links";

const Navbar = () => {
  let location = useLocation();

  return (
    <div className="select-none bg-gray-800 uppercase tracking-wider text-white">
      <div className="mx-auto w-11/12">
        <nav className="flex flex-row">
          {links.map((subject, index) => {
            return (
              <NavLink to={`${subject}`} key={index} className={({ isActive }) => (isActive ? "bg-blue-600" : "")}>
                {/* I substring subject from the 1 digit , since I dont want to have the '/' in the navbar for each link */}
                <div className={`${location.pathname === subject ? `` : `hover:bg-slate-700`} px-3 py-2`}>{subject.substring(1, 50)}</div>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
