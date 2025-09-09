import { Outlet, useLocation } from "react-router-dom";

const SpringSecurity = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/security" ? <div className="text-3xl">Spring Security main page ...</div> : <Outlet />}</section>;
};
export default SpringSecurity;
