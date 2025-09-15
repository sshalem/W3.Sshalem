import { Outlet, useLocation } from "react-router-dom";

const Aop = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/aop" ? <div className="text-3xl">Aop main page ...</div> : <Outlet />}</section>;
};
export default Aop;
