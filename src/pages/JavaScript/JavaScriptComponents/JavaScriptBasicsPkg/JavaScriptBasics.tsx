import { Outlet, useLocation } from "react-router-dom";

const JavaScriptBasics = () => {
  let location = useLocation();
  return (
    <section>{location.pathname === "/java/basics" ? <div className="text-3xl">JavaScript Basics Drop down Main ...</div> : <Outlet />}</section>
  );
};
export default JavaScriptBasics;
