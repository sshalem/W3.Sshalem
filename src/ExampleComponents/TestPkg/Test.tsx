import { Outlet, useLocation } from "react-router-dom";

const Test = () => {
  let location = useLocation();
  return <section>{location.pathname === "/example/test" ? <div className="text-3xl">Test main page ...</div> : <Outlet />}</section>;
};

export default Test;
