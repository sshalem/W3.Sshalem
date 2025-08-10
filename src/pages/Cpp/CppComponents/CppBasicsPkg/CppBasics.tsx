import { Outlet, useLocation } from "react-router-dom";

const CppBasics = () => {
  let location = useLocation();
  return <section>{location.pathname === "/c++/cpp-basics" ? <div className="text-3xl">Cpp Basics ...</div> : <Outlet />}</section>;
};

export default CppBasics;
