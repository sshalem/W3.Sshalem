/*


*/
import { Outlet, useLocation } from "react-router-dom";

const Caching = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/caching" ? <div className="text-3xl">Caching main page ...</div> : <Outlet />}</section>;
};

export default Caching;
