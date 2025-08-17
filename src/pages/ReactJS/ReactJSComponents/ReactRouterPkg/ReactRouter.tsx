import { Outlet, useLocation } from "react-router-dom";

const ReactRouter = () => {
  let location = useLocation();
  return <section>{location.pathname === "/reactJS/react-router" ? <div className="text-3xl">react-router Main ...</div> : <Outlet />}</section>;
};
export default ReactRouter;
