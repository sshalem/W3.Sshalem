/*


*/
import { Outlet, useLocation } from "react-router-dom";

const GipsyKings = () => {
  let location = useLocation();
  return <section>{location.pathname === "/guitar/gipsy-kings" ? <div className="text-3xl">GipsyKings main page ...</div> : <Outlet />}</section>;
};

export default GipsyKings;
