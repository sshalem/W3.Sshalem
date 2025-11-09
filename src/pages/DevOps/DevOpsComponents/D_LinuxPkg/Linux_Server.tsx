/*
/devops/linux-server
Linux_Server
*/
import { Outlet, useLocation } from "react-router-dom";

const Linux_Server = () => {
  let location = useLocation();
  return <section>{location.pathname === "/devops/linux-server" ? <div className="text-3xl">Linux Server ...</div> : <Outlet />}</section>;
};

export default Linux_Server;
