import { Outlet, useLocation } from "react-router-dom";

const JavaBasics = () => {
  let location = useLocation();
  return <section>{location.pathname === "/java/basics" ? <div className="text-3xl">Basics Main ...</div> : <Outlet />}</section>;
};
export default JavaBasics;
