import { Outlet, useLocation } from "react-router-dom";

const SecurityMicroServ = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/microservices/security-microservice" ? (
        <div className="text-3xl">Security Micro Service main page ...</div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default SecurityMicroServ;
