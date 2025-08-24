import { Outlet, useLocation } from "react-router-dom";

const Ide = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/ide" ? <div className="text-3xl">IDE page ...</div> : <Outlet />}</section>;
};
export default Ide;
