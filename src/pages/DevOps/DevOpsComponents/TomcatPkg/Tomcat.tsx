import { Outlet, useLocation } from "react-router-dom";

const Tomcat = () => {
  let location = useLocation();
  return <section>{location.pathname === "/devops/tomcat" ? <div className="text-3xl">Tomcat ...</div> : <Outlet />}</section>;
};

export default Tomcat;
