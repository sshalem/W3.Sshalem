import { Outlet, useLocation } from "react-router-dom";

const Jpa = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/jpa" ? <div className="text-3xl">jpa main page ...</div> : <Outlet />}</section>;
};

export default Jpa;
