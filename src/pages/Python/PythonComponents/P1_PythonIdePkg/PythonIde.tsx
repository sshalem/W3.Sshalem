/*


*/
import { Outlet, useLocation } from "react-router-dom";

const PythonIde = () => {
  let location = useLocation();

  return <section>{location.pathname === "/python/ide" ? <div className="text-3xl">Python IDE Main ...</div> : <Outlet />}</section>;
};
export default PythonIde;
