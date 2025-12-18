/*


*/
import { Outlet, useLocation } from "react-router-dom";

const DataStructures = () => {
  let location = useLocation();
  return <section>{location.pathname === "/java/data-structures" ? <div className="text-3xl">Data Structures Main ...</div> : <Outlet />}</section>;
};
export default DataStructures;
