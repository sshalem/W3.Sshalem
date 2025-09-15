import { Outlet, useLocation } from "react-router-dom";

const ExceptionHandling = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/exception-handling" ? <div className="text-3xl">ExceptionHandling main page ...</div> : <Outlet />}
    </section>
  );
};
export default ExceptionHandling;
