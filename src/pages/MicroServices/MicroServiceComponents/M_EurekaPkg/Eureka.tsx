import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const Eureka = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/microservices/eureka" ? (
        <Subject title="Security Micro Service ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default Eureka;
