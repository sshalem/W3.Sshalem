import { Outlet, useLocation } from "react-router-dom";

const Basics = () => {
  let location = useLocation();
  return <section>{location.pathname === "/reactJS/basics" ? <div className="text-3xl">Basics Main ...</div> : <Outlet />}</section>;
};
export default Basics;
