import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Tomcat = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/devops/tomcat" ? (
        <Subject title="Tomcat Server ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Tomcat;
