import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const ApplicationProperties = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/application-properties" ? (
        <Subject title="Spring Application Properties ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default ApplicationProperties;
