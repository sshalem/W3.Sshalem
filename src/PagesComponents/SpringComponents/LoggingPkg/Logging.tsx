import { Outlet, useLocation } from "react-router-dom";

const Logging = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/logging" ? <div className="text-3xl">Logging main page ...</div> : <Outlet />}</section>;
};
export default Logging;
