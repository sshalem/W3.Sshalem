import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Nginx = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/devops/nginx" ? (
        <Subject title="NGINX Server ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Nginx;
