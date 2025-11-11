/*


*/
import { Outlet, useLocation } from "react-router-dom";

const Router = () => {
  let location = useLocation();
  return <section>{location.pathname === "/reactJS/router" ? <div className="text-3xl">react Router Main ...</div> : <Outlet />}</section>;
};
export default Router;
