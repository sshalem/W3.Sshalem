import { Outlet, useLocation } from "react-router-dom";

const Nginx = () => {
  let location = useLocation();
  return <section>{location.pathname === "/devops/nginx" ? <div className="text-3xl">Nginx ...</div> : <Outlet />}</section>;
};

export default Nginx;
