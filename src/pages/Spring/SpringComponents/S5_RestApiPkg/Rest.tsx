import { Outlet, useLocation } from "react-router-dom";

const Rest = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/rest" ? <div className="text-3xl">rest main page ...</div> : <Outlet />}</section>;
};
export default Rest;
