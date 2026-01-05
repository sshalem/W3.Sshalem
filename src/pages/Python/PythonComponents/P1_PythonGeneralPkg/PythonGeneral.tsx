/*


*/
import { Outlet, useLocation } from "react-router-dom";

const PythonGeneral = () => {
  let location = useLocation();

  return <section>{location.pathname === "/python/general" ? <div className="text-3xl">Python General Main ...</div> : <Outlet />}</section>;
};
export default PythonGeneral;
