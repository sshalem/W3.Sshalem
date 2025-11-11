/*


*/
import { Outlet, useLocation } from "react-router-dom";

const SpringBatch = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/batch" ? <div className="text-3xl">Spring Batch main page ...</div> : <Outlet />}</section>;
};

export default SpringBatch;
