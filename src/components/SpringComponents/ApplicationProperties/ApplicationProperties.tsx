import { Outlet, useLocation } from "react-router-dom";

const ApplicationProperties = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/application-properties" ? <div className="text-3xl">ApplicationProperties main page ...</div> : <Outlet />}
    </section>
  );
};

export default ApplicationProperties;
