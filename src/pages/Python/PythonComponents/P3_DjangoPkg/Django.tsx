/*


*/
import { Outlet, useLocation } from "react-router-dom";

const Django = () => {
  let location = useLocation();

  return <section>{location.pathname === "/python/django" ? <div className="text-3xl">Python General Main ...</div> : <Outlet />}</section>;
};
export default Django;
