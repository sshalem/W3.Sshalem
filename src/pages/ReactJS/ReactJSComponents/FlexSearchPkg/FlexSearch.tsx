import { Outlet, useLocation } from "react-router-dom";

const FlexSearch = () => {
  let location = useLocation();
  return <section>{location.pathname === "/reactJS/flex-search" ? <div className="text-3xl">FlexSearch Main ...</div> : <Outlet />}</section>;
};
export default FlexSearch;
