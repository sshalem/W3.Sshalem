import { Outlet, useLocation } from "react-router-dom";

const Jenkins = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/jenkins" ? <div className="text-3xl">Jenkins main page ...</div> : <Outlet />}</section>;
};

export default Jenkins;
