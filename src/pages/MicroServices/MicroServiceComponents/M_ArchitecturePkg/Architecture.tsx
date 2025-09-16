import { Outlet, useLocation } from "react-router-dom";

const Architecture = () => {
  let location = useLocation();

  return (
    <section>{location.pathname === "/microservices/architecture" ? <div className="text-3xl">Architecture main page ...</div> : <Outlet />}</section>
  );
};

export default Architecture;
