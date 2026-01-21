import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Logging = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/logging" ? (
        <Subject title="Logging ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default Logging;
