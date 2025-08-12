import { Outlet, useLocation } from "react-router-dom";

const PythonBasics = () => {
  let location = useLocation();
  return <section>{location.pathname === "/python/python-basics" ? <div className="text-3xl">PythonBasics Main ...</div> : <Outlet />}</section>;
};
export default PythonBasics;
