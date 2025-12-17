/*


*/
import { Outlet, useLocation } from "react-router-dom";

const Flamenco = () => {
  let location = useLocation();
  return <section>{location.pathname === "/guitar/flamenco" ? <div className="text-3xl">Flamenco main page ...</div> : <Outlet />}</section>;
};

export default Flamenco;
