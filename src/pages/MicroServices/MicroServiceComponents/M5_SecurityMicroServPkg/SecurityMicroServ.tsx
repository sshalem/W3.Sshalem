import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const SecurityMicroServ = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/microservices/security-microservice" ? (
        <Subject title="Security Micro Service ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default SecurityMicroServ;
