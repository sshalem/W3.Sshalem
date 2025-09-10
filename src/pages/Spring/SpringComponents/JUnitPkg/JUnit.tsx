import { Outlet, useLocation } from "react-router-dom";

const JUnit = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/junit" ? <div className="text-3xl">JUnit main page ...</div> : <Outlet />}</section>;
};

export default JUnit;
