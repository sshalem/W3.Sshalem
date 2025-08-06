import { Outlet, useLocation } from "react-router-dom";

const PointersMain = () => {
  let location = useLocation();

  return <section>{location.pathname === "/c++/fundamental-concepts" ? <div className="text-3xl">Subject Main ...</div> : <Outlet />}</section>;
};

export default PointersMain;
