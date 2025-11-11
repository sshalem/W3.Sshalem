/*


*/
import { Outlet, useLocation } from "react-router-dom";

const Z_Component_Outlet = () => {
  let location = useLocation();

  return <section>{location.pathname === "/AAAA/BBBB" ? <div className="text-3xl">DropDown Main ...</div> : <Outlet />}</section>;
};

export default Z_Component_Outlet;
