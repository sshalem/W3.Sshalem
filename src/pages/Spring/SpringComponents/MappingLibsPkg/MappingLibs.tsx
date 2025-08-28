import { Outlet, useLocation } from "react-router-dom";

const MappingLibs = () => {
  let location = useLocation();
  return <section>{location.pathname === "/spring/mapping-libs" ? <div className="text-3xl">Mapping-libs page ...</div> : <Outlet />}</section>;
};

export default MappingLibs;
