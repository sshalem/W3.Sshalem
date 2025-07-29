import { Outlet, useLocation } from "react-router-dom";

const Eureka = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/eureka" ? <div className="text-3xl">Eureka main page ...</div> : <Outlet />}
    </section>
  );
};

export default Eureka;
