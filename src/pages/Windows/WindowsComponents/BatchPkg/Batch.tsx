import { Outlet, useLocation } from "react-router-dom";

const Batch = () => {
  let location = useLocation();
  return <section>{location.pathname === "/windows/batch" ? <div className="text-3xl">Batch main page ...</div> : <Outlet />}</section>;
};

export default Batch;
