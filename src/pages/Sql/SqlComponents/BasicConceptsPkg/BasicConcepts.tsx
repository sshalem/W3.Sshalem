import { Outlet, useLocation } from "react-router-dom";

const BasicConcepts = () => {
  let location = useLocation();
  return <section>{location.pathname === "/sql/basic-concepts" ? <div className="text-3xl">SQL Basic concepts ...</div> : <Outlet />}</section>;
};

export default BasicConcepts;
