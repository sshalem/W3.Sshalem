import { Outlet, useLocation } from "react-router-dom";

const Pagination = () => {
  let location = useLocation();
  return <section>{location.pathname === "/reactJS/pagination" ? <div className="text-3xl">Pagination Script ...</div> : <Outlet />}</section>;
};
export default Pagination;
