/*


*/
import { Outlet, useLocation } from "react-router-dom";

const FastApi = () => {
  let location = useLocation();

  return <section>{location.pathname === "/python/fastapi" ? <div className="text-3xl">FastApi Main ...</div> : <Outlet />}</section>;
};
export default FastApi;
