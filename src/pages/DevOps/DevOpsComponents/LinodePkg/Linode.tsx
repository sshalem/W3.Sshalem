import { Outlet, useLocation } from "react-router-dom";

const Linode = () => {
  let location = useLocation();
  return <section>{location.pathname === "/devops/linode" ? <div className="text-3xl">Linode ...</div> : <Outlet />}</section>;
};

export default Linode;
