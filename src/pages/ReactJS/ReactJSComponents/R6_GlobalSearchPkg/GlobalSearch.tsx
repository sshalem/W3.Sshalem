/*


*/
import { Outlet, useLocation } from "react-router-dom";

const GlobalSearch = () => {
  let location = useLocation();
  return <section>{location.pathname === "/reactJS/global-search" ? <div className="text-3xl">Global Search Main ...</div> : <Outlet />}</section>;
};
export default GlobalSearch;
