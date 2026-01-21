import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const ExceptionHandling = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/exception-handling" ? (
        <Subject title="exception-handling ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default ExceptionHandling;
