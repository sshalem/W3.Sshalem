/*


*/
import { Outlet, useLocation } from "react-router-dom";

const SpringIO = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/io" ? <div className="text-3xl">SpringIO main page ...</div> : <Outlet />}</section>;
};

export default SpringIO;
