import { Outlet, useLocation } from "react-router-dom";

const Environment = () => {
  let location = useLocation();
  return <section>{location.pathname === "/postman/environment" ? <div className="text-3xl">Environment main page ...</div> : <Outlet />}</section>;
};

export default Environment;
