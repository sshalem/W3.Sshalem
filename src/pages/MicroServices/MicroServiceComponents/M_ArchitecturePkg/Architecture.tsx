import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Architecture = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/microservices/architecture" ? (
        <Subject title="Architecture ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Architecture;
