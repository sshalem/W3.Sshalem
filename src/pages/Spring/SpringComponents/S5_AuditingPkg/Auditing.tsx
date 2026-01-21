import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Auditing = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/spring/audit" ? (
        <Subject title="audit ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Auditing;
