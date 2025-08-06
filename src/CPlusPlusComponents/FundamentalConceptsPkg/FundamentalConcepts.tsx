import { Outlet, useLocation } from "react-router-dom";

const FundamentalConcepts = () => {
  let location = useLocation();

  return (
    <section>{location.pathname === "/c++/fundamental-concepts" ? <div className="text-3xl">Fundamental Concepts ...</div> : <Outlet />}</section>
  );
};

export default FundamentalConcepts;
