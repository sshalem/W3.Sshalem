import { Outlet, useLocation } from "react-router-dom";

const Auditing = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/audit" ? <div className="text-3xl">audit main page ...</div> : <Outlet />}</section>;
};

export default Auditing;
